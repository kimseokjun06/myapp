'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function AdPage() {
  const { id } = useParams();
  const [answer, setAnswer] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  const correctAnswer = '3';

  const handleSubmit = () => {
    if (!phone.match(/^010-\d{4}-\d{4}$/)) {
      alert('전화번호 형식이 올바르지 않습니다. 예: 010-1234-5678');
      return;
    }

    const isCorrect = answer === correctAnswer;
    setCorrect(isCorrect);
    setSubmitted(true);
  };

  return (
    <main style={{ padding: '2rem', fontSize: '18px' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        {id}번 광고 상세 페이지
      </h1>

      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971.png"
        alt="나이키 광고"
        style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', marginBottom: '1rem' }}
      />
      <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '2rem' }}>
        "JUST DO IT. 도전은 시작됐다."
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <strong>Q. 나이키의 슬로건은 무엇인가요?</strong>
        <div>
          <label><input type="radio" name="quiz" value="1" onChange={(e) => setAnswer(e.target.value)} /> ① Just Win</label><br />
          <label><input type="radio" name="quiz" value="2" onChange={(e) => setAnswer(e.target.value)} /> ② Just Go</label><br />
          <label><input type="radio" name="quiz" value="3" onChange={(e) => setAnswer(e.target.value)} /> ③ Just Do It</label><br />
          <label><input type="radio" name="quiz" value="4" onChange={(e) => setAnswer(e.target.value)} /> ④ Just Try</label>
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="전화번호 입력 (010-1234-5678)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', fontSize: '16px' }}
        />
      </div>

      <button
        onClick={handleSubmit}
        style={{
          padding: '0.7rem 1.5rem',
          fontSize: '16px',
          backgroundColor: '#111',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        응모하기
      </button>

      {submitted && (
        <div style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '20px', fontWeight: 'bold' }}>
          {correct ? '🎉 응모 완료! 감사합니다.' : '❌ 아쉽지만 오답입니다!'}
        </div>
      )}
    </main>
  );
}
