import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent multiple submissions
    if (isSubmitting || isSubmitted) {
      return;
    }

    setIsSubmitting(true);

    // Submit to Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        alert('Thank you for reaching out. Your message has been received, and I look forward to connecting with you soon.');
      })
      .catch(error => {
        alert('Something went wrong. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
      padding: '4rem 2rem 2rem',
      marginTop: '0'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Main Content - Two Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '3rem',
          background: 'rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '3rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {/* Left Column - Location & Map */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            <div>
              <h3 style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: '1.8rem',
                color: '#ffffff',
                marginBottom: '1rem',
                fontWeight: '400'
              }}>Office Location</h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=2204+Irving+Ave+San+Diego+CA+92113"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#b8c5d6',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  display: 'block',
                  marginBottom: '1.5rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#b8c5d6';
                }}
              >
                2204 Irving Ave<br />
                San Diego, CA 92113
              </a>
            </div>

            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
              flexGrow: 1
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.8!2d-117.1308!3d32.6989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9536c0f0f0f0f%3A0x0!2s2204%20Irving%20Ave%2C%20San%20Diego%2C%20CA%2092113!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h2 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '1.8rem',
              color: '#ffffff',
              marginBottom: '1rem',
              fontWeight: '400'
            }}>Get in Touch</h2>

            <p style={{
              color: '#b8c5d6',
              marginBottom: '1.5rem',
              fontSize: '0.95rem',
              fontWeight: '300'
            }}>
              Take the first step toward healing and growth
            </p>

            <form
              name="contact"
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1rem'
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  style={{
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                />
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="Your Phone (Optional)"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting || isSubmitted}
                style={{
                  padding: '1rem',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onBlur={(e) => {
                  e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              />

              <div>
                <label style={{
                  color: '#b8c5d6',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem',
                  display: 'block',
                  fontWeight: '300'
                }}>
                  Briefly describe what you would like to explore in therapy:
                </label>
                <textarea
                  name="message"
                  placeholder="Share what brings you here today..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={960}
                  rows={4}
                  disabled={isSubmitting || isSubmitted}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#ffffff',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    lineHeight: '1.5'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                style={{
                  background: isSubmitting || isSubmitted
                    ? 'linear-gradient(145deg, #9ca3a8 0%, #b0b5b9 100%)'
                    : 'linear-gradient(145deg, #6b8e9e 0%, #8ba399 100%)',
                  color: '#ffffff',
                  padding: '0.9rem 2rem',
                  borderRadius: '50px',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  cursor: isSubmitting || isSubmitted ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  alignSelf: 'flex-start',
                  marginTop: '0.5rem',
                  opacity: isSubmitting || isSubmitted ? 0.6 : 1
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting && !isSubmitted) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(107, 142, 158, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting && !isSubmitted) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Partnership Logos */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          paddingBottom: '2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="https://care.headway.co/providers/kevin-thomas-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/headway.jpg"
                alt="Headway"
                style={{
                  height: '90px',
                  width: 'auto',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </a>
            <a
              href="https://www.psychologytoday.com/us/therapists/kevin-a-thomas-san-diego-ca/311432"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/pt.jpeg"
                alt="Psychology Today"
                style={{
                  height: '90px',
                  width: 'auto',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </a>
            <a
              href="https://www.camft.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/camft.jpg"
                alt="CAMFT"
                style={{
                  height: '90px',
                  width: 'auto',
                  opacity: 0.7,
                  transition: 'opacity 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </a>
          </div>
        </div>

        {/* Footer Info */}
        <div style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{
            color: '#94a3b8',
            fontSize: '0.95rem',
            marginBottom: '1rem'
          }}>
            Kevin Thomas, LMFT 117263 | San Diego, CA
          </p>
          <p style={{
            color: '#64748b',
            fontSize: '0.9rem'
          }}>
            © 2025 Kevin Thomas, LMFT. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        input::placeholder,
        textarea::placeholder {
          color: rgba(184, 197, 214, 0.7);
        }
      `}</style>
    </footer>
  );
};

export default Footer;