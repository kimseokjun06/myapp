'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdPage101() {
  const [step, setStep] = useState<'ad' | 'quiz' | 'result'>('ad')
  const [answer, setAnswer] = useState('')
  const [phone, setPhone] = useState('')
  const [result, setResult] = useState('')
  const router = useRouter()

  const correctAnswer = 'kimseokjun06'
  const submittedPhones = new Set<string>()

  const normalizePhone = (phone: string) => phone.replace(/[^0-9]/g, '')

  const handleSubmit = () => {
    const normalized = normalizePhone(phone)

    if (submittedPhones.has(normalized)) {
      setResult('이미 이 번호로 응모하셨습니다!')
    } else if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      submittedPhones.add(normalized)
      setResult('정답! 응모권 +1 🎉')
    } else {
      setResult('오답입니다.')
    }

    setStep('result')
  }

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      {step === 'ad' && (
        <>
          <h1>나이키 에어포스 광고</h1>
          <img
            src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/52a9b318-5e30-4e9d-b857-ff6cfd488f3d/air-force-1-07-mens-shoes-CW2288-111.png"
            alt="에어포스"
            style={{ maxWidth: '300px', marginBottom: '20px' }}
          />
          <p>깔끔한 올백 디자인, 국민 운동화 에어포스 1!</p>
          <button
            onClick={() => setStep('quiz')}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#000',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            퀴즈 풀기
          </button>
        </>
      )}

      {step === 'quiz' && (
        <>
          <h2>이 인스타그램 아이디는?</h2>
          <input
            type="text"
            placeholder="정답 입력"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            style={{ padding: '8px', marginBottom: '10px', width: '250px' }}
          />
          <br />
          <input
            type="text"
            placeholder="전화번호 입력"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ padding: '8px', marginBottom: '10px', width: '250px' }}
          />
          <br />
          <button
            onClick={handleSubmit}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            제출
          </button>
        </>
      )}

      {step === 'result' && (
        <>
          <h2>{result}</h2>
          <button
            onClick={() => router.push('/')}
            style={{
              marginTop: '20px',
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            메인으로 돌아가기
          </button>
        </>
      )}
    </div>
  )
}
