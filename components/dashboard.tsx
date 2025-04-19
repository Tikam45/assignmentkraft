"use client"
import { LogoutButton } from '@/components/logout';

export default function Dashboard() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden', filter: 'url(#goo)' }}>

      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values={`
              1 0 0 0 0
              0 1 0 0 0
              0 0 1 0 0
              0 0 0 20 -10
            `}
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(93, 36, 255, 0.8) 0%, rgba(93, 36, 255, 0) 70%)',
        borderRadius: '50%',
        animation: 'moveInLeftCircle 6s infinite linear',
        left: 0,
      }}>
      </div>

      <div style={{
        position: 'absolute',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(93, 36, 255, 0.8) 0%, rgba(93, 36, 255, 0) 70%)',
        borderRadius: '50%',
        animation: 'moveInRightCircle 6s infinite linear',
        right: 0, 
      }}>
      </div>
      <div style={{
        position: 'absolute',
        top: '-20%',
        left: '-20%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(93, 36, 255, 0.8) 0%, rgba(93, 36, 255, 0) 70%)',
        borderRadius: '50%',
        transformOrigin: '100% 180%',
        animation: 'rotateBottomLeft 12s infinite linear'
      }}>
      </div>

      <div style={{
        position: 'absolute',
        top: '60%',
        left: '0%',
        width: '700px',
        height: '700px',
        background: 'radial-gradient(circle, rgba(93, 36, 255, 0.8) 0%, rgba(93, 36, 255, 0) 70%)',
        borderRadius: '50%',
      }}>
      </div>

      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(93, 36, 255, 0.8) 0%, rgba(93, 36, 255, 0) 70%)',
        borderRadius: '50%',
        animation: 'moveHorizontal 6s infinite linear',
        right: 0, 
      }}>
      </div>

      <LogoutButton/>

      <style jsx global>{`
        @keyframes moveInLeftCircle {
          0% {
            left: -50%;
            top: 150%;
            transform: translate(0%, -100%) ;
          }
          25% {
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          50% {
            left: -50%;
            top: -50%;
            transform: translate(0%, 0%);
          }
          75% {
            left: -50%;
            top: 50%;
            transform: translate(0%, -50%);
          }
          100% {
            left: -50%;
            top: 150%;
            transform: translate(0%, -100%);
          }
        }

        @keyframes moveInRightCircle {
          0% {
            right: -50%;
            top: 150%;
            transform: translate(0%, -100%);
          }
          25% {
            right: 50%;
            top: 50%;
            transform: translate(50%, -50%) ;
          }
          50% {
            right: -50%;
            top: -50%;
            transform: translate(0%, 0%);
          }
          75% {
            right: -50%;
            top: 50%;
            transform: translate(0%, -50%);
          }
          100% {
            right: -50%;
            top: 150%;
            transform: translate(0%, -100%);
          }
        }
        @keyframes moveHorizontal {
          0%, 100% {
            left: 0%;
            top: 50%;
            transform: translate(0%, -50%);
          }
          50% {
            left: 100%;
            top: 50%;
            transform: translate(-100%, -50%);
          }
        }
        
        @keyframes rotateBottomLeft {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
