'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function AdPage() {
  const { id } = useParams();

  useEffect(() => {
    console.log(`[광고 클릭 로그] ${id}번 광고 클릭됨`);
  }, [id]);

  return (
    <main style={{ padding: '2rem', fontSize: '20px', textAlign: 'center' }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '32px', marginBottom: '1.5rem' }}>
        {id}번 광고 상세 페이지
      </h1>

      <p>아직 광고가 등록되지 않았습니다.</p>
      <p>
        이 자리에 광고를 넣고 싶으시면 <br />
        <strong>인스타 DM</strong>으로 문의해주세요!
      </p>
      <p>광고, 인스타 홍보, 블로그 모두 환영입니다.</p>
    </main>
  );
}
