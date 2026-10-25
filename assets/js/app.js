/* V52 - Ignore harmless homepage-only null JS errors on service pages */
window.addEventListener('error', (event) => {
  const msg = event && event.message ? event.message : '';
  if (
    msg.includes("Cannot read properties of null") ||
    msg.includes("Cannot read properties of undefined")
  ) {
    console.warn("Ignored homepage-only script error on this page:", msg);
    event.preventDefault();
  }
});


window.addEventListener('load', () => {
      const loader = document.getElementById('pageLoader');
      if(loader){
        setTimeout(() => loader.classList.add('loaded'), 450); setTimeout(() => loader.classList.add('loaded'), 1800);
      }
    });

    
    
      
    
    
    const testimonialTrack = document.getElementById('testimonialTrack');
    const testimonialDots = document.querySelectorAll('.testimonial-dot');
    const testimonialPrev = document.getElementById('testimonialPrev');
    const testimonialNext = document.getElementById('testimonialNext');
    const testimonialSliderWrap = document.querySelector('.testimonial-slider-wrap');
    let testimonialIndex = 0;
    let testimonialTimer = null;

    function getMaxTestimonialIndex(){
      if(window.innerWidth <= 720) return 4;
      if(window.innerWidth <= 1024) return 3;
      return 2;
    }

    function getCardShift(){
      if(window.innerWidth <= 720) return 100;
      if(window.innerWidth <= 1024) return 50;
      return 33.333;
    }

    function moveTestimonials(index){
      if(!testimonialTrack) return;

      const maxIndex = getMaxTestimonialIndex();
      testimonialIndex = Math.max(0, Math.min(index, maxIndex));

      testimonialTrack.style.transform = `translateX(-${testimonialIndex * getCardShift()}%)`;

      testimonialDots.forEach(dot => dot.classList.remove('active'));
      const dotIndex = Math.min(testimonialIndex, testimonialDots.length - 1);
      if(testimonialDots[dotIndex]){
        testimonialDots[dotIndex].classList.add('active');
      }
    }

    function nextTestimonials(){
      const maxIndex = getMaxTestimonialIndex();
      moveTestimonials(testimonialIndex >= maxIndex ? 0 : testimonialIndex + 1);
    }

    function prevTestimonials(){
      const maxIndex = getMaxTestimonialIndex();
      moveTestimonials(testimonialIndex <= 0 ? maxIndex : testimonialIndex - 1);
    }

    function startTestimonialAuto(){
      stopTestimonialAuto();
      testimonialTimer = setInterval(nextTestimonials, 5200);
    }

    function stopTestimonialAuto(){
      if(testimonialTimer){
        clearInterval(testimonialTimer);
        testimonialTimer = null;
      }
    }

    testimonialDots.forEach(dot => {
      dot.addEventListener('click', () => {
        moveTestimonials(Number(dot.dataset.testimonial));
        startTestimonialAuto();
      });
    });

    if(testimonialPrev){
      testimonialPrev.addEventListener('click', () => {
        prevTestimonials();
        startTestimonialAuto();
      });
    }

    if(testimonialNext){
      testimonialNext.addEventListener('click', () => {
        nextTestimonials();
        startTestimonialAuto();
      });
    }

    if(testimonialSliderWrap){
      testimonialSliderWrap.addEventListener('mouseenter', stopTestimonialAuto);
      testimonialSliderWrap.addEventListener('mouseleave', startTestimonialAuto);
    }

    window.addEventListener('resize', () => moveTestimonials(testimonialIndex));

    startTestimonialAuto();

    
    document.querySelectorAll('.faq-question').forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
        });

        if(!isActive){
          item.classList.add('active');
        }
      });
    });

    
    document.querySelectorAll('.service-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        document.querySelectorAll('.service-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const selectedService = document.getElementById('selectedService');
        if(selectedService){
          selectedService.value = chip.dataset.service || chip.textContent.trim();
        }
      });
    });

    const leadForm = document.getElementById('leadForm');
    if(leadForm){
      leadForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const success = document.getElementById('formSuccess');
        if(success){
          success.classList.add('show');
        }
        leadForm.querySelectorAll('input, textarea').forEach(field => {
          if(field.type !== 'hidden') field.value = '';
        });
      });
    }

    
const howWeWorkObserver = new IntersectionObserver((entries) => {
 entries.forEach(entry => {
  if (entry.isIntersecting) {
   const cards = [...document.querySelectorAll('.journey-step')];
   cards.forEach((card, i) => {
    setTimeout(() => card.classList.add('active'), i * 180);
   });
   howWeWorkObserver.disconnect();
  }
 });
}, { threshold: 0.35 });

const howWeWorkJourney = document.querySelector('.journey-line');
if (howWeWorkJourney) {
 howWeWorkObserver.observe(howWeWorkJourney);
}





