import { NextResponse } from 'next/server';
import { requestCallFormSchema } from '@/lib/schemas/request-call-form.schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = requestCallFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Incorrect data', issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, zipCode } = parsed.data;

    console.log('New lead:', { name, email, phone, zipCode });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Server Error' },
      { status: 500 }
    );
  }
}
