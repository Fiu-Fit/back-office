import { AxiosError } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import api from '@/api/serverSideAxiosConfig';

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams;
    const url = params.get('url');
    params.delete('url');
    const res = await api.get(url as string, {
      params: params,
    });

    return NextResponse.json(res.data, {
      status: res.status,
    });
  } catch (err: unknown) {
    if (!(err instanceof AxiosError)) {
      return NextResponse.json(err, {
        status: 500,
      });
    }

    const error = err as AxiosError;
    return NextResponse.json(error.response?.data, {
      status: error.response?.status,
    });
  }
}