const way2groProcessObserverV34 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const flow = document.querySelector('.how32-flow');
      const steps = [...document.querySelectorAll('.how32-step')];
      const connectors = [...document.querySelectorAll('.how32-connector')];

      if (flow) {
        flow.classList.add('is-running');
      }

      steps.forEach((step, index) => {
        setTimeout(() => {
          step.classList.add('step-active');

          if (connectors[index - 1]) {
            connectors[index - 1].classList.add('connector-active');
          }
        }, index * 420);
      });

      way2groProcessObserverV34.disconnect();
    }
  });
}, { threshold: 0.35 });

const way2groProcessV34 = document.querySelector('.how32-flow');
if (way2groProcessV34) {
  way2groProcessObserverV34.observe(way2groProcessV34);
}

const scrollProgress = document.getElementById('scrollProgress');
    window.addEventListener('scroll', () => {
      if(scrollProgress){
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgress.style.width = progress + '%';
      }
    });

    let navbar =document.getElementById('navbar');
navbar = document.getElementById('navbar');

    window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>40));

    const revealElements=document.querySelectorAll('.reveal');
    const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active');revealObserver.unobserve(entry.target)}})},{threshold:.12});
    revealElements.forEach(el=>revealObserver.observe(el));

    
    
    const flipStats = document.querySelectorAll('.flip-stat');
    const flipObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          flipStats.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('card-ready');
            }, 250 + index * 250);

            setTimeout(() => {

            }, 950 + index * 420);
          });
          flipObserver.disconnect();
        }
      });
    }, {threshold:.45});
    if(flipStats.length){
      flipObserver.observe(document.querySelector('.stats-grid'));
    }
    

    const counters=document.querySelectorAll('[data-count]');
    const counterObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){const el=entry.target;const target=Number(el.dataset.count);let current=0;const step=Math.max(1,Math.ceil(target/42));const timer=setInterval(()=>{current+=step;if(current>=target){el.textContent=target+'+';clearInterval(timer)}else{el.textContent=current+'+'}},32);counterObserver.unobserve(el)}})},{threshold:.68});
    counters.forEach(counter=>counterObserver.observe(counter));

    const slides=document.querySelectorAll('.hero-slide');
    let slideIndex=0;
    function showSlide(index){slides[slideIndex].classList.remove('active');slideIndex=index;slides[slideIndex].classList.add('active')}
    setInterval(()=>showSlide((slideIndex+1)%slides.length),6200);

    
    const journeySection = document.querySelector('.journey');
    const journeySteps = document.querySelectorAll('.journey-step');
    let journeyStarted = false;
    let journeyTimers = [];

    function resetJourneyStages(){
      journeySteps.forEach(step => {
        step.classList.remove('stage-active', 'stage-visited');
      });
      journeyTimers.forEach(timer => clearTimeout(timer));
      journeyTimers = [];
    }

    function startJourneyAnimation(){
      if(!journeySection || journeyStarted) return;
      journeyStarted = true;
      resetJourneyStages();
      journeySection.classList.add('journey-started');

      journeySteps.forEach((step, index) => {
        const activeAt = index * 2000;
        const visitAt = activeAt + 1700;

        journeyTimers.push(setTimeout(() => {
          journeySteps.forEach(s => s.classList.remove('stage-active'));
          step.classList.add('stage-active');
        }, activeAt));

        journeyTimers.push(setTimeout(() => {
          step.classList.remove('stage-active');
          step.classList.add('stage-visited');
        }, visitAt));
      });
    }

    const journeyObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          startJourneyAnimation();
          journeyObserver.disconnect();
        }
      });
    }, {threshold:.35});

    if(journeySection){
      journeyObserver.observe(journeySection);
    }

       
window.addEventListener('load', ()=>{
 const loader=document.getElementById('luxuryLoader');
 setTimeout(()=>loader?.classList.add('hide'),900);
});


