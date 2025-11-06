import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FAQItem {
  question: string;
  answer: string;
}

const Home: React.FC = () => {
  const principlesRef = useScrollAnimation('animate-fade-scale', { once: true });
  const faqRef = useScrollAnimation('animate-fade-up', { once: true });

  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter(i => i !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What's with the name?",
      answer: "Tshepo means hope in the Southern Sotho tongue of South Africa, a land where I once sojourned for a year. Hope is not a trifle, nor mere wishful fancy, but a grounding in the profound reality that there is a path to healing, that changes, that restores us to peace with ourselves and to fellowship with others. Properly tended to, this hope can grow into a sustaining wellspring of life. My desire for Tshepo is that it might serve as a place where hope is remembered, nurtured, and at last carried forward into the life one deeply desires."
    },
    {
      question: "What happens in the first session?",
      answer: "We'll start by getting to know you—your background, current challenges, goals for therapy, and what brought you to seek support. This helps create a personalized approach that feels meaningful and relevant to your life."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length varies depending on your goals and personal pace. Some find significant benefit in a few months, while others prefer longer-term support. Progress and goals are regularly reviewed together."
    },
    {
      question: "What kinds of concerns do you work with?",
      answer: "I primarily work with clients who are navigating challenges such as anxiety, stress, life transitions, relationship struggles, identity questions, and feelings of being \"stuck.\" My approach is focused on helping thoughtful, motivated adults explore growth, healing, and deeper clarity in their lives."
    },
    {
      question: "Do you work with severe or crisis-level mental health concerns?",
      answer: "My practice is not designed for individuals who are currently experiencing severe mental health conditions that require intensive or specialized care (such as active psychosis, unmanaged bipolar disorder, or ongoing suicidal crisis). If you are in immediate distress or need crisis support, please call 988 (Suicide & Crisis Lifeline) or go to your nearest emergency room."
    },
    {
      question: "How do I know if I'm a good fit?",
      answer: "If you are generally stable in your day-to-day functioning but feel weighed down by patterns, emotions, or experiences you'd like to better understand and work through, you may be a great fit. If you're looking for support with severe or complex psychiatric conditions, a higher level of care may serve you best. I'm happy to provide referrals if you're unsure."
    }
  ];

  return (
    <>
      {/* Hero Section - Home */}
      <section
        id="home"
        className="parallax-bg"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(26, 41, 56, 0.425) 0%, rgba(44, 62, 80, 0.45) 100%), url('/images/homepage.jpg')`,
          minHeight: '100vh',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero" style={{
          background: 'transparent',
          backdropFilter: 'blur(3px)',
          position: 'relative',
          zIndex: 1,
          padding: '10rem 2rem 1rem 2rem',
          margin: '0 auto',
          maxWidth: '1200px'
        }}>
          <h2 style={{
            color: '#ffffff',
            textShadow: '2px 2px 8px rgba(0,0,0,0.4)',
            fontWeight: '300',
            letterSpacing: '1px',
            marginBottom: '3rem',
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)'
          }}>Therapy for Adults Seeking Clarity, Peace, and Lasting Change</h2>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => {
                document.querySelector('footer')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '400',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              Contact
            </button>

            <button
              onClick={() => {
                document.getElementById('approach')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                color: '#ffffff',
                fontSize: '1rem',
                fontWeight: '400',
                padding: '1rem 2.5rem',
                borderRadius: '6px',
                border: '2px solid rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px',
                backdropFilter: 'blur(5px)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* My Approach Section */}
      <section
        id="approach"
        style={{
          minHeight: '100vh',
          padding: '5rem 2rem',
          backgroundColor: '#6b8e9e'
        }}
      >
        <div className="container">
          {/* Hero Section */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto 4rem auto',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#ffffff',
              marginBottom: '2rem',
              fontWeight: '400'
            }}>My Approach to Therapy</h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#ffffff',
              lineHeight: '1.8',
              maxWidth: '700px',
              margin: '0 auto',
              fontWeight: '300'
            }}>
              I believe therapy is a partnership where we work together toward your growth and healing.
            </p>
          </div>

          {/* Content Card */}
          <div
            ref={principlesRef}
            className="animate-on-scroll"
            style={{
              maxWidth: '900px',
              margin: '0 auto 3rem auto'
            }}>
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '3rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'box-shadow 0.3s ease'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '2rem'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <img
                    src="/images/kevin-1.jpg"
                    alt="Kevin Schacht"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              <p style={{
                fontSize: '1.1rem',
                color: '#5a6c7d',
                lineHeight: '1.8',
                fontWeight: '300',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                I work with adults who are thoughtful, driven, and deeply committed to personal growth. Many of my clients have a foundation of faith or spirituality, yet find themselves feeling stuck—emotionally, relationally, or spiritually. They may appear successful on the outside but wrestle with anxiety, burnout, relational wounds, or questions of identity and purpose.
              </p>

              <p style={{
                fontSize: '1.1rem',
                color: '#5a6c7d',
                lineHeight: '1.8',
                fontWeight: '300',
                textAlign: 'center'
              }}>
                With over a decade of experience as a therapist—and a background working across cultures with clients from diverse socioeconomic settings—I offer a grounded, culturally sensitive space where honesty, depth, and healing can unfold. Together, we'll explore old patterns, strengthen your sense of self, and cultivate clarity, peace, and purpose. My approach is warm, collaborative, and practical—helping you create lasting transformation in the areas that matter most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section
        id="faqs"
        style={{
          minHeight: '100vh',
          padding: '5rem 2rem',
          backgroundColor: '#f5f3f0'
        }}
      >
        <div className="container">
          {/* Hero Section */}
          <div style={{
            maxWidth: '1000px',
            margin: '0 auto 4rem auto',
            textAlign: 'center'
          }}>
            <h1 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              color: '#2c3e50',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>Frequently Asked Questions</h1>

            <p style={{
              fontSize: '1.2rem',
              color: '#5a6c7d',
              lineHeight: '1.8',
              maxWidth: '600px',
              margin: '0 auto',
              fontWeight: '300'
            }}>
              Find answers to common questions about therapy and my practice.
            </p>
          </div>

          {/* FAQ Section */}
          <div
            ref={faqRef}
            className="animate-on-scroll"
            style={{
              maxWidth: '900px',
              margin: '0 auto'
            }}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '2rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  marginBottom: index === faqs.length - 1 ? 0 : '1.5rem',
                  transition: 'box-shadow 0.2s ease'
                }}
              >
                <button
                  onClick={() => toggleExpand(index)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: expandedItems.includes(index) ? '1rem' : 0
                  }}
                >
                  <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    color: '#2c3e50',
                    fontSize: '1.2rem',
                    fontWeight: '400',
                    margin: 0,
                    flex: 1
                  }}>
                    {faq.question}
                  </h3>
                  <span style={{
                    color: '#6b8e9e',
                    fontSize: '1.3rem',
                    transition: 'transform 0.2s ease',
                    transform: expandedItems.includes(index) ? 'rotate(180deg)' : 'rotate(0deg)',
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}>
                    ⌄
                  </span>
                </button>

                <div style={{
                  maxHeight: expandedItems.includes(index) ? '500px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.2s ease'
                }}>
                  <p style={{
                    color: '#5a6c7d',
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    fontWeight: '300',
                    margin: 0,
                    paddingTop: '0.5rem'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;