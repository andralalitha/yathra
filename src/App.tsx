import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#000000' }}>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}} />

      {/* Navigation */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(to bottom right, #22d3ee, #3b82f6)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(12deg)'
                }}>
                  <div style={{
                    color: '#ffffff',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    transform: 'rotate(-12deg)'
                  }}>P</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.2' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1f2937' }}>P2P SOFTTEK</span>
                <span style={{ fontSize: '0.75rem', color: '#6b7280' }}>Software & Technology</span>
              </div>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <a href="#" style={{ color: '#2563eb', fontWeight: '600', borderBottom: '2px solid #2563eb', paddingBottom: '4px', textDecoration: 'none' }}>
                Home
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                Services
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                Data Insights
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                Industries we serve
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                Careers
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                About Us
              </a>
              <a href="#" style={{ color: '#4b5563', fontWeight: '500', textDecoration: 'none' }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ 
        position: 'relative', 
        background: 'linear-gradient(to bottom right, #2563eb, #3b82f6, #06b6d4)', 
        overflow: 'hidden' 
      }}>
      

        {/* Gradient Overlay Circles */}
        <div className="animate-blob" style={{
          position: 'absolute',
          top: '0',
          right: '0',
          width: '384px',
          height: '384px',
          backgroundColor: '#60a5fa',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(64px)',
          opacity: '0.2'
        }}></div>
        <div className="animate-blob animation-delay-2000" style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '384px',
          height: '384px',
          backgroundColor: '#22d3ee',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(64px)',
          opacity: '0.2'
        }}></div>
        <div className="animate-blob animation-delay-4000" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '384px',
          height: '384px',
          backgroundColor: '#93c5fd',
          borderRadius: '50%',
          mixBlendMode: 'multiply',
          filter: 'blur(64px)',
          opacity: '0.2'
        }}></div>

        {/* Content Container */}
        <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '5rem 1.5rem' }}>
          {/* Main Content */}
          <div style={{ textAlign: 'center' }}>
            {/* Main Heading */}
            <h1 style={{ 
              fontSize: '3.75rem', 
              fontWeight: 'bold', 
              color: '#ffffff', 
              lineHeight: '1.1', 
              marginBottom: '2rem',
              letterSpacing: '-0.025em'
            }}>
              Empowering Business Growth
              <br />
              Through Technology & Talent
            </h1>

            {/* Subheading */}
            <p style={{ 
              fontSize: '1.25rem', 
              color: 'rgba(255, 255, 255, 0.95)', 
              maxWidth: '56rem', 
              margin: '0 auto 2.5rem',
              lineHeight: '1.75',
              fontWeight: '300'
            }}>
              We enable organizations to accelerate performance through
              <br />
              advanced IT consulting, innovative digital solutions, and
              <br />
              specialized workforce services.
            </p>

            {/* CTA Button */}
            <div style={{ paddingTop: '1rem' }}>
              <button style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#ffffff',
                backgroundColor: '#111827',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.3s'
              }}>
                Connect With an Expert
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{ marginTop: '3rem' }}>
            <div style={{
              position: 'relative',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(12px)',
              borderRadius: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              padding: '3rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '3rem'
              }}>
                {/* Stat 1 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    19
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500'
                  }}>
                    Awards Won
                  </div>
                </div>

                {/* Stat 2 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    150+
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500'
                  }}>
                    Trusted companies
                  </div>
                </div>

                {/* Stat 3 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    280+
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500'
                  }}>
                    Satisfied Customers
                  </div>
                </div>

                {/* Stat 4 */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    30+
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: '500'
                  }}>
                    Workers Employed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
{/* Trusted Partners Section */}
<div
  style={{
    background: '#ffffff',
    padding: '60px 20px',
    fontFamily: 'Arial, sans-serif',
  }}
>
  <h2
    style={{
      textAlign: 'center',
      fontSize: '32px',
      color: '#1f3b57',
      marginBottom: '40px',
      fontWeight: 600,
    }}
  >
    Our <span style={{ color: '#2b6cb0' }}>Trusted Partners</span>
  </h2>

