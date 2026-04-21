import { NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/schemas/contact-form.schema';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Некорректные данные', issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, zipCode } = parsed.data;

    // Тут можно:
    // 1. отправить в CRM
    // 2. отправить email
    // 3. сохранить в БД
    // 4. дернуть webhook

    console.log('New lead:', { name, email, phone, zipCode });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: 'Внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}