'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const rows = 20;
  const cols = 20;

  const getPrice = (i: number) => {
    return 50000;
  };

  const handleClick = (i: number) => {
    const price = getPrice(i);
    console.log(`🧩 [${i + 1}]번 광고 클릭됨 - ${price.toLocaleString()}원`);
    router.push(`/ad/${i + 1}`);
  };

  return (
    <main
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        gap: '2px',
        padding: '10px',
        touchAction: 'manipulation', // 모바일 터치 확대 방지
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          key={i}
          title={`${getPrice(i).toLocaleString()}원`}
          style={{
            border: '1px solid gray',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            fontSize: '12px',
            background: '#fff',
          }}
          onClick={() => handleClick(i)}
        >
          {i + 1}
        </div>
      ))}
    </main>
  );
}
