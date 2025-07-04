import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

import db from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";
import { formatDate } from '@/app/utils/format';




export const POST = async( req:NextRequest, res:NextResponse) => {
    const requestHeaders = new Headers(req.headers);
    const origin = requestHeaders.get('origin');
    const { bookingId } = await req.json();

    const booking = await db.booking.findUnique({
        where:{id: bookingId},
        include: {
            property: {
                select: {
                    name:true,
                    image:true
                }
            }
        }
    })

    if(!booking) {
        return Response.json(null,{
            status:404,
            statusText:"Not found"
        })
    }

    const {
        totalNights,
        orderTotal,
        checkIn,
        checkOut,
        property: { image, name },
      } = booking;

      try {
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          metadata: { bookingId: booking.id },
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              quantity: 1,
              price_data: {
                currency: 'usd',
    
                product_data: {
                  name: `${name}`,
                  images: [image],
                  description: `Stay in this wonderful place for ${totalNights} nights, from ${formatDate(
                    checkIn
                  )} to ${formatDate(checkOut)}. Enjoy your stay!`,
                },
                unit_amount: orderTotal * 100,
              },
            },
          ],
          mode: 'payment',
          return_url: `${origin}/api/confirm?session_id={CHECKOUT_SESSION_ID}`,
        });
    
        return Response.json({ clientSecret: session.client_secret });
      } catch (error) {
        console.log(error);
    
        return Response.json(null, {
          status: 500,
          statusText: 'Internal Server Error',
        });
      }

}