{/* Logo Row */}
<div
  style={{
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',          // padding between container edges & logos
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '35px',                // spacing BETWEEN logos
    flexWrap: 'nowrap',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    background: '#ffffff',
  }}
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/57/ServiceNow_logo.svg"
    alt="ServiceNow"
    style={{ height: '38px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
    alt="SAP"
    style={{ height: '38px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/50/NetApp_logo.svg"
    alt="NetApp"
    style={{ height: '36px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Wells_Fargo_Bank.svg"
    alt="Wells Fargo"
    style={{ height: '36px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    alt="Microsoft"
    style={{ height: '38px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/8a/CVS_Health_logo.svg"
    alt="CVS Pharmacy"
    style={{ height: '36px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    alt="Salesforce"
    style={{ height: '36px', flexShrink: 0 }}
  />

  <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Genomic_Health_logo.svg"
    alt="Genomic Health"
    style={{ height: '38px', flexShrink: 0 }}
  />
</div>
</div>
       {/* Services Section */}
<div style={{ background: 'linear-gradient(to bottom, #EBF5FB, #D6EAF8)', padding: '1rem 1.5rem' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <h2 style={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
      Services <span style={{ color: '#3b82f6' }}>Built for Your Growth</span>
    </h2>

    {/* FLEX CONTAINER – SINGLE ROW */}
    <div style={{
      display: 'flex',
      gap: '1.5rem',
      marginTop: '2rem',
      justifyContent: 'space-between',
      flexWrap: 'nowrap'
    }}>
      {/* Card 1 - Salesforce CRM */}
      <div style={{
        flex: '1 1 18%', // roughly 5 cards fit in row
        backgroundColor: '#D6EAF8',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Salesforce CRM
          </h3>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#4b5563', marginBottom: '1rem' }}>
            Empower your business with Salesforce-driven automation, data visibility, and intelligent insights. From lead management to customization, we tailor solutions that fit your process. Our goal is to boost customer engagement, and accelerate sales performance.
          </p>
        </div>
        <a href="#" style={{ color: '#3b82f6', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
          More →
        </a>
      </div>

      {/* Card 2 - Technology Services (Blue, Center) */}
      <div style={{
        flex: '1 1 22%', // slightly bigger
        background: 'linear-gradient(135deg, #5DADE2 0%, #3498DB 100%)',
        borderRadius: '1.5rem',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px',
        color: '#fff'
      }}>
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Technology Services
          </h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1rem' }}>
            We build modern, forward-thinking solutions—from cloud to custom applications to support agile operations. We develop robust payment failor solutions, infrastructure, and security to keep your business resilient and future-fit.
          </p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <a href="#" style={{ color: '#ffffff', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem' }}>
            More →
          </a>
          <div style={{ 
            width: '70px', 
            height: '70px', 
            backgroundColor: 'rgba(255, 255, 255, 0.25)', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '2rem',
            color: '#ffffff'
          }}>
            ↗
          </div>
        </div>
      </div>

      {/* Card 3 - PEGA PRPC */}
      <div style={{
        flex: '1 1 18%',
        backgroundColor: '#D6EAF8',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            PEGA PRPC
          </h3>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#4b5563', marginBottom: '1rem' }}>
            Our PEGA expertise helps automate complex business processes and improve customer experiences. Through code innovation, we design and optimize workflows that adapt to your needs—enhancing speed, delivering tasks, consistency, and better outcomes.
          </p>
        </div>
        <a href="#" style={{ color: '#3b82f6', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
          More →
        </a>
      </div>

      {/* Card 4 - Service Now */}
      <div style={{
        flex: '1 1 18%',
        backgroundColor: '#D6EAF8',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Service Now
          </h3>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#4b5563', marginBottom: '1rem' }}>
            Streamline IT processes and service management with ServiceNow digital workflows. We design deployments that help you manage incidents, solve your enterprise needs. Enhance productivity, reduce operational bottlenecks, and improve service outcomes.
          </p>
        </div>
        <a href="#" style={{ color: '#3b82f6', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
          More →
        </a>
      </div>

      {/* Card 5 - Staffing Solutions */}
      <div style={{
        flex: '1 1 18%',
        backgroundColor: '#D6EAF8',
        borderRadius: '1.5rem',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '280px'
      }}>
        <div>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
            Staffing Solutions
          </h3>
          <p style={{ fontSize: '0.875rem', lineHeight: '1.5', color: '#4b5563', marginBottom: '1rem' }}>
            Our Staffing Solutions service connects you with pre-vetted, skilled professionals uniquely aligned to your goals. Whether for short-term projects or long-term hiring, we ensure you get the right talent, right when you need it.
          </p>
        </div>
        <a href="#" style={{ color: '#3b82f6', fontWeight: '600', textDecoration: 'none', fontSize: '0.875rem' }}>
          More →
        </a>
      </div>
    </div>
  </div>
</div>


{/* Meet P2P Section */}
<div style={{ backgroundColor: '#ffffff', padding: '5rem 1.5rem' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
    <div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
        Meet <span style={{ color: '#3b82f6' }}>P2P Softtek</span>
      </h2>
      <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#4b5563', marginBottom: '2rem' }}>
        We are very much about the quality of our service we are providing to our clients. Time to time checkups will be done by our higher officials. We have a system to monitor the client satisfaction and use modern technology to keep a track record on all clients and the service they are receiving from us. We have a system to assess our team members from time to time.
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#DBEAFE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: 'bold' }}>✓</span>
          </div>
          <span style={{ color: '#1f2937', fontWeight: '600', fontSize: '1rem' }}>Customer-First Approach</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: '#DBEAFE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#3b82f6', fontSize: '0.875rem', fontWeight: 'bold' }}>✓</span>
          </div>
          <span style={{ color: '#1f2937', fontWeight: '600', fontSize: '1rem' }}>Innovation-Focused Services</span>
        </div>
      </div>
      <button style={{
        padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: '600',
        color: '#ffffff', backgroundColor: '#1e3a8a', borderRadius: '9999px',
        border: 'none', cursor: 'pointer', transition: 'all 0.3s'
      }}>Learn More</button>
    </div>

    <div style={{ position: 'relative' }}>
      <div style={{ 
        backgroundColor: '#E5E7EB', 
        borderRadius: '1.5rem', 
        overflow: 'hidden', 
        position: 'relative',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Main Meeting Image */}
        <div style={{ 
          width: '100%', 
          height: '400px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          borderRadius: '1.5rem'
        }}>
          <img
  src="https://pikwizard.com/pw/medium/074d5c43ea447f540a16fc0a715178fd.jpg"
  alt="Team Collaboration"
  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
/>

        </div>
        
        {/* Overlay Image - Bottom Left */}
        <div style={{
          position: 'absolute',
          bottom: '-20px',
          left: '-20px',
          width: '200px',
          height: '150px',
          borderRadius: '1rem',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
           <img
    src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg"
    alt="Meeting Room"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />

        </div>

        {/* Logo Strip at Bottom Right */}
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          display: 'flex',
          gap: '0.75rem',
          padding: '0.75rem',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <div style={{ width: '40px', height: '30px', backgroundColor: '#D1D5DB', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: '#6B7280' }}>SAP</div>
          <div style={{ width: '40px', height: '30px', backgroundColor: '#D1D5DB', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: '#6B7280' }}>MS</div>
          <div style={{ width: '40px', height: '30px', backgroundColor: '#D1D5DB', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: '#6B7280' }}>IBM</div>
          <div style={{ width: '40px', height: '30px', backgroundColor: '#D1D5DB', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: '#6B7280' }}>SF</div>
        </div>
      </div>
    </div>
 </div>

     </div> 
      
        {/* Hero Section - Reduced vertical spacing */}
<div
  style={{
    background: 'linear-gradient(to right, #7dd3fc, #60a5fa)',
    padding: '1rem 1rem',     
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '200px'     }}
>
  <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
    <h1
      style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#1e3a8a',
        marginBottom: '1rem',   // ⬅ reduced spacing
        lineHeight: '1.2'
      }}
    >
      Building the Future Through<br />
      People, Process, and Technology
    </h1>

    <p
      style={{
        fontSize: '1.125rem',
        color: '#1e3a8a',
        maxWidth: '48rem',
        lineHeight: '1.6',
        margin: '0 auto'
      }}
    >
      P2P Softtek drives lasting business impact by aligning people, process,
      and technology to deliver smart, scalable, and future-ready solutions.
    </p>
  </div>
</div>


      {/* About Us Section */}
      <div style={{ padding: '4rem 1.5rem', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.5rem', color: '#1f2937' }}>About Us</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '1rem' }}>
                Driving Business Growth
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1rem' }}>with Digital Transformation</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f97316' }}>150+</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Trusted companies</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f97316' }}>19</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Awards Won</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#f97316' }}>280+</div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem' }}>Satisfied Customers</div>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: '#374151', lineHeight: '1.75' }}>
                We follow a customer-first approach, delivering high-quality services with
                consistency at every stage of engagement. Senior leadership ensures
                excellence through regular reviews and measurable performance standards.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.75' }}>
                Founded in 2014, P2P Softtek provides customized technology consulting
                and solutions, powered by modern systems and over 20 years of leadership
                expertise to drive meaningful business outcomes.
              </p>
            </div>
          </div>
      </div>
            {/* Commitment Section */}
      <div style={{ padding: '4rem 1.5rem', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>
            Our Commitment to <span style={{ color: '#2563eb' }}>Client Success</span>
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', backgroundColor: '#fed7aa', borderRadius: '50%', marginBottom: '1rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1f2937' }}>Expert-Led Delivery</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Seasoned professionals with deep industry and technology expertise,
                committed to delivering reliable and high-impact solutions.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem' , marginTop:'2rem'}}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', backgroundColor: '#fed7aa', borderRadius: '50%', marginBottom: '1rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1f2937' }}>Results-Driven Partnership</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                A data-led, transparent collaboration model focused on measurable
                outcomes, scalability, and long-term business growth.
              </p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '1.5rem' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '4rem', height: '4rem', backgroundColor: '#fed7aa', borderRadius: '50%', marginBottom: '1rem' }}>
                <svg style={{ width: '2rem', height: '2rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.75rem', color: '#1f2937' }}>Exceptional Client Experience</h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                A client-first mindset ensuring clear communication, accountability, and a
                seamless engagement experience from start to finish.
              </p>
            </div>
          </div>
 </div>
  
      <div style={{ padding: '4rem 1.5rem', backgroundColor: '#f9fafb' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <h2
      style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '3rem',
        color: '#1f2937',
      }}
    >
      Our <span style={{ color: '#2563eb' }}>Core Values</span>
    </h2>

    {/* Grid Container */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // 2 per row
        gap: '1rem',
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            color: 'white',
            padding: '1.5rem',
          }}
        >
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>
            Customer Commitment
          </h3>
          
        </div>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Collaboration</h3>
        </div>
      </div>

      {/* CARD 3 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Innovation</h3>
        </div>
      </div>

      {/* CARD 4 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Excellence</h3>
        </div>
      </div>

      {/* CARD 5 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Integrity</h3>
        </div>
      </div>

      {/* CARD 6 */}
      <div
        style={{
          position: 'relative',
          height: '150px',
          backgroundImage:
            'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)' }} />
        <div style={{ position: 'relative', zIndex: 1, color: 'white', padding: '1.5rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: 'bold' }}>Human Centric</h3>
        </div>
      </div>
   </div>
   <div style={{ padding: '4rem 1.5rem', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>


       {/* What We Do Section */}
<div style={{ padding: '4rem 1.5rem', backgroundColor: '#ffffff' }}>

  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

    <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem', color: '#1f2937' }}>
      What <span style={{ color: '#2563eb' }}>We Do</span>
    </h2>

    <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '1.125rem', marginBottom: '3rem' }}>
      Driving business growth through strategy, technology, and innovation.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>

      {/* Card 1 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Enterprise Technology Solutions</span>
      </div>

      {/* Card 2 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v8m-4-4h8" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Strategic IT Consulting</span>
      </div>

      {/* Card 3 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Industry-Leading Platforms</span>
      </div>

      {/* Card 4 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16h16" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Digital Transformation Services</span>
      </div>

      {/* Card 5 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3v18M4 12h16" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Advanced Data & Analytics</span>
      </div>

      {/* Card 6 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.75rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #fff7ed, #ffffff)', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
        <div style={{ width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fed7aa', borderRadius: '50%' }}>
          <svg style={{ width: '1.5rem', height: '1.5rem', color: '#f97316' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 014-4h10a4 4 0 010 8H7a4 4 0 01-4-4z" />
          </svg>
        </div>
        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1f2937' }}>Cloud Engineering & Modernization</span>
      </div>

    </div>
  </div>
</div>
</div>


{/* Vision & Mission Section */}
<div
  style={{
    padding: '2rem 1.5rem',
    background: 'linear-gradient(to right, #06b6d4, #4ade80, #facc15)',
  }}
>
  <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', color: '#fff' }}>

      <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg leading-relaxed">
                To solve customer challenges in real time across industries and business
                domains, delivering solutions that create immediate and lasting impact.
                We aim to be a trusted strategic partner in enabling sustainable and
                scalable business growth. Through innovative solutions and forward-
                looking initiatives, we help organizations expand, adapt, and succeed.
              </p>
            </div>

     <div className="text-white">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed">
                To deliver reliable, high-quality technology solutions that address
                business challenges and drive measurable outcomes. We achieve this
                through a customer-first approach, deep technical expertise, and
                execution excellence. Our mission is to build partnerships firmly
                grounded in trust, transparency, and continuous improvement.
              </p>
            </div>
</div>
    </div>
  </div>
  </div>

  {/* Digital Transformations Hero Section */}
<section style={{
  position: 'relative',
  minHeight: '150px',
  background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)',
  overflow: 'hidden'
}}>
  {/* Background Image */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=600&fit=crop)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 5
  }}></div>
  
  {/* Overlay */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(30,58,138,0.85) 0%, rgba(59,130,246,0.75) 100%)'
  }}></div>

  {/* Content */}
  <div style={{
    position: 'relative',
    zIndex: 1,
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '20px 24px',
    display: 'flex',
    alignItems: 'center',
    minHeight: '50px'
  }}>
    <div style={{ maxWidth: '700px' }}>
      <h1 style={{
        fontSize: '52px',
        fontWeight: 700,
        color: 'white',
        lineHeight: 1.2,
        marginBottom: '24px'
      }}>
        Digital Transformations Services & Solutions
      </h1>
      
      <p style={{
        fontSize: '18px',
        color: 'rgba(255,255,255,0.95)',
        lineHeight: 1.7,
        marginBottom: '40px'
      }}>
        We empower organizations to optimize their business landscape through innovative solutions designed to boost efficiency, foster growth, and deliver measurable results.
      </p>
      
      <button style={{
        background: 'rgba(15,23,42,0.9)',
        color: 'white',
        padding: '16px 32px',
        fontSize: '16px',
        fontWeight: 600,
        borderRadius: '8px',
        border: 'none',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
      }}>
        Schedule a Consultation
        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</section>

{/* Staffing & Technology Solutions Section */}
<section style={{ padding: '30px 0', background: 'white' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 14px' }}>
    
    {/* Two Column Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '40px'
    }}>
      
      {/* Staffing Solutions Card */}
      <div style={{
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        borderRadius: '20px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          Staffing Solutions
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          lineHeight: 1.7,
          marginBottom: '40px'
        }}>
          Connecting organizations with skilled technology talent through flexible onshore, offshore, and hybrid staffing models. Reducing hiring complexity while strengthening delivery capacity and business continuity.
        </p>

        {/* Illustration Area */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          minHeight: '220px',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          {/* User Cards Illustration */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {/* Card 1 */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginLeft: '0'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ef4444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600
              }}>U1</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>5+ Exp</span>
                <span style={{
                  background: '#f59e0b',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>Java</span>
              </div>
            </div>

            {/* Card 2 */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginLeft: '60px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#f59e0b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600
              }}>U2</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{
                  background: '#f59e0b',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>Java</span>
                <span style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>Python</span>
              </div>
            </div>

            {/* Card 3 */}
            <div style={{
              background: '#f9fafb',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginLeft: '120px'
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#ec4899',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600
              }}>U3</div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{
                  background: '#3b82f6',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>React</span>
                <span style={{
                  background: '#10b981',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '12px',
                  fontWeight: 500
                }}>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Solutions Card */}
      <div style={{
        background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
        borderRadius: '20px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <h2 style={{
          fontSize: '32px',
          fontWeight: 700,
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          Technology Solutions
        </h2>
        
        <p style={{
          fontSize: '16px',
          color: '#4b5563',
          lineHeight: 1.7,
          marginBottom: '40px'
        }}>
          Building modern, secure, and scalable platforms through cloud adoption, modernization, and advanced engineering practices. Focused on innovation that enhances performance, resilience, and growth.
        </p>

        {/* Illustration Area */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          minHeight: '220px',
          position: 'relative',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Cloud & Code Illustration */}
          <div style={{
            position: 'relative',
            width: '100%',
            textAlign: 'center'
          }}>
            {/* Code Window */}
            <div style={{
              background: '#1e293b',
              borderRadius: '8px',
              padding: '16px',
              marginBottom: '20px',
              textAlign: 'left',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}>
              <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }}></div>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }}></div>
              </div>
              <div style={{ fontSize: '12px', fontFamily: 'monospace' }}>
                <div style={{ color: '#f59e0b', marginBottom: '4px' }}>{'<div>'}</div>
                <div style={{ color: '#10b981', marginLeft: '12px', marginBottom: '4px' }}>{'  className="cloud"'}</div>
                <div style={{ color: '#3b82f6', marginLeft: '12px', marginBottom: '4px' }}>{'  data-secure'}</div>
                <div style={{ color: '#f59e0b' }}>{'</div>'}</div>
              </div>
            </div>

            {/* Feature Bubbles */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div style={{
                background: '#dbeafe',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1e40af'
              }}>Cloud Adoption</div>
              <div style={{
                background: '#dbeafe',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1e40af'
              }}>Innovation Strategy</div>
              <div style={{
                background: '#dbeafe',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#1e40af'
              }}>Scalable Ecosystems</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
    </div>

{/* Solutions Section */}
<section style={{
  padding: '40px 40px',
  background: '#f0f4f8'
}}>
  <div style={{
    maxWidth: '1300px',
    margin: '0 auto'
  }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: '40px'
    }}>
      
      {/* Salesforce CRM Card */}
      <div style={{
        background: 'linear-gradient(135deg, #cfe2f3 0%, #d9e8f5 100%)',
        borderRadius: '24px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '20px'
        }}>
          Salesforce CRM
        </h2>
        
        <p style={{
          fontSize: '1.05rem',
          color: '#2d3748',
          lineHeight: 1.7,
          marginBottom: '30px'
        }}>
          Streamlining sales, service, and customer operations through tailored Salesforce implementations and automation. Designed to enhance efficiency, insights, and scalability across enterprise workflows.
        </p>
        
        {/* Dashboard Illustration */}
        <div style={{
          background: 'white',
          borderRadius: '12px',
          padding: '20px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          border: '8px solid #1e3a5f'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            padding: '10px',
            background: '#1e3a5f',
            margin: '-20px -20px 20px -20px',
            borderRadius: '4px 4px 0 0'
          }}>
            <div style={{
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'white'
            }}>
              Recruitment Hub
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ff5f56'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#ffbd2e'
              }}></div>
              <div style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#27c93f'
              }}></div>
            </div>
          </div>
          
          {/* Metrics Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '15px',
            marginBottom: '20px'
          }}>
            <div>
              <div style={{
                fontSize: '0.7rem',
                color: '#718096',
                marginBottom: '4px'
              }}>Applications Received</div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d3748'
              }}>24</div>
              <div style={{
                width: '100%',
                height: '30px',
                background: '#e2e8f0',
                borderRadius: '4px',
                marginTop: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '70%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '0.7rem',
                color: '#718096',
                marginBottom: '4px'
              }}>Interviews Scheduled</div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d3748'
              }}>360</div>
              <div style={{
                width: '100%',
                height: '30px',
                background: '#e2e8f0',
                borderRadius: '4px',
                marginTop: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '60%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '0.7rem',
                color: '#718096',
                marginBottom: '4px'
              }}>Candidates Hired</div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d3748'
              }}>27</div>
              <div style={{
                width: '100%',
                height: '30px',
                background: '#e2e8f0',
                borderRadius: '4px',
                marginTop: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)'
                }}></div>
              </div>
            </div>
            
            <div>
              <div style={{
                fontSize: '0.7rem',
                color: '#718096',
                marginBottom: '4px'
              }}>Positions Filled</div>
              <div style={{
                fontSize: '1.3rem',
                fontWeight: 700,
                color: '#2d3748'
              }}>1</div>
              <div style={{
                width: '100%',
                height: '30px',
                background: '#e2e8f0',
                borderRadius: '4px',
                marginTop: '8px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Chart Section */}
          <div style={{
            display: 'flex',
            gap: '20px',
            marginTop: '20px'
          }}>
            {/* Bar Chart */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#2d3748',
                marginBottom: '10px'
              }}>
                Candidate Pipeline Stages
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '8px',
                height: '80px'
              }}>
                <div style={{
                  width: '100%',
                  height: '75%',
                  background: 'linear-gradient(to top, #3182ce, #4299e1)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '65%',
                  background: 'linear-gradient(to top, #3182ce, #4299e1)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '55%',
                  background: 'linear-gradient(to top, #3182ce, #4299e1)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '45%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '40%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '35%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
                <div style={{
                  width: '100%',
                  height: '30%',
                  background: 'linear-gradient(to top, #48bb78, #68d391)',
                  borderRadius: '4px 4px 0 0'
                }}></div>
              </div>
            </div>
            
            {/* Pie Chart */}
            <div style={{ width: '80px' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#2d3748',
                marginBottom: '10px'
              }}>
                Source of Hire
              </div>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: `conic-gradient(
                  #3182ce 0deg 120deg,
                  #48bb78 120deg 240deg,
                  #ed8936 240deg 360deg
                )`
              }}></div>
            </div>
            
            {/* Recent Applicants */}
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#2d3748',
                marginBottom: '10px'
              }}>
                Recent Applicants
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.7rem'
                  }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${i % 2 === 0 ? '#667eea, #764ba2' : '#f093fb, #f5576c'})`
                    }}></div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        width: '100%',
                        height: '4px',
                        background: '#e2e8f0',
                        borderRadius: '2px'
                      }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PEGA PRPC Solutions Card */}
      <div style={{
        background: 'linear-gradient(135deg, #d4e9f5 0%, #e0f0f8 100%)',
        borderRadius: '24px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '20px'
        }}>
          PEGA PRPC Solutions
        </h2>
        
        <p style={{
          fontSize: '1.05rem',
          color: '#2d3748',
          lineHeight: 1.7,
          marginBottom: '30px'
        }}>
          Accelerating digital transformation with low-code automation, intelligent case management, and rule-driven process design. Built for operational precision, compliance, and enterprise performance.
        </p>
        
        {/* PEGA Illustration */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          position: 'relative',
          minHeight: '220px'
        }}>
          {/* Center Circle with Lightning */}
          <div style={{
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 2,
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
          }}>
            <svg style={{ width: '60px', height: '60px' }} viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="#4ade80" stroke="#4ade80" strokeWidth="1"/>
            </svg>
          </div>
          
          {/* Orbit Ring */}
          <div style={{
            position: 'absolute',
            width: '240px',
            height: '240px',
            border: '2px dashed rgba(59, 130, 246, 0.3)',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
          
          {/* Floating Icons */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 3
          }}>
            <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zm-2-2H7V7h10v10z"/>
            </svg>
          </div>
          
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '20px',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 3
          }}>
            <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '30%',
            transform: 'translateX(-50%)',
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 3
          }}>
            <div style={{
              fontSize: '1.2rem',
              fontWeight: 700,
              fontStyle: 'italic',
              color: '#3b82f6'
            }}>
              fx
            </div>
          </div>
          
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '30%',
            transform: 'translateX(50%)',
            width: '50px',
            height: '50px',
            background: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            zIndex: 3
          }}>
            <svg style={{ width: '28px', height: '28px' }} viewBox="0 0 24 24" fill="#3b82f6">
              <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Service Now Card */}
      <div style={{
        background: 'linear-gradient(135deg, #cfe2f3 0%, #d9e8f5 100%)',
        borderRadius: '24px',
        padding: '40px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <h2 style={{
          fontSize: '2rem',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '20px'
        }}>
          Service Now
        </h2>
        
        <p style={{
          fontSize: '1.05rem',
          color: '#2d3748',
          lineHeight: 1.7,
          marginBottom: '30px'
        }}>
          Unifying IT, HR, and business operations through connected workflows and scalable ServiceNow deployment. Delivering measurable efficiency, faster response cycles, and automation maturity.
        </p>
        
        {/* ServiceNow Illustration */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px'
        }}>
          {/* Ticket Resolved Card */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '20px'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg style={{ width: '32px', height: '32px' }} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{
                fontSize: '1.1rem',
                fontWeight: 600,
                color: '#1a1a1a',
                marginBottom: '8px'
              }}>
                Ticket Resolved
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e2e8f0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '75%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #d1d5db, #9ca3af)',
                  borderRadius: '4px'
                }}></div>
              </div>
            </div>
          </div>
          
          {/* Toggle Card */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{
              flex: 1,
              height: '12px',
              background: '#e2e8f0',
              borderRadius: '6px',
              marginRight: '20px'
            }}></div>
            <div style={{
              width: '56px',
              height: '32px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              position: 'relative',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(34, 197, 94, 0.3)'
            }}>
              <div style={{
                position: 'absolute',
                right: '4px',
                top: '4px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'white',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
              }}></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


   <div
  style={{
    margin: 0,
    fontFamily: "Arial, Helvetica, sans-serif",
    color: "#374151",
  }}
>
  {/* HERO SECTION — BLUE BACKGROUND */}
  <section
  style={{
    padding: "40px 24px 110px",
    background: `
      linear-gradient(
        to bottom,
        #cfe9ff 0%,
        #e8f4ff 80%,
        #ffffff 100%
      )
    `,
  }}
>
    <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
      <p
        style={{
          fontSize: "14px",
          color: "#3b82f6",
          marginBottom: "16px",
        }}
      >
        Services / Technology Solutions
      </p>

      <h1
        style={{
          fontSize: "44px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Technology Solutions
      </h1>

      <p
        style={{
          maxWidth: "900px",
          fontSize: "18px",
          lineHeight: 1.7,
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        Shaping technology strategy that accelerates growth and simplifies
        complexity. We partner end-to-end to design and deploy the right
        solutions—ensuring a 3S outcome: suitable, sustainable, successful.
      </p>
    </div>
  </section>

  {/* CAPABILITIES TITLE — NO BACKGROUND */}
  <section
    style={{
      padding:  "5px 24px 110px",
      backgroundColor: "transparent",
    }}
  >
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "26px",
          fontWeight: 600,
          color: "#1f2937",
          marginBottom: "16px",
        }}
      >
        Technology Capabilities That Drive Growth
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          fontSize: "16px",
          lineHeight: 1.6,
        }}
      >
        Our strategic and technical leadership empowers enterprises to embrace
        future-ready solutions. Delivering innovation that directly fuels growth
        and long-term success.
      </p>
    </div>
  </section>

{/* CLOUD COMPUTING SECTION */}
<section
  style={{
    padding: "10px 24px",
    backgroundColor: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center", // <-- center heading vertically with paragraph
      gap: "40px",
    }}
  >
    {/* LEFT HEADING */}
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        backgroundImage: "linear-gradient(180deg, #1e3a8a, #f59e0b)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Cloud
      <br />
      Computing
    </h3>

    {/* RIGHT PARAGRAPH */}
    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Adopt scalable cloud systems to reduce infrastructure and operational
        expenses. Enable flexible modernization pathways for legacy
        applications. Enhance performance, resilience, and enterprise-wide
        efficiency. Position the organization for sustainable growth and
        innovation.
      </p>
    </div>
  </div>
</section>


{/* INTERNET OF THINGS / REVERSED SECTION */}
<section
  style={{
    padding: "80px 24px",
    backgroundColor: "#ffffff",
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center", // vertical center heading with paragraph
      gap: "40px",
      flexDirection: "row-reverse", // heading on right, paragraph on left
    }}
  >
    {/* HEADING RIGHT */}
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        textAlign: "right",
        backgroundImage: "linear-gradient(180deg, #f59e0b, #1e3a8a)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Internet of
      <br />
      Things
    </h3>

    {/* LEFT CONTENT */}
    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Adopt scalable cloud systems to reduce infrastructure and operational
        expenses. Enable flexible modernization pathways for legacy
        applications. Enhance performance, resilience, and enterprise-wide
        efficiency. Position the organization for sustainable growth and
        innovation.
      </p>
    </div>
  </div>
</section>

{/* CARD 3 - Machine Learning */}
<section style={{ padding: "10px 24px", backgroundColor: "#ffffff" }}>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center", // vertical center heading with paragraph
      gap: "40px",
    }}
  >
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        backgroundImage: "linear-gradient(180deg, #1e3a8a, #f59e0b)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Machine
      <br />
      Learning
    </h3>

    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Drive strategic advantage with AI-powered personalization and advanced
        neural models. Apply predictive analytics, computer vision, and
        automated forecasting with confidence.
      </p>
    </div>
  </div>
</section>

{/* CARD 4 - Artificial Intelligence (Reversed) */}
<section style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      flexDirection: "row-reverse", // heading on right
    }}
  >
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        textAlign: "right",
        backgroundImage: "linear-gradient(180deg, #f59e0b, #1e3a8a)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Artificial
      <br />
      Intelligence
    </h3>

    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Transform operational efficiency with AI solutions engineered to
        automate and simplify enterprise processes. Enhance decision cycles
        through data-driven intelligence.
      </p>
    </div>
  </div>
</section>

{/* CARD 5 - Data Analysis */}
<section style={{ padding: "10px 24px", backgroundColor: "#ffffff" }}>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "40px",
    }}
  >
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        backgroundImage: "linear-gradient(180deg, #1e3a8a, #f59e0b)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Data
      <br />
      Analysis
    </h3>

    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Harness the power of big data to unlock deep, actionable enterprise
        insights. Forecast trends and drive competitive advantage through
        analytics and scalable intelligence.
      </p>
    </div>
  </div>
</section>

{/* CARD 6 - Blockchain (Reversed) */}
<section style={{ padding: "80px 24px", backgroundColor: "#ffffff" }}>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "40px",
      flexDirection: "row-reverse",
    }}
  >
    <h3
      style={{
        fontSize: "42px",
        fontWeight: 700,
        lineHeight: 1.2,
        margin: 0,
        textAlign: "right",
        backgroundImage: "linear-gradient(180deg, #f59e0b, #1e3a8a)",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Blockchain
    </h3>

    <div style={{ flex: 1 }}>
      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          margin: 0,
        }}
      >
        Strengthen enterprise integrity with blockchain-enabled transparency
        and auditability. Leverage smart contracts to streamline operations
        and compliance.
      </p>
    </div>
  </div>
</section>





  </div>
  <div
      style={{
        margin: 0,
        fontFamily: "Arial, Helvetica, sans-serif",
        background: "#f8fbfd",
        color: "#1f2937",
      }}
    >
     
      <div
        style={{
          padding: "80px 60px",
          background: "linear-gradient(120deg,#dff3fb,#ffffff)",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: 36, marginBottom: 10, color: "#0f5fa8" }}>
          Feel free to get in touch.
        </h1>
        <p
          style={{
            maxWidth: 600,
            margin: "auto",
            fontSize: 19,
            color: "#4b5563",
          }}
        >
          With over a decade of experience,<br/> we help businesses achieve measurable
          results.
        </p>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div
        style={{
          display: "flex",
          gap: 60,
          padding: 60,
          maxWidth: 1200,
          margin: "auto",
        }}
      >
        {/* LEFT STEPS */}
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "#0f5fa8", marginBottom: 10 }}>What’s Next?</h3>
          <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 30 }}>
            You’re just one step away from bringing your vision to life.
          </p>

          {[
            {
              title: "1. Share Your Requirements",
              text: "Tell us your needs so we can understand your goals and priorities.",
            },
            {
              title: "2. We Schedule a Consultation",
              text: "We connect to discuss solutions and define the best approach.",
            },
            {
              title: "3. Receive a Tailored Proposal",
              text: "Get a customized plan with timelines, deliverables, and pricing.",
            },
            {
              title: "4. Project Kickoff",
              text: "Once approved, we begin and move your project forward.",
            },
          ].map((step, index) => (
            <div
              key={index}
              style={{
                borderLeft: "4px dashed #f59e0b",
                paddingLeft: 20,
                marginBottom: 25,
              }}
            >
              <h4 style={{ margin: 0 }}>{step.title}</h4>
              <p
                style={{
                  margin: "5px 0",
                  fontSize: 13,
                  color: "#6b7280",
                }}
              >
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT FORM */}
        <div
          style={{
            flex: 1,
            background: "#dff3fb",
            padding: 30,
            borderRadius: 10,
          }}
        >
          <h3 style={{ marginBottom: 20 }}>Leave Your Message</h3>

          {[
            "Your Name *",
            "Company Name *",
            "Email Id *",
          ].map((placeholder) => (
            <input
              key={placeholder}
              placeholder={placeholder}
              style={{
                width: "100%",
                padding: 10,
                marginBottom: 15,
                borderRadius: 6,
                border: "1px solid #cbd5e1",
              }}
            />
          ))}

          <textarea
            placeholder="Your message *"
            style={{
              width: "100%",
              padding: 10,
              height: 100,
              borderRadius: 6,
              border: "1px solid #cbd5e1",
            }}
          />

          <button
            style={{
              marginTop: 15,
              padding: "10px 20px",
              background: "#0f5fa8",
              color: "white",
              border: "none",
              borderRadius: 20,
              cursor: "pointer",
            }}
          >
            Send Message
          </button>
        </div> 
  </div>
 
{/* ================= INDUSTRY FOCUSED HERO ================= */}
<div
  style={{
    background: "linear-gradient(180deg,#dff3fb,#eaf6fb)",
    padding: "80px 60px",
  }}
>
  <h1
    style={{
      fontSize: 34,
      fontWeight: 700,
      color: "#1f3a5f",
      maxWidth: 900,
      lineHeight: 1.3,
      marginBottom: 16,
    }}
  >
    Industry Focused insights powered by technology, experienced and reports
  </h1>

  <p
    style={{
      fontSize: 15,
      color: "#374151",
      maxWidth: 800,
      lineHeight: 1.6,
    }}
  >
    We understand your unique sector challenges. Partner with us for
    benchmarked strategies that drive growth and deliver 80% cost savings.
  </p>
</div>

{/* ================= INDUSTRY FOCUSED CONTENT ================= */}
<div
  style={{
    background: "#ffffff",
    padding: "70px 60px",
  }}
>
  <div
    style={{
      display: "flex",
      gap: 60,
      maxWidth: 1200,
      margin: "0 auto",
      alignItems: "flex-start",
    }}
  >
    {/* LEFT TITLE */}
    <div style={{ width: "30%" }}>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: "#1f3a5f",
          lineHeight: 1.4,
        }}
      >
        Industry-Focused
        <br />
        IT Solutions
      </h3>
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ width: "70%" }}>
      <h3
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: "#1f2937",
          marginBottom: 16,
        }}
      >
        Enabling Industry-Driven Transformation for End-to-End Business Value
      </h3>

      <p
        style={{
          fontSize: 14,
          color: "#4b5563",
          lineHeight: 1.7,
          marginBottom: 16,
        }}
      >
        Every industry faces unique challenges shaped by evolving technology,
        market demands, and operational complexity. At P2P Softtek, we deliver
        industry-focused IT solutions that help organizations modernize, adapt,
        and grow with confidence.
      </p>

      <p
        style={{
          fontSize: 14,
          color: "#4b5563",
          lineHeight: 1.7,
        }}
      >
        Our approach blends deep domain expertise with modern digital
        capabilities to build scalable, secure, and future-ready solutions.
        We partner with businesses to optimize workflows, enable data-driven
        decisions, and create lasting value across operations and customer
        experience.
      </p>
    </div>
  </div>
</div>

{/* ================= INDUSTRIES WE EXPERTISE ================= */}
<div
  style={{
    background: "#c0c0c0",
    padding: "10px 30px",
  }}
>
  <h2
    style={{
      fontSize: 24,
      fontWeight: 700,
      color: "#1f2937",
      marginBottom: 30,
    }}
  >
    Industries We Expertise
  </h2>

  {/* CARD */}
  {[
    {
      title: "e-Commerce",
      desc:
        "Enable scalable, secure, and customer-centric e-commerce solutions that drive conversions and seamless digital experiences.",
      points: [
        "E-commerce Platform Development & Integration",
        "Payment Gateway & Checkout Optimization",
        "Order Management & Inventory Systems",
        "Performance, Security & Scalability Enhancements",
      ],
      img: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      reverse: false,
    },
    {
      title: "Health Care",
      desc:
        "Deliver reliable, secure, and compliant healthcare technology solutions that enhance patient care and operational efficiency.",
      points: [
        "Healthcare Application Development",
        "Patient Data Management & Security",
        "System Integration & Interoperability",
        "Compliance-Driven Digital Solutions",
      ],
      img: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
      reverse: true,
    },
    {
      title: "Manufacturing",
      desc:
        "Modernize manufacturing operations through smart digital solutions that improve efficiency and decision-making.",
      points: [
        "ERP & Manufacturing System Integration",
        "Supply Chain & Inventory Optimization",
        "Automation & Process Digitization",
        "Data Analytics & Operational Insights",
      ],
      img: "https://wallpaperaccess.com/full/2577822.jpg",
      reverse: false,
    },
    {
      title: "Retail",
      desc:
        "Transform retail operations with digital solutions that enhance customer engagement and omnichannel growth.",
      points: [
        "Omnichannel Retail Solutions",
        "POS & Backend System Integration",
        "Customer Experience & Engagement Platforms",
        "Data-Driven Insights & Analytics",
      ],
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      reverse: true,
    },
    {
      title: "Banking & Financial",
      desc:
        "Support secure, scalable, and compliant banking solutions that enhance trust and operational efficiency.",
      points: [
        "Core Banking Modernization",
        "Payment & Transaction Systems",
        "Risk, Compliance & Security Solutions",
        "Data Analytics & Reporting",
      ],
      img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
      reverse: false,
    },
  ].map((item, index) => (
    <div
      key={index}
      style={{
        background: "#ffffff",
        borderRadius: 10,
        padding: 30,
        marginBottom: 30,
        display: "flex",
        flexDirection: item.reverse ? "row-reverse" : "row",
        gap: 30,
        alignItems: "center",
      }}
    >
      {/* IMAGE */}
      <img
        src={item.img}
        alt={item.title}
        style={{
          width: "35%",
          borderRadius: 10,
          objectFit: "cover",
        }}
      />

      {/* CONTENT */}
      <div style={{ width: "65%" }}>
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: "#0f5fa8",
            marginBottom: 10,
          }}
        >
          {item.title}
        </h3>

        <p style={{ fontSize: 14, color: "#4b5563", marginBottom: 15 }}>
          {item.desc}
        </p>

        <strong style={{ fontSize: 13 }}>Key Capabilities</strong>
        <ul style={{ paddingLeft: 18, marginTop: 10 }}>
          {item.points.map((point, i) => (
            <li
              key={i}
              style={{
                fontSize: 13,
                color: "#374151",
                marginBottom: 6,
              }}
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>
</div>
 {/* ================= SERVICES & INSIGHTS SECTION ================= */}
<div
  style={{
    backgroundColor: "#4aa0d8",
    padding: "30px 60px",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "40px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* SERVICES CARD */}
    <div
      style={{
        backgroundColor: "#4aa0d8",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.6)",
        overflow: "hidden",
        width: "50%",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
        alt="Services"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "24px", color: "#ffffff" }}>
        <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
          Services
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", opacity: 0.9 }}>
          Seasoned professionals with deep industry and technology
          expertise, committed to delivering reliable and high-impact
          solutions.
        </p>
        <p
          style={{
            marginTop: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Learn More
        </p>
      </div>
    </div>

    {/* INSIGHTS CARD */}
    <div
      style={{
        backgroundColor: "#4aa0d8",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.6)",
        overflow: "hidden",
        width: "50%",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
        alt="Insights"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "24px", color: "#ffffff" }}>
        <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>
          Insights
        </h3>
        <p style={{ fontSize: "14px", lineHeight: "1.6", opacity: 0.9 }}>
          Seasoned professionals with deep industry and technology
          expertise, committed to delivering reliable and high-impact
          solutions.
        </p>
        <p
          style={{
            marginTop: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Learn More
        </p>
      </div>
    </div>
    </div></div>
 

</div>
<section
  style={{
    padding: "20px 20px 20px",
    background: `
      linear-gradient(
        to right,
        #cfe0f3 0%,
        #dbe7f7 55%,
        #eaf1fb 100%
      )
    `,
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "100px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: 0.7}}>
      <p
        style={{
          fontSize: "14px",
          color: "#3b82f6",
          marginBottom: "16px",
          fontWeight: 600,
        }}
      >
        Services / Technology Solutions
      </p>

      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#1f3b57",
          marginBottom: "24px",
          lineHeight: 1.2,
        }}
      >
        Enterprise E-Commerce Solutions & <br />
        Digital Commerce Services
      </h1>

      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.7,
          maxWidth: "525px",
          color: "#374151",
        }}
      >
        Deliver scalable, secure, and personalized digital commerce experiences
        across web, mobile, social, and connected devices. We help businesses
        modernize e-commerce platforms and drive measurable growth.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: 0.3,
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* Soft background glow */}
      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          background: "rgba(255,255,255,0.5)",
          borderRadius: "50%",
          filter: "blur(80px)",
          top: "50%",
          right: "-40px",
          transform: "translateY(-50%)",
        }}
      />

      <img
        src="https://media.istockphoto.com/id/1155208843/photo/young-woman-approving-crazy-shopping.jpg?s=612x612&w=0&k=20&c=WUfxgkvzAwpKPXHLfzc2C3Xkc_U4J-nCB-mUFtEyioE=" // <-- your e-commerce cart image
        alt="E-Commerce Shopping Cart"
        style={{
          width: "250px",
          position: "relative",
          zIndex: 2,
          filter: "drop-shadow(0 30px 45px rgba(0,0,0,0.18))",
        }}
      />
    </div>
  </div>
</section>

<section
  style={{
    padding: "10px 4px 20px",
    background: `
      linear-gradient(
        to right,
        #f5f9ff 0%,
        #ffffff 55%,
        #ffffff 100%
      )
    `,
  }}
>
  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "80px",
    }}
  >
    {/* LEFT TEXT — SAME FEEL AS FIRST PAGE */}
    <div style={{ flex: 0.7 }}>
      <h2
        style={{
          fontSize: "25px",
          fontWeight: 700,
          color: "#111827",
          marginBottom: "4px",
        }}
      >
        Why E-Commerce Matters
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#4b5563",
          maxWidth: "620px",
        }}
      >
        E-commerce has evolved into a data-driven, omnichannel ecosystem where
        customer experience defines success. Modern consumers expect speed,
        personalization, and consistency across every interaction. Businesses
        that invest in scalable and flexible commerce platforms gain a
        competitive advantage in today’s digital marketplace.
      </p>
    </div>

    {/* RIGHT IMAGE — SAME SCALE AS FIRST PAGE */}
    <div
      style={{
        flex: 0.3,
        position: "relative",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* soft background shadow */}
      <div
        style={{
          position: "absolute",
          width: "220px",
          height: "320px",
          background: "rgba(59,130,246,0.12)",
          borderRadius: "50%",
          filter: "blur(90px)",
          top: "50%",
          right: "-60px",
          transform: "translateY(-50%)",
        }}
      />

      <img
        src="https://tse2.mm.bing.net/th/id/OIP.sneMPjCiS51SiVN27ZrzIwHaGl?pid=Api&P=0&h=180"
        alt="E-Commerce Illustration"
        style={{
          width: "250px",
          position: "relative",
          zIndex: 2,
          filter: "drop-shadow(0 35px 55px rgba(0,0,0,0.18))",
        }}
      />
    </div>
  </div>
</section>

{/* E-Commerce Capabilities Section */}
<section style={{ padding: '80px 0', background: '#f9fafb' }}>
  <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }}>
    <h2 style={{
      fontSize: '36px',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '48px'
    }}>
      Our e-<span style={{ color: '#3b82f6' }}>Commerce Capabilities</span>
    </h2>

    {/* Capabilities Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px',
      marginBottom: '64px'
    }}>
      
      {/* Card 1 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Platform Engineering & Development
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          We design scalable, high-performance E-com platforms aligned with your business goals.
        </p>
      </div>

      {/* Card 2 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Omnichannel & Multi-Channel Commerce
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Create a unified shopping experience across all customer touchpoints.
        </p>
      </div>

      {/* Card 3 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Mobile & Smart Device Commerce
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Enable commerce beyond traditional devices with modern mobile and smart experiences.
        </p>
      </div>

      {/* Card 4 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Headless Commerce & API Enablement
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Modernize your commerce ecosystem with flexible, API-driven architecture.
        </p>
      </div>

      {/* Card 5 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Social Commerce & Marketing Integration
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Turn social engagement into measurable business value.
        </p>
      </div>

      {/* Card 6 */}
      <div style={{
        background: 'white',
        padding: '32px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '56px',
          height: '56px',
          background: '#dbeafe',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <svg style={{ width: '32px', height: '32px', color: '#3b82f6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '12px'
        }}>
          Personalization & Data-Driven Commerce
        </h3>
        <p style={{
          fontSize: '15px',
          color: '#6b7280',
          lineHeight: 1.6
        }}>
          Create meaningful and relevant customer experiences.
        </p>
      </div>

    </div>

    {/* Business Outcomes Section */}
    <div style={{
      background: 'white',
      padding: '10px',
      borderRadius: '16px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{
        fontSize: '32px',
        fontWeight: 700,
        color: '#1f2937',
        textAlign: 'center',
        marginBottom: '24px'
      }}>
        Business <span style={{ color: '#3b82f6' }}>Outcomes</span> That Matter
      </h2>
      
      <p style={{
        fontSize: '16px',
        color: '#4b5563',
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto 32px',
        lineHeight: 1.7
      }}>
        Our e-commerce solutions help businesses increase sales by creating smooth and personalized shopping experiences. We also reduce system complexity and build scalable platforms that support faster growth and long-term success.
      </p>

     <div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)', // ✅ 2 items per row
  gap: '24px',
  marginTop: '22px'
}}>

        <div style={{
          padding: '12px',
          borderLeft: '3px solid #3b82f6'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.6
          }}>
            Build scalable platforms that support future business expansion.
          </p>
        </div>

        <div style={{
          padding: '24px',
          borderLeft: '3px solid #3b82f6'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.6
          }}>
            Accelerate product launches and feature enhancements.
          </p>
        </div>

        <div style={{
          padding: '24px',
          borderLeft: '3px solid #3b82f6'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.6
          }}>
            Drive higher conversion rates and sustainable revenue growth.
          </p>
        </div>

        <div style={{
          padding: '24px',
          borderLeft: '3px solid #3b82f6'
        }}>
          <p style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.6
          }}>
            Strengthen customer engagement and long-term loyalty.
          </p>
        </div>
      </div>
    </div>

  </div>
</section>

{/* You Ask We Answer Section */}
<section style={{ padding: '10px 0', background: 'white' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '80px',
      alignItems: 'start'
    }}>
      
      {/* Left Side - Text Content */}
      <div style={{ paddingTop: '20px' }}>
        <h2 style={{
          fontSize: '48px',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '32px'
        }}>
          <span style={{ color: '#1f2937' }}>You </span>
          <span style={{ color: '#3b82f6' }}>Ask.</span>
          <br />
          <span style={{ color: '#1f2937' }}>We </span>
          <span style={{ color: '#3b82f6' }}>Answer</span>
        </h2>
        
        <p style={{
          fontSize: '15px',
          color: '#374151',
          lineHeight: 1.6,
          marginBottom: '16px'
        }}>
          Still have questions or didn't find what you're looking for?
        </p>
        
        <p style={{
          fontSize: '15px',
          color: '#1f2937',
          lineHeight: 1.6
        }}>
          No worries. Our team is here to help you understand industry-specific solutions and next steps.
        </p>
      </div>

      {/* Right Side - FAQ Accordion (Static) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* FAQ Item 1 - Closed */}
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1f2937'
            }}>
              What are enterprise e-commerce solutions?
            </span>
            <svg style={{ width: '20px', height: '20px', color: '#9ca3af', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>

        {/* FAQ Item 2 - Closed */}
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1f2937'
            }}>
              How does omnichannel commerce improve customer experience?
            </span>
            <svg style={{ width: '20px', height: '20px', color: '#9ca3af', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>

        {/* FAQ Item 3 - Closed */}
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1f2937'
            }}>
              What is headless commerce and why is it important?
            </span>
            <svg style={{ width: '20px', height: '20px', color: '#9ca3af', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
        </div>

        {/* FAQ Item 4 - Expanded */}
        <div style={{
          background: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          overflow: 'hidden'
        }}>
          <div style={{
            padding: '18px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'pointer',
            background: '#fafafa'
          }}>
            <span style={{
              fontSize: '15px',
              fontWeight: 500,
              color: '#1f2937'
            }}>
              How do APIs improve e-commerce scalability?
            </span>
            <svg style={{ width: '20px', height: '20px', color: '#6b7280', flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          <div style={{
            padding: '0 20px 20px 20px',
            background: '#fafafa'
          }}>
            <p style={{
              fontSize: '14px',
              color: '#4b5563',
              lineHeight: 1.6,
              margin: 0
            }}>
              APIs connect e-commerce platforms with payment systems, logistics, ERP, and other tools. They make systems more flexible, easier to scale, and allow businesses to add new features or integrations without disruption.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
{/* Hero Section */}
<section style={{
  background: 'linear-gradient(to bottom right, #eff6ff, #e0f2fe, #dbeafe)',
  position: 'relative',
  overflow: 'hidden'
}}>
  <div style={{
    position: 'absolute',
    right: 0,
    top: 0,
    width: '50%',
    height: '100%',
    opacity: 0.3
  }}>
    <div style={{
      position: 'absolute',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
      width: '284px',
      height: '284px',
      background: '#93c5fd',
      borderRadius: '9999px',
      filter: 'blur(80px)'
    }}></div>
    <div style={{
      position: 'absolute',
      right: '128px',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '156px',
      height: '156px',
      background: '#67e8f9',
      borderRadius: '9999px',
      filter: 'blur(80px)'
    }}></div>
  </div>
  
  <div style={{
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '10px 24px',
    position: 'relative',
    zIndex: 10
  }}>
    <div style={{ maxWidth: '672px' }}>
      <h1 style={{
        fontSize: '38px',
        fontWeight: 700,
        color: '#111827',
        marginBottom: '24px',
        lineHeight: 1.2
      }}>
        Turn Data into Actionable Insights That Drive Smarter Decisions
      </h1>
      <p style={{
        fontSize: '18px',
        color: '#374151',
        lineHeight: 1.75
      }}>
        At P2P Softtek, we help businesses unlock the full potential of their data by delivering actionable insights that support faster decisions, optimize operations, and fuel sustainable growth.
      </p>
    </div>
  </div>
</section>

{/* Core Data Solutions */}
<section style={{ padding: '64px 0', background: 'white' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
    <h2 style={{
      fontSize: '32px',
      fontWeight: 700,
      color: '#111827',
      marginBottom: '48px'
    }}>
      Our Core <span style={{ color: '#2563eb' }}>Data Solutions</span>
    </h2>

    {/* Service Cards Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '16px',
      marginBottom: '48px'
    }}>
      
      {/* Business Intelligence Card */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}>
        <svg style={{ width: '48px', height: '48px', marginBottom: '16px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#111827',
          marginBottom: '8px'
        }}>
          Business Intelligence
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '12px'
        }}>
          Empowering Decisions Through Real-Time Visibility
        </p>
        <svg style={{ width: '20px', height: '20px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>

      {/* Data Science Card */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}>
        <svg style={{ width: '48px', height: '48px', marginBottom: '16px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
        </svg>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#111827',
          marginBottom: '8px'
        }}>
          Data Science
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '12px'
        }}>
          Advanced Analytics & Predictive Modeling
        </p>
        <svg style={{ width: '20px', height: '20px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>

      {/* Big Data Engineering Card */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}>
        <svg style={{ width: '48px', height: '48px', marginBottom: '16px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#111827',
          marginBottom: '8px'
        }}>
          Big Data Engineering
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '12px'
        }}>
          Scalable Data Pipelines & Processing
        </p>
        <svg style={{ width: '20px', height: '20px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>

      {/* Data Warehouse Card */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        border: '2px solid #e5e7eb',
        background: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }}>
        <svg style={{ width: '48px', height: '48px', marginBottom: '16px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#111827',
          marginBottom: '8px'
        }}>
          Data Warehouse
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '12px'
        }}>
          Unified, Secure Data Storage
        </p>
        <svg style={{ width: '20px', height: '20px', color: '#9ca3af' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </div>

    </div>

    {/* Detailed Business Intelligence Content */}
    <div style={{
      background: '#f9fafb',
      borderRadius: '12px',
      padding: '22px',
      border: '1px solid #e5e7eb'
    }}>
      <h3 style={{
        fontSize: '24px',
        fontWeight: 700,
        color: '#111827',
        marginBottom: '16px'
      }}>
        Business Intelligence
      </h3>
      <p style={{
        color: '#374151',
        marginBottom: '24px',
        lineHeight: 1.6
      }}>
        P2P Softtek's Business Intelligence solutions help organizations transform complex data into clear, visual insights that support faster and smarter decision-making. We enable leaders to monitor performance, uncover trends, and respond confidently using accurate, real-time data.
      </p>

      <h4 style={{
        fontSize: '18px',
        fontWeight: 600,
        color: '#111827',
        marginBottom: '16px'
      }}>
        Key Capabilities:
      </h4>
      
      <div style={{ marginBottom: '16px' }}>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Data Strategy & Roadmap:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Define a clear BI strategy by identifying key data sources, metrics, and reporting goals aligned with business objectives.
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Data Visualization & Reporting:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Build intuitive dashboards and reports that present insights in a clear, user-friendly format.
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Predictive Analytics:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Use historical and current data to anticipate trends and future business outcomes.
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Customer Analytics:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Gain deeper understanding of customer behavior, preferences, and engagement patterns.
        </p>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Decision Support Systems:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Enable executives and managers with insight-driven tools for strategic decision-making.
        </p>
      </div>

      <div>
        <h5 style={{
          fontWeight: 600,
          color: '#111827',
          marginBottom: '4px'
        }}>
          Training & Enablement:
        </h5>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          lineHeight: 1.75
        }}>
          Ensure successful adoption through user training and ongoing support.
        </p>
      </div>
    </div>

  </div>
</section>

{/* Real World Impact Section */}
<section style={{ padding: '10px 0 10px', background: 'white', position: 'relative', overflow: 'hidden' }}>
  {/* Decorative lines */}
  <div style={{
    position: 'absolute',
    left: 0,
    top: '100px',
    width: '300px',
    height: '200px',
    opacity: 0.1
  }}>
    <svg width="100%" height="100%" viewBox="0 0 300 200">
      <path d="M0,50 L300,50" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <path d="M0,100 L300,100" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <path d="M0,150 L300,150" stroke="#3b82f6" strokeWidth="2" fill="none" />
    </svg>
  </div>
  
  <div style={{
    position: 'absolute',
    right: 0,
    top: '100px',
    width: '300px',
    height: '200px',
    opacity: 0.1
  }}>
    <svg width="100%" height="100%" viewBox="0 0 300 200">
      <path d="M0,50 L300,50" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <path d="M0,100 L300,100" stroke="#3b82f6" strokeWidth="2" fill="none" />
      <path d="M0,150 L300,150" stroke="#3b82f6" strokeWidth="2" fill="none" />
    </svg>
  </div>

  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
    <h2 style={{
      fontSize: '38px',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '48px'
    }}>
      Real <span style={{ color: '#3b82f6' }}>World Impact</span>
    </h2>

    {/* Impact Cards Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '20px',
      marginBottom: '80px'
    }}>
      
      {/* Card 1 - Sales & Marketing */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '8px'
        }}>
          Sales & Marketing
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '20px',
          lineHeight: 1.5
        }}>
          Boost Campaign ROI
        </p>
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>

      {/* Card 2 - Operations */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '8px'
        }}>
          Operations
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '20px',
          lineHeight: 1.5
        }}>
          Enhance efficiency & Reduce costs
        </p>
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>

      {/* Card 3 - Finance */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '8px'
        }}>
          Finance
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '20px',
          lineHeight: 1.5
        }}>
          Improve forecasting & risk management
        </p>
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>

      {/* Card 4 - Customer Experience */}
      <div style={{
        background: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        border: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '8px'
        }}>
          Customer Experience
        </h3>
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          marginBottom: '20px',
          lineHeight: 1.5
        }}>
          Improve retention & satisfaction
        </p>
        <div style={{
          width: '100%',
          height: '140px',
          background: 'linear-gradient(135deg, #e9d5ff 0%, #d8b4fe 100%)',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* Empowering Businesses with Data Intelligence Section */}
<section style={{ padding: '0px 0', background: '#f9fafb' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
    
    <h2 style={{
      fontSize: '38px',
      fontWeight: 700,
      color: '#1f2937',
      marginBottom: '20px'
    }}>
      Empowering Businesses <span style={{ color: '#3b82f6' }}>with Data Intelligence</span>
    </h2>

    <p style={{
      fontSize: '16px',
      color: '#4b5563',
      lineHeight: 1.7,
      marginBottom: '60px',
      maxWidth: '1100px'
    }}>
      At P2P Softtek, we help organizations unlock the full potential of their data by combining modern analytics, scalable engineering, and intelligent insights to drive informed decisions, operational efficiency, and sustainable growth.
    </p>

    {/* Content Grid - Image Cards + Text */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '40px',
      alignItems: 'start'
    }}>
      
      {/* Left Side - Two Image Cards */}
      <div style={{
        display: 'flex',
        gap: '20px'
      }}>
        
        {/* Data Science Card */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          borderRadius: '16px',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '360px'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(30,41,59,0.7) 0%, rgba(30,41,59,0.9) 100%)'
          }}></div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'white',
            position: 'relative',
            zIndex: 1,
            transform: 'rotate(-90deg)',
            transformOrigin: 'left top',
            
            left: '24px',
            top: '280px',
            whiteSpace: 'nowrap'
          }}>
            Data Science
          </h3>
        </div>

        {/* Data Engineering Card */}
        <div style={{
          flex: 1,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '16px',
          padding: '0',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '360px'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.4
          }}></div>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(15,23,42,0.7) 0%, rgba(15,23,42,0.9) 100%)'
          }}></div>
          <h3 style={{
            fontSize: '24px',
            fontWeight: 600,
            color: 'white',
            position: 'absolute',
            bottom: '24px',
            left: '24px',
            zIndex: 1
          }}>
            Data Engineering
          </h3>
        </div>

      </div>

      {/* Right Side - Text Content */}
      <div>
        <p style={{
          fontSize: '15px',
          color: '#374151',
          lineHeight: 1.7,
          marginBottom: '24px'
        }}>
          We build scalable and reliable data foundations that enable organizations to collect, process, and manage data efficiently. Our data engineering solutions ensure data is always accurate, accessible, and ready to support analytics and business intelligence initiatives.
        </p>

        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.7,
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#3b82f6',
              fontWeight: 600
            }}>•</span>
            Scalable data pipelines and integrations.
          </li>
          <li style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.7,
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#3b82f6',
              fontWeight: 600
            }}>•</span>
            Cloud-based and distributed data architectures.
          </li>
          <li style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.7,
            marginBottom: '12px',
            paddingLeft: '24px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#3b82f6',
              fontWeight: 600
            }}>•</span>
            High-volume data processing and optimization.
          </li>
          <li style={{
            fontSize: '15px',
            color: '#374151',
            lineHeight: 1.7,
            paddingLeft: '24px',
            position: 'relative'
          }}>
            <span style={{
              position: 'absolute',
              left: 0,
              color: '#3b82f6',
              fontWeight: 600
            }}>•</span>
            Reliable, analytics-ready data foundations.
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>
</div>

{/* CTA Section */}
<section style={{
  padding: '20px 0',
  background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #fef3c7 100%)',
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Decorative gradient circles */}
  <div style={{
    position: 'absolute',
    right: '-100px',
    top: '-50px',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(251,191,36,0) 70%)',
    borderRadius: '50%',
    filter: 'blur(40px)'
  }}></div>
  
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
    <h2 style={{
      fontSize: '42px',
      fontWeight: 700,
      color: '#0c4a6e',
      marginBottom: '16px',
      lineHeight: 1.2
    }}>
      Ready to Transform Your Organization ?
    </h2>
    
    <p style={{
      fontSize: '20px',
      color: '#f59e0b',
      marginBottom: '40px',
      fontWeight: 500
    }}>
      Simplify workflows, enhance efficiency, and empower your team to excel.
    </p>
    
    <button style={{
      background: '#0c4a6e',
      color: 'white',
      padding: '16px 40px',
      fontSize: '18px',
      fontWeight: 600,
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 12px rgba(12,74,110,0.3)',
      transition: 'all 0.3s'
    }}>
      Schedule A Call
      <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
    </button>
  </div>
</section>
{/* ================= OUR LOCATIONS ================= */}
<div
  style={{
    background: "linear-gradient(180deg,#eef7fb,#ffffff)",
    padding: "20px 30px",
    borderTop: "1px solid #e5e7eb",
  }}
>
  <h3
    style={{
      textAlign: "center",
      color: "#1f2937",
      marginBottom: 40,
      fontSize: 18,
      fontWeight: 600,
    }}
  >
    Our Locations
  </h3>

  {/* ROW CONTAINER */}
  <div
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",        // 🔑 force same row
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 60,
      maxWidth: 1200,
      margin: "0 auto",
    }}
  >
    {/* LOCATION CARD */}
    {[
      
     

      {
  
    code: "DC",
    title: "Corporate Headquarters",
    address: (
      <>
        609 H Street NE, 4th Floor,<br />
        Washington, DC, USA 20001
      </>
    ),
  },
  {
    code: "CA",
    title: "Corporate Office",
    address: (
      <>
        1811 Santa Rita Rd Suite 116,<br />
        Pleasanton, CA, USA-94566
      </>
    ),
  },
  {
    code: "IND",
    title: "India Office",
    address: (
      <>
        8-3-191/17, 2A, 3rd Floor,<br />
        Vengala Rao Nagar,<br />
        Opp. S.R. Nagar Metro Station,<br />
        Hyderabad – 500038
      </>
    ),
  },
].map((loc) => (
  <div
    key={loc.code}
    style={{
      width: "33.33%",
      minWidth: 260,
      textAlign: "center",
      display: "flex",                 // 🔑 equal height
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {/* CODE */}
    <div
      style={{
        fontSize: 64,
        fontWeight: 700,
        color: "#9ca3af",
        marginBottom: 10,
      }}
    >
      {loc.code}
    </div>

    {/* TITLE */}
    <h4 style={{ margin: "10px 0 6px", fontSize: 14 }}>
      {loc.title}
    </h4>

    {/* ADDRESS BOX */}
    <div
      style={{
        fontSize: 13,
        color: "#6b7280",
        lineHeight: 1.6,
        maxWidth: 260,                // 🔑 prevent overflow
        wordWrap: "break-word",
      }}
    >
      {loc.address}
    </div>
  </div>
))}

  </div>
</div>

{/* Footer Section */}
<footer style={{ background: '#f3f4f6', padding: '60px 0 20px' }}>
  <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
    
    {/* Footer Content Grid */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '60px',
      marginBottom: '50px'
    }}>
      
      {/* Column 1 - Company Info */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
          <div style={{
            width: '40px',
            height: '40px',
            background: 'linear-gradient(135deg, #3b82f6 0%, #0ea5e9 100%)',
            borderRadius: '8px'
          }}></div>
          <div>
            <h3 style={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#1f2937',
              margin: 0,
              lineHeight: 1
            }}>
              P2P SOFTTEK
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#6b7280',
              margin: 0,
              marginTop: '2px'
            }}>
              Business & Technology Solutions
            </p>
          </div>
        </div>
        
        <p style={{
          fontSize: '14px',
          color: '#6b7280',
          lineHeight: 1.7,
          marginBottom: '0'
        }}>
          We put our customers first and uphold high service quality through regular management reviews. With the support of modern technology, we efficiently track client interactions and ensure continuous improvement using our internal performance evaluation system.
        </p>
      </div>

      {/* Column 2 - Company Links */}
      <div>
        <h4 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          Company
        </h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Careers
            </a>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Services
            </a>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              About Us
            </a>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3 - Social Links */}
      <div>
        <h4 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          Social
        </h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Linkedin
            </a>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              x.com
            </a>
          </li>
          <li style={{ marginBottom: '12px' }}>
            <a href="#" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg style={{ width: '18px', height: '18px' }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
              Facebook
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4 - Contact */}
      <div>
        <h4 style={{
          fontSize: '18px',
          fontWeight: 600,
          color: '#1f2937',
          marginBottom: '20px'
        }}>
          Contact
        </h4>
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0
        }}>
          <li style={{ marginBottom: '16px' }}>
            <a href="tel:510-474-5545" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              (510)-474-5545
            </a>
          </li>
          <li style={{ marginBottom: '16px' }}>
            <a href="mailto:info@p2psofttek.com" style={{
              fontSize: '15px',
              color: '#6b7280',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <svg style={{ width: '18px', height: '18px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              info@p2psofttek.com
            </a>
          </li>
        </ul>
      </div>

    </div>

    {/* Footer Bottom */}
    <div style={{
      borderTop: '1px solid #e5e7eb',
      paddingTop: '20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <p style={{
        fontSize: '14px',
        color: '#9ca3af',
        margin: 0
      }}>
        © 2025 P2P Softtek. All rights reserved.
      </p>
      
      <div style={{ display: 'flex', gap: '30px' }}>
        <a href="#" style={{
          fontSize: '14px',
          color: '#6b7280',
          textDecoration: 'none'
        }}>
          Privacy Policy
        </a>
        <a href="#" style={{
          fontSize: '14px',
          color: '#6b7280',
          textDecoration: 'none'
        }}>
          Terms of Use
        </a>
      </div>
    </div>

  </div>
</footer>
    

</div>
</div>
</div>


 
  );
};
export default HeroSection;
      