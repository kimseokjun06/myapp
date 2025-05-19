'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdPage() {
  const router = useRouter();

  const correctAnswer = '2';
  const [showQuiz, setShowQuiz] = useState(false);
  const [answer, setAnswer] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'correct' | 'wrong' | 'duplicate' | null>(null);

  const normalizePhone = (input: string) => input.replace(/\D/g, '');
  const alreadySubmittedPhones = new Set<string>(); // 임시 구조, 새로고침 시 초기화

  const handleSubmit = () => {
    const normalized = normalizePhone(phone);

    if (!/^010\d{8}$/.test(normalized)) {
      alert('전화번호는 010으로 시작하고 총 11자리여야 합니다.');
      return;
    }

    if (alreadySubmittedPhones.has(normalized)) {
      setStatus('duplicate');
    } else {
      const isCorrect = answer === correctAnswer;
      setStatus(isCorrect ? 'correct' : 'wrong');
      alreadySubmittedPhones.add(normalized);
    }

    setSubmitted(true);
  };

  return (
    <main style={{ padding: '2rem', fontSize: '18px' }}>
      <h1 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
        1번 광고: G-DRAGON
      </h1>

      {!showQuiz && (
        <>
          <img
            src="https://i.pinimg.com/736x/98/4f/fb/984ffb3fa118c70f98498de7979a3706.jpg"
            alt="G-Dragon Instagram"
            style={{ width: '100%', maxWidth: '400px', margin: '0 auto', display: 'block', marginBottom: '1rem' }}
          />

          <p style={{ textAlign: 'center', marginBottom: '2rem', lineHeight: '1.6' }}>
            지드래곤(G-DRAGON), 본명 권지용, 대한민국의 가수, 래퍼, 작곡가입니다.<br />
            그는 빅뱅(BIGBANG)의 리더로 수많은 히트곡을 만들었으며,<br />
            예술성과 패션 감각까지 겸비한 아티스트로 세계적으로 주목받고 있습니다.
          </p>

          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <a
              href="https://www.instagram.com/xxxibgdrgn?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.6rem 1.2rem',
                backgroundColor: '#E1306C',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              👉 지드래곤 인스타그램 보기
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => setShowQuiz(true)}
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
              문제 풀고 응모하기
            </button>
          </div>
        </>
      )}

      {showQuiz && !submitted && (
        <div style={{ marginTop: '2rem' }}>
          <strong>Q. 지드래곤의 본명은 무엇인가요?</strong>
          <div style={{ marginBottom: '1rem', marginTop: '0.5rem' }}>
            <label><input type="radio" name="quiz" value="1" onChange={(e) => setAnswer(e.target.value)} /> ① 권지홍</label><br />
            <label><input type="radio" name="quiz" value="2" onChange={(e) => setAnswer(e.target.value)} /> ② 권지용</label><br />
            <label><input type="radio" name="quiz" value="3" onChange={(e) => setAnswer(e.target.value)} /> ③ 권재용</label><br />
            <label><input type="radio" name="quiz" value="4" onChange={(e) => setAnswer(e.target.value)} /> ④ 권지훈</label>
          </div>

          <input
            type="text"
            placeholder="전화번호 입력 (예: 01012345678)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', fontSize: '16px', marginBottom: '1rem' }}
          />

          <button
            onClick={handleSubmit}
            style={{
              padding: '0.7rem 1.5rem',
              fontSize: '16px',
              backgroundColor: '#0070f3',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            응모하기
          </button>
        </div>
      )}

      {submitted && (
        <div style={{
          marginTop: '2rem',
          padding: '1.5rem',
          borderRadius: '10px',
          backgroundColor: status === 'correct' ? '#e6ffed' : status === 'wrong' ? '#fff3f3' : '#f0f0f0',
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          {status === 'correct' && (
            <>
              🎉 정답입니다! <br />응모권 +1 적립 완료!
            </>
          )}
          {status === 'wrong' && (
            <>
              ❌ 아쉽지만 오답입니다. <br />다음 기회에 도전해 주세요!
            </>
          )}
          {status === 'duplicate' && (
            <>
              🔁 이미 응모하셨습니다.
            </>
          )}

          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={() => router.push('/')}
              style={{
                padding: '0.6rem 1.2rem',
                backgroundColor: '#222',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              홈으로 돌아가기
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