/* V47 - Hide WhatsApp floater when page CTA/footer CTA is visible */
document.addEventListener('DOMContentLoaded', () => {
  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  const ctaTargets = document.querySelectorAll('.service-cta, .story-bottom-note, footer');

  if (!floatingWhatsapp || !ctaTargets.length) return;

  const ctaObserver = new IntersectionObserver((entries) => {
    const shouldHide = entries.some(entry => entry.isIntersecting);
    floatingWhatsapp.classList.toggle('is-hidden-near-cta', shouldHide);
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  ctaTargets.forEach(target => ctaObserver.observe(target));
});



/* V48 - Hide WhatsApp floater near CTA/footer */
document.addEventListener('DOMContentLoaded', () => {
  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  const ctaTargets = document.querySelectorAll('.service-cta, footer');

  if (!floatingWhatsapp || !ctaTargets.length) return;

  const hideObserver = new IntersectionObserver((entries) => {
    const shouldHide = entries.some(entry => entry.isIntersecting);
    floatingWhatsapp.classList.toggle('is-hidden-near-cta', shouldHide);
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px'
  });

  ctaTargets.forEach(target => hideObserver.observe(target));
});



/* V52 - Service Page Safe Guards */
document.addEventListener('DOMContentLoaded', () => {
  // Safe FAQ accordion, independent of older scripts
  document.querySelectorAll('.faq-question').forEach((btn) => {
    if (btn.dataset.bound === 'true') return;
    btn.dataset.bound = 'true';

    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      if (!item) return;

      const parent = item.closest('.faq-accordion') || item.parentElement;
      if (parent) {
        parent.querySelectorAll('.faq-item').forEach((other) => {
          if (other !== item) other.classList.remove('active');
        });
      }

      item.classList.toggle('active');
    });
  });

  // Hide WhatsApp floater near CTA/footer
  const floatingWhatsapp = document.querySelector('.floating-whatsapp');
  const ctaTargets = document.querySelectorAll('.service-cta, footer');

  if (floatingWhatsapp && ctaTargets.length) {
    const hideObserver = new IntersectionObserver((entries) => {
      const shouldHide = entries.some(entry => entry.isIntersecting);
      floatingWhatsapp.classList.toggle('is-hidden-near-cta', shouldHide);
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    ctaTargets.forEach(target => hideObserver.observe(target));
  }
});



/* TEAM FINAL: show back info as overlay, one card only */
document.addEventListener("click", function (e) {
  const moreBtn = e.target.closest("#team .know-more-btn");
  const backBtn = e.target.closest("#team .team-overlay-back-btn");

  if (moreBtn) {
    e.preventDefault();
    e.stopPropagation();

    document.querySelectorAll("#team .flip-founder-card").forEach(card => {
      card.classList.remove("show-founder-info");
      const oldOverlay = card.querySelector(".team-back-overlay");
      if (oldOverlay) oldOverlay.remove();
    });

    const card = moreBtn.closest(".flip-founder-card");
    const backContent = card.querySelector(".flip-back");

    const overlay = document.createElement("div");
    overlay.className = "team-back-overlay";
    overlay.innerHTML = backContent.innerHTML.replace(
      'class="flip-back-btn"',
      'class="team-overlay-back-btn"'
    );

    card.appendChild(overlay);

/* force browser to register initial hidden state */
overlay.offsetHeight;

setTimeout(() => {
  card.classList.add("show-founder-info");
}, 30);
    return;
  }

  if (backBtn) {
    e.preventDefault();
    e.stopPropagation();

    const card = backBtn.closest(".flip-founder-card");
   card.classList.remove("show-founder-info");

setTimeout(() => {
   overlay.remove();
}, 800);

    const overlay = card.querySelector(".team-back-overlay");
    if (overlay) overlay.remove();
  }
}, true);

/* WAY2GRO Calculator - SIP / SWP / GOAL / EMI */

const formatINR = value => {
  return "₹" + Math.round(value || 0).toLocaleString("en-IN");
};

let calculatorType = "sip";

const amountLabel = document.getElementById("amountLabel");
const extraLabel = document.getElementById("extraLabel");
const amountInput = document.getElementById("calcAmount");
const rateInput = document.getElementById("calcRate");
const yearsInput = document.getElementById("calcYears");
const extraInput = document.getElementById("calcExtra");
const investedValue = document.getElementById("investedValue");
const returnsValue = document.getElementById("returnsValue");
const futureValue = document.getElementById("futureValue");
const selectedCalc = document.getElementById("selectedCalc");
const calcNote = document.getElementById("calcNote");

function calculateInvestment() {
  const amount = Number(amountInput.value) || 0;
  const rate = (Number(rateInput.value) || 0) / 100;
  const years = Number(yearsInput.value) || 0;
  const extra = Number(extraInput.value) || 0;

  const months = years * 12;
  const monthlyRate = rate / 12;

  let invested = 0;
  let returns = 0;
  let result = 0;

  if (calculatorType === "sip") {
  const monthlyInvestment = amount;
  invested = monthlyInvestment * months;

  // SIP calculation matching annual compounding style
  const yearlyInvestment = monthlyInvestment * 12;

  if (rate > 0 && years > 0) {
    result =
      yearlyInvestment *
      ((Math.pow(1 + rate, years) - 1) / rate) *
      (1 + rate / 2);
  } else {
    result = invested;
  }

  returns = result - invested;
  futureValue.previousElementSibling.textContent = "Estimated Future Value";
}

  if (calculatorType === "swp") {
  const initialCorpus = amount;
  const monthlyWithdrawal = extra;
  const monthlyReturn = rate / 12;

  invested = initialCorpus;

  let remainingCorpus = initialCorpus;
  let totalWithdrawn = 0;

  for (let i = 1; i <= months; i++) {
    // growth first, then withdrawal
    remainingCorpus = remainingCorpus * (1 + monthlyReturn);

    if (remainingCorpus >= monthlyWithdrawal) {
      remainingCorpus -= monthlyWithdrawal;
      totalWithdrawn += monthlyWithdrawal;
    } else {
      totalWithdrawn += remainingCorpus;
      remainingCorpus = 0;
      break;
    }
  }

  result = remainingCorpus;
  returns = totalWithdrawn;

  document.querySelector("#investedValue").previousElementSibling.textContent = "Initial Corpus";
  document.querySelector("#returnsValue").previousElementSibling.textContent = "Total Withdrawn";
  futureValue.previousElementSibling.textContent = "Remaining Corpus";
}

  if (calculatorType === "goal") {
    const targetGoal = amount;

    result = targetGoal;
    invested = rate > 0
      ? targetGoal / Math.pow(1 + rate, years)
      : targetGoal;

    returns = targetGoal - invested;
    futureValue.previousElementSibling.textContent = "Amount Needed Today";
  }

  if (calculatorType === "emi") {
    const loanAmount = amount;
    const monthlyInterest = monthlyRate;

    if (monthlyInterest > 0 && months > 0) {
      result = loanAmount * monthlyInterest * Math.pow(1 + monthlyInterest, months) /
               (Math.pow(1 + monthlyInterest, months) - 1);
    } else {
      result = months > 0 ? loanAmount / months : 0;
    }

    invested = loanAmount;
    returns = (result * months) - loanAmount;
    futureValue.previousElementSibling.textContent = "Monthly EMI";
  }

  investedValue.textContent = formatINR(invested);
  returnsValue.textContent = formatINR(Math.max(returns, 0));
  futureValue.textContent = formatINR(result);
  selectedCalc.textContent = calculatorType.toUpperCase();
}

document.querySelectorAll(".calc-tab").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".calc-tab").forEach(tab => tab.classList.remove("active"));
    button.classList.add("active");

    calculatorType = button.dataset.type;

    if (calculatorType === "sip") {
  const monthlyInvestment = amount;
  invested = monthlyInvestment * months;

  if (monthlyRate > 0 && months > 0) {
    result =
      monthlyInvestment *
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
      (1 + monthlyRate);
  } else {
    result = invested;
  }

  returns = result - invested;
  futureValue.previousElementSibling.textContent = "Estimated Future Value";
}

   if (calculatorType === "swp") {
  amountLabel.textContent = "Initial Corpus";
  rateInput.previousElementSibling.textContent = "Expected Return %";
  yearsInput.previousElementSibling.textContent = "Withdrawal Years";
  extraLabel.textContent = "Monthly Withdrawal";

  amountInput.value = 2500000;
  rateInput.value = 8;
  yearsInput.value = 10;
  extraInput.value = 25000;

  calcNote.textContent = "Estimate your remaining corpus after regular monthly withdrawals.";
}

    if (calculatorType === "goal") {
      amountLabel.textContent = "Target Goal Amount";
      rateInput.previousElementSibling.textContent = "Expected Return %";
      yearsInput.previousElementSibling.textContent = "Years to Goal";
      extraLabel.textContent = "Current Savings";
      amountInput.value = 2500000;
      rateInput.value = 12;
      yearsInput.value = 10;
      extraInput.value = 0;
      calcNote.textContent = "Know how much you need today to reach your future goal.";
    }

    if (calculatorType === "emi") {
      amountLabel.textContent = "Loan Amount";
      rateInput.previousElementSibling.textContent = "Interest Rate %";
      yearsInput.previousElementSibling.textContent = "Loan Tenure Years";
      extraLabel.textContent = "Processing Fee";
      amountInput.value = 1000000;
      rateInput.value = 9;
      yearsInput.value = 5;
      extraInput.value = 0;
      calcNote.textContent = "Calculate estimated monthly EMI for your loan.";
    }

    calculateInvestment();
  });
});

["calcAmount", "calcRate", "calcYears", "calcExtra"].forEach(id => {
  document.getElementById(id)?.addEventListener("input", calculateInvestment);
});

calculateInvestment();

const consultationForm = document.getElementById("consultationForm");

if (consultationForm) {
  consultationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Thank you! Our WAY2GRO advisor will connect with you shortly.");

    consultationForm.reset();
  });
}

document.querySelectorAll('.stats-card').forEach(card => {

    card.addEventListener('click', () => {

        document.querySelectorAll('.stats-card')
            .forEach(c => {

                if(c !== card)
                    c.classList.remove('active');

            });

        card.classList.toggle('active');

    });

});
