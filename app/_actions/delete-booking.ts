"use server"

import { revalidatePath } from "next/cache"
import { db } from "../_lib/primsa"

export const deleteBooking = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  })
  revalidatePath("/bookings")
}
