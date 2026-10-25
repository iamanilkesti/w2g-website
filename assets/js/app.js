:root{
      --brand-blue:#1e4aa8;
      --deep-blue:#08245c;
      --navy:#061833;
      --green:#0ba44b;
      --orange:#f7941d;
      --text:#14213d;
      --muted:#64748b;
      --soft:#f6f9ff;
      --white:#fff;
      --shadow:0 24px 70px rgba(8,36,92,.16);
      --border:rgba(30,74,168,.12);
    }

    *{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{font-family:Inter,system-ui,sans-serif;color:var(--text);background:#fff;overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{display:block;max-width:100%}
    .container{width:min(1180px,calc(100% - 40px));margin:0 auto}

    /* NAVBAR */

.page-loader{
  position:fixed;
  inset:0;
  z-index:9999;
  pointer-events:none;
  background:#020b1d;
  display:grid;
  place-items:center;
  transition:opacity .65s ease, visibility .65s ease;
}
.page-loader.loaded{
  opacity:0;
  visibility:hidden;
}
.loader-line{
  width:190px;
  height:4px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  overflow:hidden;
}
.loader-line:after{
  content:"";
  display:block;
  height:100%;
  width:45%;
  border-radius:999px;
  background:linear-gradient(90deg,var(--brand-blue),var(--green));
  animation:loaderMove 1.2s ease-in-out infinite;
}
@keyframes loaderMove{
  0%{transform:translateX(-110%)}
  100%{transform:translateX(260%)}
}

.nav{position:fixed;top:12px;left:0;width:100%;z-index:1000}
    .nav .container{width:min(1120px,calc(100% - 54px))}
    .nav-inner{
      height:58px;
      padding:6px 14px;
      border-radius:15px;
      background:#fff;
      box-shadow:0 10px 28px rgba(8,36,92,.10);
      border:1px solid rgba(30,74,168,.08);
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      transition:.3s ease;
    }
    .nav.scrolled{top:7px}
    .nav.scrolled .nav-inner{height:52px;border-radius:13px;box-shadow:0 8px 22px rgba(8,36,92,.10)}
    .brand-logo{display:flex;align-items:center;min-width:172px}
    .brand-logo img{width:168px;transition:.3s ease}
    .nav.scrolled .brand-logo img{width:158px}
    .menu{display:flex;align-items:center;gap:8px;font-family:Poppins,sans-serif;font-size:13px;font-weight:700;color:#1f2937}
    .menu a{position:relative;padding:10px 14px;border-radius:999px;transition:.25s ease}
    .menu a:after{
      content:"";position:absolute;left:16px;right:16px;bottom:6px;height:2px;border-radius:99px;
      background:linear-gradient(90deg,var(--brand-blue),var(--green));transform:scaleX(0);transition:.25s ease
    }
    .menu a:hover{color:var(--brand-blue);background:rgba(30,74,168,.07);transform:translateY(-1px)}
    .menu a:hover:after{transform:scaleX(1)}
    .btn{
      display:inline-flex;align-items:center;justify-content:center;gap:10px;
      border:0;border-radius:999px;padding:13px 20px;font-weight:900;cursor:pointer;transition:.28s ease;white-space:nowrap
    }
    .nav .btn{padding:10px 17px;font-size:13px;box-shadow:0 10px 24px rgba(11,164,75,.20)}
    .btn-primary{background:linear-gradient(135deg,var(--brand-blue),var(--green));color:#fff;box-shadow:0 18px 40px rgba(11,164,75,.25)}
    .btn-primary:hover{transform:translateY(-3px);box-shadow:0 22px 48px rgba(11,164,75,.34)}
    .btn-light{background:rgba(255,255,255,.13);color:#fff;border:1px solid rgba(255,255,255,.22)}
    .btn-light:hover{background:#fff;color:var(--brand-blue);transform:translateY(-3px)}
    .hamburger{display:none;color:var(--brand-blue);font-size:22px}

    /* HERO V5 */
    .hero{
      min-height:100vh;
      padding:118px 0 70px;
      position:relative;
      overflow:hidden;
      color:#fff;
      background:
        radial-gradient(circle at 78% 35%,rgba(11,164,75,.24),transparent 31%),
        radial-gradient(circle at 18% 78%,rgba(247,148,29,.13),transparent 25%),
        linear-gradient(135deg,#061833 0%,#08245c 48%,#123f97 100%);
    }
    .hero:before{
      content:"";position:absolute;inset:0;
      background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);
      background-size:58px 58px;
      mask-image:linear-gradient(to bottom,#000,transparent 92%);
    }
    .hero:after{
      content:"";position:absolute;right:-160px;top:130px;width:570px;height:570px;border-radius:50%;
      background:rgba(255,255,255,.075);filter:blur(2px);animation:pulseGlow 7s ease-in-out infinite;
    }
    .hero-layout{
      position:relative;z-index:2;
      display:grid;
      grid-template-columns:minmax(0,1.08fr) 430px;
      gap:70px;
      align-items:center;
      min-height:calc(100vh - 188px);
    }
    .hero-copy{position:relative;min-height:430px;display:flex;align-items:center}
    .hero-slide{
      position:absolute;left:0;top:50%;transform:translate(-46px,-50%);
      opacity:0;pointer-events:none;max-width:680px;
      transition:opacity 1.25s ease,transform 1.25s ease;
    }
    .hero-slide.active{opacity:1;transform:translate(0,-50%);pointer-events:auto}
    .eyebrow{
      display:inline-flex;align-items:center;gap:9px;padding:9px 15px;border-radius:999px;
      background:rgba(255,255,255,.105);border:1px solid rgba(255,255,255,.20);
      color:rgba(255,255,255,.92);font-weight:800;font-size:13px;margin-bottom:24px;
    }
    .eyebrow i{color:var(--orange)}
    .hero h1{
      font-family:"Plus Jakarta Sans",Inter,sans-serif;
      font-size:clamp(48px,5.35vw,76px);
      line-height:1.02;
      letter-spacing:-.035em;
      margin-bottom:26px;
      max-width:760px;
    }
    .hero h1 span{
      background:linear-gradient(135deg,#fff,#dcffe9 48%,#b4f8ce);
      -webkit-background-clip:text;color:transparent;
    }
    .hero p{
      max-width:650px;
      color:rgba(255,255,255,.80);
      font-size:18px;
      line-height:1.75;
      margin-bottom:32px;
    }
    .hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
    .hero-dots{display:flex;gap:9px;margin-top:32px}
    .hero-dot{width:9px;height:9px;border-radius:50%;background:rgba(255,255,255,.28);border:0;cursor:pointer;transition:.3s ease}
    .hero-dot.active{width:30px;border-radius:999px;background:linear-gradient(90deg,var(--brand-blue),var(--green))}

    /* CALCULATOR STABLE */
    .calculator-card{
      width:430px;
      padding:20px;
      border-radius:28px;
      background:rgba(255,255,255,.16);
      border:1px solid rgba(255,255,255,.26);
      backdrop-filter:blur(25px);
      box-shadow:0 42px 120px rgba(0,0,0,.30);
      animation:softFloat 6s ease-in-out infinite;
    }
    .calc-top{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;margin-bottom:14px}
    .calc-top strong{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:22px;letter-spacing:-.035em;display:block}
    .calc-top span{display:block;color:rgba(255,255,255,.68);font-size:12px;margin-top:5px}
    .calc-top small{padding:6px 10px;border-radius:999px;background:rgba(11,164,75,.20);color:#9effc3;font-size:11px;font-weight:900}
    .calc-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:7px;margin:13px 0 15px}
    .calc-tab{
      border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.09);color:#fff;border-radius:14px;
      padding:10px 8px;font-weight:900;cursor:pointer;transition:.25s ease
    }
    .calc-tab.active,.calc-tab:hover{background:#fff;color:var(--brand-blue);transform:translateY(-2px);box-shadow:0 10px 20px rgba(8,36,92,.14)}
    .calc-input-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px 10px}
    .calc-input-grid span{display:block;color:rgba(255,255,255,.73);font-size:11px;font-weight:800;margin:0 0 6px 4px}
    .calc-input-grid input{
      width:100%;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.12);color:#fff;
      border-radius:13px;padding:10px 12px;font:inherit;font-weight:900;outline:none
    }
    .calc-input-grid input:focus{border-color:#80ffaf;box-shadow:0 0 0 4px rgba(11,164,75,.14)}
    .calc-result-box{
      margin:12px 0 12px;padding:13px;border-radius:20px;
      background:linear-gradient(135deg,rgba(255,255,255,.22),rgba(255,255,255,.09));
      border:1px solid rgba(255,255,255,.20);box-shadow:inset 0 1px 0 rgba(255,255,255,.18)
    }
    .calc-result-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .calc-result-grid span{display:block;color:rgba(255,255,255,.62);font-size:10px;font-weight:800;margin-bottom:4px}
    .calc-result-grid strong{font-size:14px;color:#fff}
    .calc-big-result{margin-top:10px;padding-top:10px;border-top:1px solid rgba(255,255,255,.12)}
    .calc-big-result span{color:#9effc3;font-size:12px;font-weight:900}
    .calc-big-result strong{display:block;font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:25px;letter-spacing:-.04em;margin-top:4px}
    .calc-actions{display:grid;grid-template-columns:1fr 1fr;gap:9px}
    .calc-actions .btn{padding:10px 12px;font-size:12px}
    .calc-note{margin-top:9px;color:rgba(255,255,255,.68);font-size:11px;line-height:1.4;text-align:center}

    /* SECTIONS */
    section{padding:96px 0}
    .section-head{text-align:center;max-width:760px;margin:0 auto 52px}
    .section-kicker{color:var(--green);font-weight:900;text-transform:uppercase;letter-spacing:.16em;font-size:12px;margin-bottom:12px}
    .section-head h2,.split-text h2{font-size:clamp(32px,4vw,52px);letter-spacing:-.05em;line-height:1.08;color:var(--navy);margin-bottom:18px}
    .section-head p,.split-text p{color:var(--muted);line-height:1.8;font-size:16px}

    .stats{margin-top:-48px;padding:0 0 82px;position:relative;z-index:3}
    .stats-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:16px;
      padding:18px;
      border-radius:30px;
      background:rgba(255,255,255,.94);
      box-shadow:0 26px 80px rgba(8,36,92,.16);
      border:1px solid rgba(30,74,168,.10);
      backdrop-filter:blur(14px);
    }
    .stat-card{
      position:relative;
      padding:26px 22px;
      border-radius:22px;
      background:linear-gradient(180deg,#ffffff,#f7faff);
      border:1px solid rgba(30,74,168,.08);
      overflow:hidden;
      transform-style:preserve-3d;
      transform:perspective(900px) rotateX(0deg) rotateY(0deg);
      transition:transform .55s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease, border-color .35s ease;
    }
    .stat-card:before{
      content:"";
      position:absolute;
      right:-42px;
      top:-46px;
      width:118px;
      height:118px;
      border-radius:50%;
      background:linear-gradient(135deg,rgba(30,74,168,.11),rgba(11,164,75,.13));
      transition:.35s ease;
    }
    .stat-card:hover{
      transform:perspective(900px) translateY(-8px) rotateX(4deg) rotateY(-4deg);
      box-shadow:0 22px 54px rgba(8,36,92,.14);
      border-color:rgba(11,164,75,.22);
    }
    .stat-card:hover:before{transform:scale(1.18)}
    .stat-icon{
      position:relative;
      width:46px;
      height:46px;
      border-radius:16px;
      display:grid;
      place-items:center;
      margin-bottom:16px;
      color:#fff;
      background:linear-gradient(135deg,var(--brand-blue),var(--green));
      box-shadow:0 12px 26px rgba(11,164,75,.18);
      transition:.4s ease;
    }
    .stat-card:hover .stat-icon{
      transform:translateZ(28px) rotate(-5deg) scale(1.06);
      box-shadow:0 16px 34px rgba(11,164,75,.28);
    }
    .stat-card strong{
      position:relative;
      display:block;
      color:var(--brand-blue);
      font-family:"Plus Jakarta Sans",Inter,sans-serif;
      font-size:42px;
      letter-spacing:-.055em;
      margin-bottom:8px;
    }
    .stat-card span{
      position:relative;
      color:#475569;
      font-weight:900;
      font-size:14px;
    }


    .flip-stat{
      min-height:178px;
      padding:0;
      background:transparent;
      border:0;
      box-shadow:none;
      perspective:1100px;
      overflow:visible;
    }
    .flip-stat:before{display:none}
    .stat-inner{
      position:relative;
      width:100%;
      height:100%;
      min-height:178px;
      transform-style:preserve-3d;
      transition:transform 1.45s cubic-bezier(.16,.84,.25,1);
      border-radius:22px;
    }
    .flip-stat.flip-show .stat-inner{
      transform:perspective(1200px) rotateX(2deg) rotateY(180deg);
    }
    .stat-face{
      position:absolute;
      inset:0;
      border-radius:22px;
      padding:24px 22px;
      backface-visibility:hidden;
      border:1px solid rgba(30,74,168,.08);
      overflow:hidden;
    }
    .stat-front{
      background:linear-gradient(180deg,#ffffff,#f7faff);
      box-shadow:0 18px 42px rgba(8,36,92,.08);
    }
    .stat-front:before,.stat-back:before{
      content:"";
      position:absolute;
      right:-42px;
      top:-46px;
      width:118px;
      height:118px;
      border-radius:50%;
      background:linear-gradient(135deg,rgba(30,74,168,.11),rgba(11,164,75,.13));
    }
    .stat-front span{
      position:relative;
      display:block;
      color:#0f2547;
      font-family:"Plus Jakarta Sans",Inter,sans-serif;
      font-size:20px;
      font-weight:900;
      letter-spacing:-.035em;
      margin-bottom:8px;
    }
    .stat-front small{
      position:relative;
      display:block;
      color:#64748b;
      font-size:12px;
      line-height:1.55;
      font-weight:700;
    }
    .stat-back{
      transform:rotateY(180deg);
      background:linear-gradient(135deg,var(--brand-blue),#0a7f53);
      color:white;
      box-shadow:0 28px 68px rgba(8,36,92,.18);
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:flex-start;
    }
    .stat-back:before{
      background:rgba(255,255,255,.12);
    }
    .stat-back strong{
      color:white;
      font-size:44px;
      margin-bottom:8px;
    }
    .stat-back span{
      color:rgba(255,255,255,.86);
      font-weight:900;
    }
    .flip-stat:hover .stat-inner{
      transform:perspective(1200px) rotateX(3deg) rotateY(180deg) translateY(-4px);
    }


    .flip-stat{
      transform:translateY(16px) scale(.985);
      opacity:0;
      transition:transform .8s ease, opacity .8s ease;
    }
    .flip-stat.card-ready{
      opacity:1;
      transform:translateY(0) scale(1);
    }

    .services{
      background:
        radial-gradient(circle at 10% 15%,rgba(30,74,168,.06),transparent 26%),
        radial-gradient(circle at 90% 70%,rgba(11,164,75,.07),transparent 28%),
        linear-gradient(180deg,#fff,var(--soft));
    }
    .service-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
    .service-card{
      position:relative;
      padding:30px;
      min-height:250px;
      border-radius:26px;
      background:rgba(255,255,255,.92);
      border:1px solid rgba(30,74,168,.10);
      box-shadow:0 14px 36px rgba(8,36,92,.055);
      overflow:hidden;
      transform-style:preserve-3d;
      transform-origin:center top;
      transition:transform .6s cubic-bezier(.2,.8,.2,1), box-shadow .38s ease, border-color .38s ease;
      will-change:transform;
    }
    .service-card:before{
      content:"";
      position:absolute;
      inset:0;
      background:linear-gradient(135deg,rgba(30,74,168,.06),rgba(11,164,75,.06));
      opacity:0;
      transition:.38s ease;
    }
    .service-card:after{
      content:"";
      position:absolute;
      right:-58px;
      bottom:-72px;
      width:155px;
      height:155px;
      border-radius:50%;
      background:linear-gradient(135deg,rgba(11,164,75,.12),rgba(247,148,29,.12));
      transition:.38s ease;
    }
    .service-card:hover{
      transform:perspective(1000px) translateY(-10px) rotateX(3deg) rotateY(3deg);
      border-color:rgba(11,164,75,.30);
      box-shadow:0 28px 72px rgba(8,36,92,.14);
    }
    .service-card:hover:before{opacity:1}
    .service-card:hover:after{transform:scale(1.28)}
    .icon-box{
      position:relative;
      width:58px;
      height:58px;
      border-radius:19px;
      background:linear-gradient(135deg,rgba(30,74,168,.12),rgba(11,164,75,.13));
      display:grid;
      place-items:center;
      color:var(--brand-blue);
      font-size:23px;
      margin-bottom:24px;
      transition:.35s ease;
    }
    .service-card:hover .icon-box{
      color:#fff;
      background:linear-gradient(135deg,var(--brand-blue),var(--green));
      transform:translateZ(34px) rotate(-4deg) scale(1.07);
      box-shadow:0 16px 32px rgba(11,164,75,.24);
    }
    .service-card h3{
      position:relative;
      font-family:"Plus Jakarta Sans",Inter,sans-serif;
      font-size:21px;
      color:var(--navy);
      margin-bottom:12px;
      letter-spacing:-.035em;
    }
    .service-card p{
      position:relative;
      color:var(--muted);
      line-height:1.75;
      font-size:14px;
    }
    .service-card .learn-more{
      position:relative;
      margin-top:22px;
      display:inline-flex;
      gap:8px;
      align-items:center;
      color:var(--brand-blue);
      font-weight:900;
      font-size:13px;
      opacity:.92;
    }
    .service-card .learn-more i{transition:.25s ease}
    .service-card:hover .learn-more i{transform:translateX(4px)}


.services-story{
  display:grid;
  grid-template-columns:1.18fr .82fr;
  gap:38px;
  align-items:start;
}
.services-left{
  position:sticky;
  top:108px;
}
.sticky-service-card{
  overflow:hidden;
  border-radius:40px;
  background:#fff;
  border:1px solid rgba(30,74,168,.10);
  box-shadow:0 30px 90px rgba(8,36,92,.13);
  min-height:860px;
}
.sticky-image{
  height:420px;
  background:
  linear-gradient(135deg,rgba(8,36,92,.30),rgba(11,164,75,.18)),
  url('https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80')
  center/cover;
}
.sticky-content{
  padding:42px;
}
.mini-tag{
  display:inline-flex;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(11,164,75,.10);
  color:var(--green);
  font-size:12px;
  font-weight:900;
  margin-bottom:18px;
}
.sticky-content h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  line-height:1.1;
  letter-spacing:-.045em;
  color:var(--navy);
  margin-bottom:18px;
}
.sticky-content p{
  color:var(--muted);
  line-height:1.95;
  font-size:16px;
  margin-bottom:30px;
}
.sticky-points{
  display:grid;
  gap:18px;
  margin-bottom:32px;
}
.sticky-points div{
  display:flex;
  gap:14px;
  align-items:center;
  font-weight:800;
  color:#1f2937;
  font-size:15px;
}
.sticky-points i{
  color:var(--green);
}


.sticky-highlight-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-bottom:34px;
}
.sticky-highlight{
  padding:22px;
  border-radius:22px;
  background:linear-gradient(180deg,#f7fbff,#eef6ff);
  border:1px solid rgba(30,74,168,.08);
}
.sticky-highlight strong{
  display:block;
  color:var(--brand-blue);
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:34px;
  letter-spacing:-.05em;
  margin-bottom:6px;
}
.sticky-highlight span{
  color:#64748b;
  font-weight:800;
}

.stacked-services{
  position:relative;
  padding-top:28px;
}
.stack-card{
  position:sticky;
  top:125px;
  display:flex;
  gap:18px;
  align-items:flex-start;
  padding:34px;
  border-radius:28px;
  background:rgba(255,255,255,.95);
  border:1px solid rgba(30,74,168,.10);
  box-shadow:0 20px 55px rgba(8,36,92,.10);
  margin-bottom:18px;
  transition:.35s ease;
}
.stack-card:nth-child(2){ top:145px; }
.stack-card:nth-child(3){ top:165px; }
.stack-card:nth-child(4){ top:185px; }
.stack-card:nth-child(5){ top:205px; }
.stack-card:nth-child(6){ top:225px; }

.stack-card:hover{
  transform:translateY(-8px) scale(1.01);
  box-shadow:0 30px 70px rgba(8,36,92,.14);
}
.stack-icon{
  width:62px;
  height:62px;
  border-radius:20px;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 18px 34px rgba(11,164,75,.20);
}
.stack-icon i{
  font-size:24px;
}
.stack-card h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:24px;
  letter-spacing:-.03em;
  margin-bottom:10px;
  color:var(--navy);
}
.stack-card p{
  color:var(--muted);
  line-height:1.8;
}

@media(max-width:1024px){
  .services-story{
    grid-template-columns:1fr;
  }
  .services-left{
    position:relative;
    top:auto;
  }
  .stack-card{
    position:relative !important;
    top:auto !important;
  }
}

.split{display:grid;grid-template-columns:.95fr 1.05fr;gap:56px;align-items:center}
    .premium-image{min-height:540px;border-radius:36px;background:linear-gradient(135deg,rgba(8,36,92,.9),rgba(30,74,168,.72)),url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80') center/cover;box-shadow:var(--shadow);position:relative;overflow:hidden}
    .premium-image:after{content:"Plan • Protect • Grow";position:absolute;left:28px;bottom:28px;color:#fff;font-size:30px;font-weight:900;letter-spacing:-.04em}
    .check-list{margin:28px 0 34px;display:grid;gap:16px}
    .check-item{display:flex;align-items:center;gap:14px;color:var(--text);font-weight:800}
    .check-item i{color:var(--green)}


.why-premium{
  background:
  radial-gradient(circle at 8% 15%, rgba(30,74,168,.06), transparent 25%),
  radial-gradient(circle at 92% 72%, rgba(11,164,75,.08), transparent 30%),
  linear-gradient(180deg,#fff,#f7fbff);
}

.why-layout{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:38px;
  align-items:start;
}

.trust-card{
  overflow:hidden;
  border-radius:38px;
  background:#fff;
  border:1px solid rgba(30,74,168,.08);
  box-shadow:0 28px 90px rgba(8,36,92,.12);
}

.trust-image{
  height:380px;
  background:
  linear-gradient(135deg,rgba(8,36,92,.25),rgba(11,164,75,.18)),
  url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80')
  center/cover;
}

.trust-content{
  padding:40px;
}

.trust-content h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  line-height:1.08;
  letter-spacing:-.045em;
  color:var(--navy);
  margin:18px 0;
}

.trust-content p{
  color:var(--muted);
  line-height:1.9;
  font-size:16px;
  margin-bottom:30px;
}

.trust-mini-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-bottom:34px;
}

.trust-mini{
  padding:22px;
  border-radius:24px;
  background:linear-gradient(180deg,#f8fbff,#eef6ff);
  border:1px solid rgba(30,74,168,.08);
  transition:.35s ease;
}
.trust-mini:hover{
  transform:translateY(-6px);
  box-shadow:0 18px 40px rgba(8,36,92,.10);
}
.trust-mini strong{
  display:block;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:30px;
  color:var(--brand-blue);
  letter-spacing:-.05em;
  margin-bottom:6px;
}
.trust-mini span{
  color:#64748b;
  font-weight:800;
}

.why-right{
  display:grid;
  gap:22px;
  padding-top:30px;
}

.why-point{
  display:flex;
  gap:22px;
  align-items:flex-start;
  padding:30px;
  border-radius:28px;
  background:rgba(255,255,255,.92);
  border:1px solid rgba(30,74,168,.08);
  box-shadow:0 16px 40px rgba(8,36,92,.08);
  transition:.35s ease;
}
.why-point:hover{
  transform:translateY(-7px);
  box-shadow:0 22px 58px rgba(8,36,92,.12);
}
.why-icon{
  width:68px;
  height:68px;
  border-radius:22px;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 18px 38px rgba(11,164,75,.22);
}
.why-icon i{font-size:26px}

.why-point h4{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:24px;
  letter-spacing:-.03em;
  color:var(--navy);
  margin-bottom:10px;
}
.why-point p{
  color:var(--muted);
  line-height:1.8;
}

@media(max-width:1024px){
  .why-layout{
    grid-template-columns:1fr;
  }
  .why-right{
    padding-top:0;
  }
}


/* WHY WAY2GRO - PREMIUM V2 */
.why-premium{
  background:
    radial-gradient(circle at 8% 14%, rgba(30,74,168,.07), transparent 28%),
    radial-gradient(circle at 92% 78%, rgba(11,164,75,.08), transparent 30%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.why-hero-head{
  display:grid;
  grid-template-columns: .95fr 1.05fr;
  gap:44px;
  align-items:end;
  margin-bottom:52px;
}

.why-hero-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(36px,4.6vw,58px);
  line-height:1.04;
  letter-spacing:-.055em;
  color:var(--navy);
}

.why-hero-head p{
  color:var(--muted);
  font-size:17px;
  line-height:1.9;
  max-width:620px;
}

.why-showcase{
  display:grid;
  grid-template-columns:1.05fr .95fr;
  gap:26px;
  align-items:stretch;
}

.why-main-card{
  border-radius:38px;
  overflow:hidden;
  background:#fff;
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 30px 90px rgba(8,36,92,.13);
  min-height:720px;
}

.why-main-image{
  height:360px;
  background:
    linear-gradient(
      135deg,
      rgba(8,36,92,.28),
      rgba(11,164,75,.20)
    ),
    url('../images/homepage/why-way2gro.jpg')
    center center/cover no-repeat;

  border-radius: 28px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0,0,0,.12);
  transition: transform .6s ease;
}

.why-main-image:hover{
  transform: translateY(-4px);
}

.why-main-content{
  padding:42px;
}

.why-badge{
  display:inline-flex;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(11,164,75,.10);
  color:var(--green);
  font-size:12px;
  font-weight:900;
  margin-bottom:18px;
}

.why-main-content h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:40px;
  line-height:1.08;
  letter-spacing:-.045em;
  color:var(--navy);
  margin-bottom:18px;
}

.why-main-content p{
  color:var(--muted);
  font-size:16px;
  line-height:1.9;
  margin-bottom:30px;
}

.why-proof-row{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:14px;
}

.why-proof-row div{
  padding:20px;
  border-radius:22px;
  background:linear-gradient(180deg,#f8fbff,#eef6ff);
  border:1px solid rgba(30,74,168,.08);
}

.why-proof-row strong{
  display:block;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  color:var(--brand-blue);
  font-size:31px;
  letter-spacing:-.05em;
  margin-bottom:6px;
}

.why-proof-row span{
  color:#64748b;
  font-weight:800;
  font-size:13px;
}

.why-feature-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:20px;
}

.why-feature{
  position:relative;
  padding:30px;
  min-height:350px;
  border-radius:30px;
  background:rgba(255,255,255,.94);
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 16px 44px rgba(8,36,92,.08);
  overflow:hidden;
  transition:.38s ease;
}

.why-feature:before{
  content:"";
  position:absolute;
  right:-58px;
  bottom:-70px;
  width:150px;
  height:150px;
  border-radius:50%;
  background:linear-gradient(135deg,rgba(30,74,168,.10),rgba(11,164,75,.12));
  transition:.38s ease;
}

.why-feature:hover{
  transform:translateY(-9px);
  box-shadow:0 26px 70px rgba(8,36,92,.14);
  border-color:rgba(11,164,75,.24);
}

.why-feature:hover:before{
  transform:scale(1.25);
}

.why-feature-icon{
  position:relative;
  width:64px;
  height:64px;
  border-radius:22px;
  display:grid;
  place-items:center;
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 18px 36px rgba(11,164,75,.22);
  margin-bottom:26px;
}

.why-feature-icon i{
  font-size:25px;
}

.why-feature h4{
  position:relative;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:25px;
  line-height:1.15;
  letter-spacing:-.035em;
  color:var(--navy);
  margin-bottom:14px;
}

.why-feature p{
  position:relative;
  color:var(--muted);
  line-height:1.85;
  font-size:15px;
}

.why-bottom-cta{
  margin-top:28px;
  padding:32px 36px;
  border-radius:30px;
  background:linear-gradient(135deg,var(--deep-blue),var(--navy));
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
  box-shadow:0 28px 76px rgba(8,36,92,.22);
}

.why-bottom-cta h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:30px;
  letter-spacing:-.04em;
  margin-bottom:8px;
}

.why-bottom-cta p{
  color:rgba(255,255,255,.72);
  line-height:1.7;
}

@media(max-width:1024px){
  .why-hero-head,
  .why-showcase{
    grid-template-columns:1fr;
  }
  .why-feature-grid{
    grid-template-columns:1fr 1fr;
  }
}

@media(max-width:720px){
  .why-feature-grid,
  .why-proof-row{
    grid-template-columns:1fr;
  }
  .why-main-card{
    min-height:auto;
  }
  .why-main-image{
    height:260px;
  }
  .why-main-content{
    padding:28px;
  }
  .why-main-content h3{
    font-size:31px;
  }
  .why-bottom-cta{
    flex-direction:column;
    align-items:flex-start;
  }
}

.journey{background:var(--navy);color:#fff;position:relative;overflow:hidden}
    .journey .section-head h2{color:#fff}
    .journey .section-head p{color:rgba(255,255,255,.7)}
    .timeline{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;position:relative}
    .timeline:before{content:"";position:absolute;left:8%;right:8%;top:38px;height:2px;background:linear-gradient(90deg,var(--brand-blue),var(--green),var(--orange));opacity:.75}
    .step{text-align:center;position:relative;z-index:2}
    .step-dot{width:76px;height:76px;margin:0 auto 18px;border-radius:24px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.16);display:grid;place-items:center;font-size:24px;color:#9effc3;transition:.3s ease}
    .step:hover .step-dot{transform:translateY(-8px);background:rgba(11,164,75,.18)}
    .step h3{font-size:16px;margin-bottom:8px}
    .step p{color:rgba(255,255,255,.62);font-size:13px;line-height:1.5}


/* PREMIUM JOURNEY ROADMAP */
.journey{
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 10% 20%, rgba(11,164,75,.12), transparent 25%),
    radial-gradient(circle at 90% 80%, rgba(247,148,29,.10), transparent 26%),
    linear-gradient(135deg,var(--navy),var(--deep-blue));
  color:#fff;
}

.journey .section-head h2{color:#fff}
.journey .section-head p{color:rgba(255,255,255,.72)}

.journey-stage{
  position:relative;
  margin-top:30px;
}

.journey-progress-line{
  position:absolute;
  left:70px;
  right:70px;
  top:82px;
  height:8px;
  border-radius:999px;
  background:rgba(255,255,255,.10);
  overflow:hidden;
}

.journey-line-fill{
  position:absolute;
  left:0;
  top:0;
  height:100%;
  width:0%;
  border-radius:999px;
  background:linear-gradient(90deg,var(--green),var(--orange));
}
.journey.journey-started .journey-line-fill{
  animation:travelLine 12s linear forwards;
}

.journey-traveller{
  position:absolute;
  top:-15px;
  left:0;
  width:42px;
  height:42px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--green),var(--orange));
  color:white;
  box-shadow:0 18px 42px rgba(247,148,29,.30);
}
.journey-traveller:after{
  content:"";
  position:absolute;
  inset:-8px;
  border-radius:50%;
  border:1px solid rgba(158,255,195,.45);
  animation:moneyPulse 1.6s ease-in-out infinite;
}
.journey.journey-started .journey-traveller{
  animation:travelMove 12s linear forwards;
}
.journey-traveller i{
  font-size:20px;
}

.journey-timeline{
  display:grid;
  grid-template-columns:repeat(6,1fr);
  gap:18px;
  position:relative;
  z-index:2;
}

.journey-step{
  text-align:center;
  padding-top:30px;
}

.step-node{
  width:84px;
  height:84px;
  border-radius:28px;
  margin:0 auto 26px;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.16);
  color:#9effc3;
  font-size:30px;
  backdrop-filter:blur(14px);
  transition:.35s ease;
}
.journey-step:hover .step-node{
  transform:translateY(-8px) scale(1.04);
  background:rgba(11,164,75,.20);
}

.step-card{
  padding:24px;
  border-radius:28px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(16px);
  transition:.35s ease;
}
.step-card:hover{
  transform:translateY(-10px);
  background:rgba(255,255,255,.12);
}
.journey-step.stage-active .step-node{
  transform:translateY(-8px) scale(1.08);
  background:linear-gradient(135deg,var(--green),var(--orange));
  color:white;
  box-shadow:0 18px 42px rgba(247,148,29,.30);
}
.journey-step.stage-active .step-card{
  transform:translateY(-10px);
  background:rgba(255,255,255,.16);
  border-color:rgba(158,255,195,.36);
  box-shadow:0 26px 70px rgba(11,164,75,.20);
}
.journey-step.stage-visited .step-node{
  background:rgba(11,164,75,.24);
  color:#9effc3;
}
.journey-step.stage-visited .step-card{
  background:rgba(255,255,255,.11);
  border-color:rgba(158,255,195,.20);
}
.step-card span{
  color:#9effc3;
  font-size:12px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.12em;
}
.step-card h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:26px;
  margin:12px 0 10px;
  letter-spacing:-.04em;
}
.step-card p{
  color:rgba(255,255,255,.72);
  line-height:1.75;
  font-size:14px;
}

@keyframes travelMove{
  0%{left:0}
  100%{left:calc(100% - 42px)}
}
@keyframes travelLine{
  0%{width:0%}
  100%{width:100%}
}
@keyframes moneyPulse{
  0%,100%{transform:scale(.85);opacity:.35}
  50%{transform:scale(1.15);opacity:.9}
}

@media(max-width:1024px){
  .journey-progress-line{
    display:none;
  }
  .journey-timeline{
    grid-template-columns:repeat(2,1fr);
  }
}
@media(max-width:720px){
  .journey-timeline{
    grid-template-columns:1fr;
  }
}

.team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
    .team-card{padding:18px;border:1px solid var(--border);border-radius:30px;background:#fff;box-shadow:0 16px 40px rgba(8,36,92,.07);transition:.35s ease}
    .team-card:hover{transform:translateY(-10px);box-shadow:var(--shadow)}
    .team-photo{height:280px;border-radius:24px;background:linear-gradient(135deg,rgba(30,74,168,.14),rgba(11,164,75,.12));display:grid;place-items:center;color:var(--brand-blue);font-size:54px;margin-bottom:20px}
    .team-card h3{color:var(--navy);font-size:22px;margin-bottom:6px}
    .team-card .role{color:var(--green);font-weight:900;margin-bottom:12px}
    .team-card p{color:var(--muted);line-height:1.7;font-size:14px;margin-bottom:18px}
    .social{width:40px;height:40px;border-radius:14px;display:grid;place-items:center;background:var(--soft);color:var(--brand-blue)}


/* PREMIUM TEAM SECTION */
.team-premium{
  background:
    radial-gradient(circle at 12% 20%, rgba(30,74,168,.06), transparent 26%),
    radial-gradient(circle at 88% 74%, rgba(11,164,75,.07), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.team-head{
  display:grid;
  grid-template-columns:1fr .9fr;
  gap:44px;
  align-items:end;
  margin-bottom:54px;
}
.team-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(36px,4.5vw,58px);
  line-height:1.04;
  letter-spacing:-.055em;
  color:var(--navy);
}
.team-head p{
  color:var(--muted);
  font-size:17px;
  line-height:1.9;
}

.leadership-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  align-items:stretch;
}
.leader-card{
  border-radius:34px;
  overflow:hidden;
  background:#fff;
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 20px 58px rgba(8,36,92,.09);
  transition:.38s ease;
}
.leader-card:hover{
  transform:translateY(-10px);
  box-shadow:0 30px 80px rgba(8,36,92,.15);
}
.featured-leader{
  transform:translateY(-18px);
}
.featured-leader:hover{
  transform:translateY(-28px);
}
.leader-visual{
  height:260px;
  display:grid;
  place-items:center;
  background:
    radial-gradient(circle at 30% 25%, rgba(11,164,75,.18), transparent 28%),
    linear-gradient(135deg,rgba(30,74,168,.12),rgba(11,164,75,.10));
}
.leader-avatar{
  width:128px;
  height:128px;
  border-radius:38px;
  display:grid;
  place-items:center;
  color:#fff;
  font-size:54px;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 24px 60px rgba(11,164,75,.25);
  transition:.38s ease;
}
.leader-card:hover .leader-avatar{
  transform:rotate(-4deg) scale(1.05);
}
.leader-content{
  padding:30px;
}
.leader-tag{
  display:inline-flex;
  padding:8px 12px;
  border-radius:999px;
  background:rgba(11,164,75,.10);
  color:var(--green);
  font-size:12px;
  font-weight:900;
  margin-bottom:16px;
}
.leader-content h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:30px;
  letter-spacing:-.045em;
  color:var(--navy);
  margin-bottom:6px;
}
.leader-role{
  color:var(--brand-blue);
  font-weight:900;
  margin-bottom:16px;
}
.leader-content p{
  color:var(--muted);
  line-height:1.8;
  font-size:14px;
  margin-bottom:24px;
}
.leader-actions{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
}
.leader-link{
  display:inline-flex;
  align-items:center;
  gap:8px;
  color:var(--brand-blue);
  font-weight:900;
  font-size:14px;
}
.leader-link i{
  transition:.25s ease;
}
.leader-link:hover i{
  transform:translateX(4px);
}

@media(max-width:1024px){
  .team-head{
    grid-template-columns:1fr;
  }
  .leadership-grid{
    grid-template-columns:1fr;
  }
  .featured-leader,
  .featured-leader:hover{
    transform:none;
  }
}

.portal{background:radial-gradient(circle at 80% 20%,rgba(11,164,75,.22),transparent 30%),linear-gradient(135deg,var(--deep-blue),var(--navy));color:#fff;padding:82px 0}
    .portal-card{display:grid;grid-template-columns:1fr auto;align-items:center;gap:28px;padding:42px;border-radius:34px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14)}
    .portal-card h2{font-size:clamp(30px,4vw,48px);letter-spacing:-.05em;margin-bottom:14px}
    .portal-card p{color:rgba(255,255,255,.72);line-height:1.8;max-width:650px}


/* PREMIUM PORTAL */
.premium-portal{
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 18% 20%, rgba(11,164,75,.16), transparent 25%),
    radial-gradient(circle at 82% 70%, rgba(247,148,29,.10), transparent 30%),
    linear-gradient(135deg,var(--navy),var(--deep-blue));
  color:#fff;
}

.portal-hero{
  display:grid;
  grid-template-columns:.95fr 1.05fr;
  gap:50px;
  align-items:center;
}

.portal-copy h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(42px,5vw,68px);
  line-height:1.02;
  letter-spacing:-.055em;
  color:#fff;
  margin-bottom:22px;
}

.portal-copy p{
  color:rgba(255,255,255,.72);
  line-height:1.95;
  font-size:17px;
  max-width:640px;
  margin-bottom:28px;
}

.portal-benefits{
  display:grid;
  gap:16px;
  margin-bottom:34px;
}
.portal-benefits div{
  display:flex;
  gap:12px;
  align-items:center;
  color:#e8eefb;
  font-weight:800;
}
.portal-benefits i{
  color:#9effc3;
}

.portal-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}

.portal-secondary{
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  color:#fff;
}
.portal-secondary:hover{
  background:#fff;
  color:var(--brand-blue);
}

.portal-visual{
  position:relative;
  min-height:620px;
}

.dashboard-main{
  position:absolute;
  inset:0;
  padding:34px;
  border-radius:38px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(20px);
  box-shadow:0 30px 90px rgba(0,0,0,.28);
}

.dashboard-top{
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin-bottom:30px;
}
.dashboard-pill{
  padding:9px 14px;
  border-radius:999px;
  background:rgba(11,164,75,.18);
  color:#9effc3;
  font-size:12px;
  font-weight:900;
}
.dashboard-growth{
  color:#9effc3;
  font-size:18px;
  font-weight:900;
}

.portfolio-value small{
  display:block;
  color:rgba(255,255,255,.62);
  margin-bottom:8px;
}
.portfolio-value strong{
  display:block;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:54px;
  letter-spacing:-.05em;
}

.dashboard-chart{
  margin:36px 0;
  height:220px;
  border-radius:28px;
  background:rgba(255,255,255,.05);
  overflow:hidden;
  position:relative;
}
.graph-line{
  position:absolute;
  left:0;
  right:0;
  bottom:40px;
  height:120px;
  background:
  linear-gradient(180deg, rgba(11,164,75,.18), transparent),
  linear-gradient(90deg,
    transparent 0%,
    rgba(158,255,195,.9) 10%,
    rgba(158,255,195,.9) 28%,
    rgba(247,148,29,.95) 55%,
    rgba(158,255,195,.95) 80%,
    rgba(158,255,195,.95) 100%);
  clip-path:polygon(0% 88%,12% 78%,28% 72%,42% 50%,56% 60%,74% 32%,100% 10%,100% 100%,0% 100%);
  animation:chartPulse 4s ease-in-out infinite;
}

.mini-stat-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:16px;
}
.mini-stat{
  padding:22px;
  border-radius:24px;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.08);
}
.mini-stat span{
  display:block;
  color:rgba(255,255,255,.62);
  margin-bottom:8px;
}
.mini-stat strong{
  font-size:24px;
}

.floating-widget{
  position:absolute;
  display:flex;
  gap:12px;
  align-items:center;
  padding:18px 20px;
  border-radius:22px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(18px);
  box-shadow:0 20px 50px rgba(0,0,0,.20);
  animation:floatWidget 4s ease-in-out infinite;
}
.floating-widget i{
  color:#9effc3;
  font-size:22px;
}
.floating-widget strong{
  display:block;
}
.floating-widget span{
  color:rgba(255,255,255,.66);
  font-size:13px;
}

.floating-report{
  left:-40px;
  top:90px;
}
.floating-lock{
  right:-30px;
  bottom:80px;
  animation-delay:1.2s;
}

@keyframes floatWidget{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-10px)}
}
@keyframes chartPulse{
  0%,100%{transform:scaleY(1)}
  50%{transform:scaleY(1.06)}
}

@media(max-width:1024px){
  .portal-hero{
    grid-template-columns:1fr;
  }
  .portal-visual{
    min-height:560px;
  }
}
@media(max-width:720px){
  .mini-stat-grid{
    grid-template-columns:1fr;
  }
  .dashboard-main{
    padding:24px;
  }
  .portfolio-value strong{
    font-size:36px;
  }
  .floating-widget{
    display:none;
  }
}


/* PREMIUM MOBILE APP */
.mobile-app-section{
  overflow:hidden;
  position:relative;
  background:
    radial-gradient(circle at 12% 20%, rgba(11,164,75,.12), transparent 24%),
    radial-gradient(circle at 88% 78%, rgba(247,148,29,.10), transparent 28%),
    linear-gradient(135deg,var(--navy),var(--deep-blue));
  color:#fff;
}

.mobile-layout{
  display:grid;
  grid-template-columns:.95fr 1.05fr;
  gap:60px;
  align-items:center;
}


.mobile-copy h2 .headline-row{
  display:block;
}
.mobile-copy h2 .second-row{
  margin-top:10px;
}

.mobile-copy h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(42px,5vw,68px);
  line-height:1.02;
  letter-spacing:-.055em;
  margin-bottom:24px;
}

.mobile-copy p{
  color:rgba(255,255,255,.72);
  line-height:1.95;
  font-size:17px;
  max-width:620px;
  margin-bottom:30px;
}

.mobile-benefits{
  display:grid;
  gap:16px;
  margin-bottom:34px;
}
.mobile-benefits div{
  display:flex;
  gap:12px;
  align-items:center;
  font-weight:800;
}
.mobile-benefits i{
  color:#9effc3;
}

.mobile-actions{
  display:flex;
  flex-wrap:wrap;
  gap:14px;
}

.mobile-secondary{
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.14);
  color:#fff;
}
.mobile-secondary:hover{
  background:#fff;
  color:var(--brand-blue);
}

.mobile-showcase{
  position:relative;
  min-height:720px;
  display:grid;
  place-items:center;
}

.mobile-glow{
  position:absolute;
  width:440px;
  height:440px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(11,164,75,.26), transparent 70%);
  filter:blur(18px);
}

.phone-frame{
  position:relative;
  width:340px;
  height:660px;
  border-radius:48px;
  padding:14px;
  background:#101318;
  border:2px solid rgba(255,255,255,.12);
  box-shadow:0 34px 90px rgba(0,0,0,.36);
  animation:phoneFloat 5s ease-in-out infinite;
}

.phone-notch{
  width:130px;
  height:26px;
  border-radius:999px;
  background:#060606;
  position:absolute;
  top:16px;
  left:50%;
  transform:translateX(-50%);
  z-index:4;
}

.phone-screen{
  height:100%;
  border-radius:36px;
  padding:34px 26px;
  background:
    radial-gradient(circle at top right, rgba(11,164,75,.18), transparent 30%),
    linear-gradient(180deg,#0b1d3b,#09162e);
}

.phone-header span,
.phone-growth span{
  display:block;
  color:rgba(255,255,255,.62);
  margin-bottom:8px;
}

.phone-header strong{
  font-size:46px;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
}

.phone-growth{
  margin-top:28px;
}
.phone-growth strong{
  color:#9effc3;
  font-size:26px;
}

.phone-chart{
  margin:34px 0;
  height:170px;
  border-radius:24px;
  background:rgba(255,255,255,.06);
  position:relative;
  overflow:hidden;
}
.phone-line{
  position:absolute;
  inset:20px;
  background:linear-gradient(90deg,#9effc3,#f7b347);
  clip-path:polygon(0% 80%,18% 62%,38% 66%,54% 42%,72% 52%,88% 18%,100% 8%,100% 100%,0% 100%);
}

.phone-cards{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:14px;
}
.phone-mini-card{
  padding:18px;
  border-radius:22px;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.08);
}
.phone-mini-card span{
  display:block;
  color:rgba(255,255,255,.62);
  margin-bottom:6px;
}
.phone-mini-card strong{
  color:#fff;
}

.floating-app-card{
  position:absolute;
  display:flex;
  gap:12px;
  align-items:center;
  padding:18px 20px;
  border-radius:22px;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.12);
  backdrop-filter:blur(18px);
  box-shadow:0 20px 50px rgba(0,0,0,.22);
  animation:floatCard 4s ease-in-out infinite;
}
.floating-app-card i{
  color:#9effc3;
  font-size:24px;
}
.floating-app-card strong{
  display:block;
}
.floating-app-card span{
  font-size:13px;
  color:rgba(255,255,255,.64);
}

.card-growth{
  top:100px;
  left:10px;
}
.card-statement{
  right:0;
  top:240px;
  animation-delay:1s;
}
.card-secure{
  left:50px;
  bottom:80px;
  animation-delay:2s;
}

@keyframes phoneFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-14px)}
}
@keyframes floatCard{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

@media(max-width:1024px){
  .mobile-layout{
    grid-template-columns:1fr;
  }
}
@media(max-width:720px){
  .phone-frame{
    width:300px;
    height:600px;
  }
  .floating-app-card{
    display:none;
  }
}


/* PREMIUM APP SHOWCASE - V16 */
.premium-app-showcase{
  overflow:hidden;
  position:relative;
  background:
    radial-gradient(circle at 52% 52%, rgba(11,164,75,.15), transparent 24%),
    radial-gradient(circle at 88% 40%, rgba(11,164,75,.10), transparent 26%),
    linear-gradient(135deg,#020b1d 0%,#061833 48%,#071d36 100%);
  color:#fff;
  padding:110px 0;
}

.app-showcase-grid{
  display:grid;
  grid-template-columns:.92fr 1.08fr;
  gap:56px;
  align-items:center;
}

.app-kicker{
  color:#44df78;
  letter-spacing:.20em;
  position:relative;
}
.app-kicker:after{
  content:"";
  display:block;
  width:38px;
  height:2px;
  margin-top:12px;
  background:#44df78;
}

.app-title{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(44px,5vw,70px);
  line-height:1.05;
  letter-spacing:-.055em;
  margin:24px 0 24px;
}
.app-title span{
  display:block;
  white-space:nowrap;
}
.app-title em{
  font-style:normal;
  color:#5ee986;
}

.app-subtitle{
  color:rgba(255,255,255,.82);
  font-size:17px;
  line-height:1.75;
  max-width:650px;
  margin-bottom:38px;
}

.app-feature-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px 24px;
  margin-bottom:38px;
}

.app-feature{
  display:flex;
  gap:16px;
  align-items:flex-start;
}

.app-feature-icon{
  width:54px;
  height:54px;
  border-radius:50%;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#73ff9d;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.15);
  box-shadow:inset 0 0 20px rgba(94,233,134,.08);
}

.app-feature h4{
  font-size:17px;
  line-height:1.25;
  margin-bottom:8px;
}
.app-feature p{
  color:rgba(255,255,255,.68);
  font-size:14px;
  line-height:1.6;
}

.app-actions{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:16px;
  margin-bottom:26px;
}

.app-download-btn,
.app-login-btn{
  display:flex;
  align-items:center;
  gap:18px;
  padding:18px 22px;
  border-radius:16px;
  transition:.3s ease;
}
.app-download-btn{
  background:linear-gradient(135deg,#16b85b,#0b8f45);
  color:#fff;
  box-shadow:0 18px 38px rgba(11,164,75,.28);
}
.app-login-btn{
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.18);
  color:#fff;
}
.app-download-btn:hover,
.app-login-btn:hover{
  transform:translateY(-5px);
}
.app-download-btn i,
.app-login-btn i{
  font-size:32px;
}
.app-download-btn strong,
.app-login-btn strong{
  display:block;
  font-size:16px;
}
.app-download-btn small,
.app-login-btn small{
  color:rgba(255,255,255,.72);
  display:block;
  margin-top:4px;
}

.app-help{
  display:inline-flex;
  align-items:center;
  gap:12px;
  color:#68f995;
}
.app-help i{
  font-size:24px;
}
.app-help strong,
.app-help small{
  display:block;
}
.app-help small{
  color:rgba(255,255,255,.70);
  margin-top:2px;
}

.app-phone-area{
  position:relative;
  min-height:740px;
  display:grid;
  place-items:center;
}

.app-glow-ring{
  position:absolute;
  width:500px;
  height:500px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(11,164,75,.20),transparent 70%);
  filter:blur(10px);
}

.phone-premium{
  position:relative;
  z-index:3;
  width:350px;
  height:700px;
  border-radius:48px;
  padding:12px;
  background:#0b0f16;
  border:2px solid rgba(255,255,255,.16);
  box-shadow:0 38px 100px rgba(0,0,0,.45);
  overflow:hidden;
  animation:phoneFloat 5s ease-in-out infinite;
}
.phone-premium img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:38px;
}
.phone-speaker{
  position:absolute;
  top:22px;
  left:50%;
  transform:translateX(-50%);
  width:118px;
  height:30px;
  border-radius:999px;
  background:#050505;
  z-index:5;
}

.app-platform{
  position:absolute;
  z-index:1;
  bottom:22px;
  width:440px;
  height:58px;
  border-radius:50%;
  background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.02));
  border:1px solid rgba(94,233,134,.45);
  box-shadow:0 0 34px rgba(94,233,134,.30);
}

.right-callouts{
  position:absolute;
  right:0;
  top:95px;
  display:grid;
  gap:26px;
  z-index:4;
}

.app-callout{
  width:250px;
  min-height:112px;
  display:flex;
  align-items:center;
  gap:18px;
  padding:20px;
  border-radius:18px;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.20);
  backdrop-filter:blur(16px);
  box-shadow:0 18px 44px rgba(0,0,0,.24);
  animation:floatCard 4s ease-in-out infinite;
}
.app-callout:nth-child(2){animation-delay:.7s}
.app-callout:nth-child(3){animation-delay:1.2s}
.app-callout:nth-child(4){animation-delay:1.8s}

.app-callout i{
  width:54px;
  height:54px;
  border-radius:16px;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#061833;
  background:linear-gradient(135deg,#9effc3,#28c76f);
  font-size:24px;
}
.app-callout strong{
  display:block;
  font-size:16px;
}
.app-callout span{
  display:block;
  margin-top:6px;
  color:rgba(255,255,255,.70);
  font-size:13px;
  line-height:1.4;
}

.app-security-row{
  margin-top:56px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0;
  border:1px solid rgba(255,255,255,.13);
  border-radius:20px;
  background:rgba(255,255,255,.04);
  overflow:hidden;
}
.app-security-row div{
  padding:24px 30px;
  display:grid;
  grid-template-columns:52px 1fr;
  column-gap:18px;
  align-items:center;
  border-right:1px solid rgba(255,255,255,.10);
}
.app-security-row div:last-child{
  border-right:0;
}
.app-security-row i{
  grid-row:span 2;
  width:52px;
  height:52px;
  border-radius:50%;
  display:grid;
  place-items:center;
  color:#73ff9d;
  background:rgba(255,255,255,.06);
  border:1px solid rgba(255,255,255,.12);
}
.app-security-row strong{
  color:#73ff9d;
  font-size:15px;
}
.app-security-row span{
  color:rgba(255,255,255,.68);
  font-size:13px;
  line-height:1.45;
}

@keyframes phoneFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-12px)}
}
@keyframes floatCard{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

@media(max-width:1200px){
  .right-callouts{
    right:-18px;
  }
  .app-callout{
    width:220px;
  }
}
@media(max-width:1024px){
  .app-showcase-grid{
    grid-template-columns:1fr;
  }
  .app-feature-grid{
    grid-template-columns:1fr 1fr;
  }
  .right-callouts{
    display:none;
  }
  .app-security-row{
    grid-template-columns:1fr 1fr;
  }
}
@media(max-width:720px){
  .app-title span{
    white-space:normal;
  }
  .app-feature-grid,
  .app-actions,
  .app-security-row{
    grid-template-columns:1fr;
  }
  .phone-premium{
    width:300px;
    height:600px;
  }
  .app-phone-area{
    min-height:640px;
  }
}


/* MOBILE APP BANNER IMAGE SECTION */
.mobile-app-banner-section{
  background:#020b1d;
  padding:96px 0;
  overflow:hidden;
}
.mobile-banner-wrap{
  border-radius:34px;
  overflow:hidden;
  box-shadow:0 32px 100px rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.10);
  background:#061833;
}
.mobile-banner-wrap img{
  width:100%;
  height:auto;
  display:block;
}
@media(max-width:720px){
  .mobile-app-banner-section{
    padding:72px 0;
  }
  .mobile-banner-wrap{
    border-radius:22px;
  }
}


/* CODED MOBILE APP SHOWCASE V18 */
.mobile-app-coded-section{
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 48% 55%, rgba(34,197,94,.18), transparent 27%),
    radial-gradient(circle at 90% 42%, rgba(34,197,94,.10), transparent 24%),
    linear-gradient(135deg,#020711 0%,#061322 48%,#071a2a 100%);
  color:#fff;
  padding:98px 0 76px;
}

.app-coded-wrap{
  display:grid;
  grid-template-columns:.94fr 1.06fr;
  gap:54px;
  align-items:center;
  position:relative;
}

.app-coded-left{
  min-width:0;
}

.app-coded-kicker{
  color:#52ec78;
  letter-spacing:.18em;
}
.app-coded-kicker:after{
  content:"";
  display:block;
  width:34px;
  height:2px;
  background:#52ec78;
  margin-top:12px;
}

.coded-app-title{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(44px,4.7vw,66px);
  line-height:1.08;
  letter-spacing:-.052em;
  margin:24px 0 22px;
}
.coded-app-title span{
  display:block;
  white-space:nowrap;
}
.coded-app-title em{
  font-style:normal;
  color:#63e66f;
}

.coded-app-subtitle{
  color:rgba(255,255,255,.82);
  font-size:17px;
  line-height:1.8;
  max-width:610px;
  margin-bottom:36px;
}

.coded-feature-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px 26px;
  margin-bottom:32px;
}
.coded-feature{
  display:flex;
  gap:15px;
  align-items:flex-start;
}
.coded-feature-icon{
  width:52px;
  height:52px;
  border-radius:50%;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#6df27a;
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.14);
  box-shadow:inset 0 0 18px rgba(99,230,111,.08);
}
.coded-feature h4{
  font-size:17px;
  line-height:1.25;
  margin-bottom:8px;
}
.coded-feature p{
  color:rgba(255,255,255,.68);
  font-size:14px;
  line-height:1.55;
}

.coded-app-actions{
  display:grid;
  grid-template-columns:.82fr 1.02fr;
  gap:16px;
  margin:26px 0 24px;
}
.coded-download,
.coded-login{
  display:flex;
  align-items:center;
  gap:16px;
  border-radius:14px;
  padding:14px 18px;
  transition:.28s ease;
}
.coded-download{
  background:rgba(44,215,86,.08);
  border:1px solid rgba(99,230,111,.42);
  color:#fff;
}
.coded-login{
  background:rgba(255,255,255,.045);
  border:1px solid rgba(255,255,255,.18);
  color:#fff;
}
.coded-download:hover,
.coded-login:hover{
  transform:translateY(-4px);
}
.coded-download i,
.coded-login i{
  font-size:28px;
  color:#6df27a;
}
.coded-download strong,
.coded-login strong{
  display:block;
  font-size:15px;
}
.coded-download small,
.coded-login small{
  display:block;
  color:rgba(255,255,255,.72);
  margin-top:4px;
}

.coded-help{
  display:inline-flex;
  align-items:center;
  gap:12px;
  color:#6df27a;
}
.coded-help i{
  font-size:24px;
}
.coded-help strong,
.coded-help small{
  display:block;
}
.coded-help small{
  color:rgba(255,255,255,.70);
  margin-top:3px;
}

.app-coded-phone-area{
  position:relative;
  min-height:720px;
  display:grid;
  place-items:center;
}
.phone-aura{
  position:absolute;
  width:460px;
  height:460px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(34,197,94,.18), transparent 68%);
  filter:blur(14px);
}
.coded-phone{
  width:340px;
  height:680px;
  position:relative;
  z-index:4;
  border-radius:48px;
  padding:12px;
  background:#07090e;
  border:2px solid rgba(255,255,255,.20);
  box-shadow:0 38px 100px rgba(0,0,0,.48);
  overflow:hidden;
  animation:codedPhoneFloat 5s ease-in-out infinite;
}
.coded-phone img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:38px;
}
.coded-phone-notch{
  position:absolute;
  top:22px;
  left:50%;
  transform:translateX(-50%);
  width:116px;
  height:28px;
  border-radius:999px;
  background:#050505;
  z-index:5;
}
.green-platform{
  position:absolute;
  bottom:34px;
  width:420px;
  height:62px;
  border-radius:50%;
  z-index:2;
  background:linear-gradient(180deg,rgba(255,255,255,.10),rgba(255,255,255,.02));
  border:1px solid rgba(99,230,111,.50);
  box-shadow:0 0 34px rgba(99,230,111,.38), inset 0 -8px 18px rgba(99,230,111,.12);
}

.coded-callouts{
  position:absolute;
  right:0;
  top:96px;
  z-index:5;
  display:grid;
  gap:30px;
}
.coded-callouts:before{
  content:"";
  position:absolute;
  left:-54px;
  top:50px;
  bottom:50px;
  width:1px;
  border-left:1px dashed rgba(99,230,111,.38);
}
.coded-callout{
  width:238px;
  min-height:106px;
  display:flex;
  align-items:center;
  gap:16px;
  padding:18px;
  border-radius:17px;
  background:rgba(255,255,255,.055);
  border:1px solid rgba(255,255,255,.18);
  box-shadow:0 18px 44px rgba(0,0,0,.24);
  backdrop-filter:blur(14px);
  animation:codedFloatCard 4s ease-in-out infinite;
}
.coded-callout:nth-child(2){animation-delay:.7s}
.coded-callout:nth-child(3){animation-delay:1.2s}
.coded-callout:nth-child(4){animation-delay:1.8s}
.coded-callout i{
  width:52px;
  height:52px;
  border-radius:14px;
  display:grid;
  place-items:center;
  flex-shrink:0;
  color:#061322;
  background:linear-gradient(135deg,#9effa7,#25c95a);
  font-size:23px;
}
.coded-callout strong{
  display:block;
  font-size:15px;
  line-height:1.3;
}
.coded-callout span{
  display:block;
  margin-top:6px;
  color:rgba(255,255,255,.72);
  font-size:13px;
  line-height:1.35;
}

.coded-security-strip{
  grid-column:1 / -1;
  margin-top:38px;
  border-top:1px solid rgba(255,255,255,.12);
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0;
}
.coded-security-strip div{
  padding:18px 26px;
  display:grid;
  grid-template-columns:40px 1fr;
  column-gap:14px;
  align-items:center;
  border-right:1px solid rgba(255,255,255,.10);
}
.coded-security-strip div:last-child{
  border-right:0;
}
.coded-security-strip i{
  grid-row:span 2;
  width:40px;
  height:40px;
  border-radius:50%;
  display:grid;
  place-items:center;
  color:#6df27a;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.12);
  font-size:17px;
}
.coded-security-strip strong{
  color:#6df27a;
  font-size:14px;
}
.coded-security-strip span{
  color:rgba(255,255,255,.66);
  font-size:12px;
  line-height:1.35;
}

@keyframes codedPhoneFloat{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-12px)}
}
@keyframes codedFloatCard{
  0%,100%{transform:translateY(0)}
  50%{transform:translateY(-8px)}
}

@media(max-width:1180px){
  .coded-callouts{
    right:-22px;
  }
  .coded-callout{
    width:218px;
  }
}
@media(max-width:1024px){
  .app-coded-wrap{
    grid-template-columns:1fr;
  }
  .coded-feature-grid{
    grid-template-columns:1fr 1fr;
  }
  .coded-callouts{
    display:none;
  }
  .coded-security-strip{
    grid-template-columns:1fr 1fr;
  }
}
@media(max-width:720px){
  .mobile-app-coded-section{
    padding:76px 0;
  }
  .coded-app-title span{
    white-space:normal;
  }
  .coded-feature-grid,
  .coded-app-actions,
  .coded-security-strip{
    grid-template-columns:1fr;
  }
  .coded-phone{
    width:300px;
    height:600px;
  }
  .green-platform{
    width:330px;
  }
  .app-coded-phone-area{
    min-height:630px;
  }
  .coded-security-strip div{
    border-right:0;
    border-bottom:1px solid rgba(255,255,255,.10);
  }
}

.calculator-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
    .calc-card{padding:28px;border-radius:24px;border:1px solid var(--border);background:#fff;box-shadow:0 14px 34px rgba(8,36,92,.06);transition:.3s ease}
    .calc-card:hover{transform:translateY(-8px);border-color:rgba(11,164,75,.28)}
    .calc-card i{color:var(--orange);font-size:28px;margin-bottom:18px}
    .calc-card h3{color:var(--navy);margin-bottom:10px}
    .calc-card p{color:var(--muted);font-size:14px;line-height:1.65}

    .contact{background:var(--soft)}
    .contact-box{display:grid;grid-template-columns:.9fr 1.1fr;gap:34px;padding:34px;border-radius:36px;background:#fff;box-shadow:var(--shadow);border:1px solid var(--border)}
    .contact-info{border-radius:28px;padding:34px;background:linear-gradient(135deg,var(--brand-blue),var(--deep-blue));color:#fff}
    .contact-info h2{font-size:38px;letter-spacing:-.05em;margin-bottom:16px}
    .contact-info p{color:rgba(255,255,255,.75);line-height:1.8;margin-bottom:28px}
    .contact-line{display:flex;gap:14px;align-items:center;margin:18px 0;font-weight:800}
    .contact-line i{color:#9effc3}
    .form{display:grid;gap:16px}
    .form input,.form select,.form textarea{width:100%;border:1px solid var(--border);border-radius:18px;padding:16px 18px;font:inherit;outline:none;background:#fbfdff}
    .form input:focus,.form select:focus,.form textarea:focus{border-color:var(--green);box-shadow:0 0 0 4px rgba(11,164,75,.08)}
    textarea{min-height:120px;resize:vertical}


/* PREMIUM CONTACT / LEAD CAPTURE */
.premium-contact{
  background:
    radial-gradient(circle at 10% 20%, rgba(30,74,168,.07), transparent 24%),
    radial-gradient(circle at 90% 75%, rgba(11,164,75,.08), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.contact-head{
  display:grid;
  grid-template-columns:1fr .95fr;
  gap:44px;
  align-items:end;
  margin-bottom:52px;
}
.contact-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(38px,4.8vw,62px);
  line-height:1.04;
  letter-spacing:-.055em;
  color:var(--navy);
}
.contact-head p{
  color:var(--muted);
  font-size:17px;
  line-height:1.9;
}

.premium-contact-box{
  display:grid;
  grid-template-columns:.9fr 1.1fr;
  gap:28px;
  padding:24px;
  border-radius:40px;
  background:#fff;
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 32px 100px rgba(8,36,92,.13);
}

.contact-left-panel{
  position:relative;
  overflow:hidden;
  border-radius:32px;
  padding:42px;
  background:
    radial-gradient(circle at 20% 20%, rgba(11,164,75,.22), transparent 30%),
    linear-gradient(135deg,var(--deep-blue),var(--navy));
  color:#fff;
}
.contact-left-panel:after{
  content:"";
  position:absolute;
  right:-90px;
  bottom:-100px;
  width:260px;
  height:260px;
  border-radius:50%;
  background:rgba(255,255,255,.07);
}
.contact-badge{
  display:inline-flex;
  padding:9px 15px;
  border-radius:999px;
  background:rgba(11,164,75,.18);
  color:#9effc3;
  font-size:12px;
  font-weight:900;
  margin-bottom:24px;
}
.contact-left-panel h3{
  position:relative;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  line-height:1.08;
  letter-spacing:-.05em;
  margin-bottom:20px;
}
.contact-left-panel p{
  position:relative;
  color:rgba(255,255,255,.75);
  line-height:1.85;
  margin-bottom:30px;
}
.contact-benefit-list{
  position:relative;
  display:grid;
  gap:16px;
  margin-bottom:34px;
}
.contact-benefit-list div{
  display:flex;
  gap:12px;
  align-items:center;
  font-weight:800;
}
.contact-benefit-list i{
  color:#9effc3;
}

.contact-methods{
  position:relative;
  display:grid;
  gap:14px;
}
.contact-method{
  display:flex;
  align-items:center;
  gap:16px;
  padding:18px;
  border-radius:22px;
  color:#fff;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  transition:.3s ease;
}
.contact-method:hover{
  background:rgba(255,255,255,.13);
  transform:translateY(-4px);
}
.contact-method i{
  width:48px;
  height:48px;
  border-radius:16px;
  display:grid;
  place-items:center;
  color:var(--navy);
  background:#9effc3;
}
.contact-method span{
  color:rgba(255,255,255,.64);
  display:block;
  font-size:13px;
}
.contact-method strong{
  display:block;
  margin-top:4px;
}

.lead-form-card{
  padding:34px;
  border-radius:32px;
  background:linear-gradient(180deg,#ffffff,#f8fbff);
  border:1px solid rgba(30,74,168,.08);
}

.premium-form{
  display:grid;
  gap:18px;
}
.form-row{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:18px;
}
.premium-form label span{
  display:block;
  color:#334155;
  font-weight:900;
  font-size:13px;
  margin-bottom:8px;
}
.premium-form input,
.premium-form select,
.premium-form textarea{
  width:100%;
  border:1px solid rgba(30,74,168,.12);
  border-radius:18px;
  padding:16px 18px;
  font:inherit;
  outline:none;
  background:#fff;
  transition:.25s ease;
}
.premium-form textarea{
  min-height:128px;
  resize:vertical;
}
.premium-form input:focus,
.premium-form select:focus,
.premium-form textarea:focus{
  border-color:var(--green);
  box-shadow:0 0 0 4px rgba(11,164,75,.09);
}
.premium-submit{
  width:100%;
  margin-top:4px;
  padding:16px 22px;
}
.form-note{
  color:#64748b;
  font-size:12px;
  line-height:1.6;
  text-align:center;
}

@media(max-width:1024px){
  .contact-head,
  .premium-contact-box{
    grid-template-columns:1fr;
  }
}
@media(max-width:720px){
  .form-row{
    grid-template-columns:1fr;
  }
  .premium-contact-box{
    padding:16px;
    border-radius:28px;
  }
  .contact-left-panel,
  .lead-form-card{
    padding:26px;
  }
  .contact-left-panel h3{
    font-size:32px;
  }
}


/* FINAL PREMIUM FOOTER */
.premium-footer{
  position:relative;
  overflow:hidden;
  background:
    radial-gradient(circle at 12% 18%, rgba(11,164,75,.12), transparent 26%),
    radial-gradient(circle at 86% 78%, rgba(247,148,29,.08), transparent 30%),
    linear-gradient(135deg,#020b1d,#051126);
  color:#fff;
  padding:88px 0 30px;
}

.footer-cta{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:28px;
  padding:38px 42px;
  border-radius:34px;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 28px 90px rgba(0,0,0,.28);
  margin-bottom:62px;
}

.footer-cta span{
  display:block;
  color:#9effc3;
  font-weight:900;
  letter-spacing:.08em;
  text-transform:uppercase;
  font-size:12px;
  margin-bottom:10px;
}

.footer-cta h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(28px,3.6vw,46px);
  line-height:1.08;
  letter-spacing:-.045em;
}

.footer-main{
  display:grid;
  grid-template-columns:1.4fr .8fr .9fr 1fr;
  gap:42px;
  margin-bottom:46px;
}

.footer-logo-img{
  width:220px;
  background:#fff;
  border-radius:18px;
  padding:10px 14px;
}

.footer-brand p{
  color:rgba(255,255,255,.64);
  line-height:1.85;
  margin:22px 0 26px;
  max-width:390px;
}

.footer-socials{
  display:flex;
  gap:12px;
}

.footer-socials a{
  width:42px;
  height:42px;
  border-radius:14px;
  display:grid;
  place-items:center;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.10);
  color:#9effc3;
  transition:.28s ease;
}

.footer-socials a:hover{
  transform:translateY(-4px);
  background:rgba(11,164,75,.18);
}

.footer-col h4{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:18px;
  margin-bottom:22px;
}

.footer-col a{
  display:flex;
  align-items:center;
  gap:10px;
  color:rgba(255,255,255,.64);
  margin:14px 0;
  font-size:14px;
  transition:.24s ease;
}

.footer-col a:hover{
  color:#9effc3;
  transform:translateX(4px);
}

.footer-contact i{
  color:#9effc3;
}

.footer-login{
  margin-top:20px!important;
  padding:12px 16px;
  border-radius:999px;
  width:max-content;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  color:#fff!important;
  box-shadow:0 14px 30px rgba(11,164,75,.22);
}

.footer-login:hover{
  transform:translateY(-3px)!important;
}

.footer-disclaimer{
  display:grid;
  grid-template-columns:1fr auto;
  gap:28px;
  align-items:start;
  padding:26px 0;
  border-top:1px solid rgba(255,255,255,.10);
  border-bottom:1px solid rgba(255,255,255,.10);
  color:rgba(255,255,255,.56);
  font-size:12px;
  line-height:1.8;
}

.footer-disclaimer strong{
  color:rgba(255,255,255,.82);
}

.footer-bottom-links{
  display:flex;
  gap:18px;
  white-space:nowrap;
}

.footer-bottom-links a{
  color:rgba(255,255,255,.56);
  font-size:12px;
}

.footer-bottom-links a:hover{
  color:#9effc3;
}

.footer-bottom{
  padding-top:24px;
  display:flex;
  justify-content:space-between;
  gap:20px;
  color:rgba(255,255,255,.52);
  font-size:13px;
}


/* FOOTER V2 - ELEGANT LIGHT THEME */
.premium-footer{
  background:
    radial-gradient(circle at 12% 12%, rgba(30,74,168,.08), transparent 26%),
    radial-gradient(circle at 88% 70%, rgba(11,164,75,.08), transparent 30%),
    linear-gradient(180deg,#ffffff 0%,#f7fbff 55%,#eef5ff 100%) !important;
  color:var(--text) !important;
  padding:88px 0 30px;
}

.footer-cta{
  background:
    radial-gradient(circle at 92% 25%, rgba(11,164,75,.16), transparent 24%),
    linear-gradient(135deg,#ffffff,#f4f9ff) !important;
  border:1px solid rgba(30,74,168,.10) !important;
  box-shadow:0 24px 80px rgba(8,36,92,.12) !important;
}

.footer-cta span{
  color:var(--green) !important;
}

.footer-cta h2{
  color:var(--navy) !important;
}

.footer-logo-img{
  background:transparent !important;
  padding:0 !important;
  border-radius:0 !important;
  width:255px !important;
  filter:none !important;
}

.footer-brand p{
  color:#526179 !important;
  font-weight:500;
}

.footer-col h4{
  color:var(--navy) !important;
  position:relative;
  padding-bottom:12px;
}

.footer-col h4:after{
  content:"";
  position:absolute;
  left:0;
  bottom:0;
  width:36px;
  height:2px;
  border-radius:99px;
  background:linear-gradient(90deg,var(--brand-blue),var(--green));
}

.footer-col a{
  color:#526179 !important;
  font-weight:700;
}

.footer-col a:hover{
  color:var(--brand-blue) !important;
}

.footer-contact i{
  color:var(--green) !important;
}

.footer-socials a{
  background:#ffffff !important;
  border:1px solid rgba(30,74,168,.10) !important;
  color:var(--brand-blue) !important;
  box-shadow:0 10px 24px rgba(8,36,92,.08);
}

.footer-socials a:hover{
  background:linear-gradient(135deg,var(--brand-blue),var(--green)) !important;
  color:#fff !important;
}

.footer-login{
  color:#fff !important;
}

.footer-disclaimer{
  border-top:1px solid rgba(30,74,168,.10) !important;
  border-bottom:1px solid rgba(30,74,168,.10) !important;
  color:#64748b !important;
}

.footer-disclaimer strong{
  color:var(--navy) !important;
}

.footer-bottom-links a{
  color:#64748b !important;
  font-weight:700;
}

.footer-bottom-links a:hover{
  color:var(--brand-blue) !important;
}

.footer-bottom{
  color:#64748b !important;
}

.premium-footer .footer-main{
  padding:8px 0 0;
}

.premium-footer:before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(30,74,168,.18),transparent);
}

@media(max-width:720px){
  .footer-logo-img{
    width:220px !important;
  }
}


/* FOOTER V2.1 - PREMIUM SEPARATORS */
.premium-footer{
  position:relative;
  margin-top:0;
}

.premium-footer:after{
  content:"";
  position:absolute;
  top:0;
  left:50%;
  transform:translateX(-50%);
  width:min(1180px, calc(100% - 40px));
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(30,74,168,.24), rgba(11,164,75,.35), transparent);
}

.premium-footer .container:before{
  content:"";
  display:block;
  height:18px;
  margin:-54px auto 36px;
  width:min(760px, 70%);
  border-radius:999px;
  background:radial-gradient(ellipse at center, rgba(11,164,75,.22), transparent 68%);
  filter:blur(6px);
}

.footer-cta{
  position:relative;
}

.footer-cta:after{
  content:"";
  position:absolute;
  left:42px;
  right:42px;
  bottom:-31px;
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(30,74,168,.18), rgba(11,164,75,.26), transparent);
}

.footer-main{
  position:relative;
  padding-top:18px !important;
}

.footer-main:before{
  content:"";
  position:absolute;
  top:-18px;
  left:0;
  right:0;
  height:1px;
  background:linear-gradient(90deg, transparent, rgba(30,74,168,.16), transparent);
}

.footer-disclaimer{
  position:relative;
  margin-top:8px;
  background:rgba(255,255,255,.42);
  border-radius:20px;
  padding:22px 24px !important;
  border:1px solid rgba(30,74,168,.08) !important;
  box-shadow:0 12px 34px rgba(8,36,92,.05);
}

.footer-disclaimer:before{
  content:"";
  position:absolute;
  top:-15px;
  left:50%;
  transform:translateX(-50%);
  width:160px;
  height:3px;
  border-radius:999px;
  background:linear-gradient(90deg,var(--brand-blue),var(--green));
  opacity:.55;
}

.footer-bottom{
  border-top:1px solid rgba(30,74,168,.08);
  margin-top:22px;
}


/* FOOTER CTA V2 - ALIGNMENT FIX */
.footer-cta{
  display:grid !important;
  grid-template-columns:1fr auto !important;
  align-items:center !important;
  min-height:190px !important;
  padding:42px 48px !important;
  margin-bottom:54px !important;
  overflow:hidden !important;
}

.footer-cta > div{
  max-width:760px;
}

.footer-cta h2{
  max-width:720px;
  margin:0 !important;
}

.footer-cta .btn{
  justify-self:end;
  min-width:255px;
  padding:16px 24px !important;
  font-size:15px;
  box-shadow:0 16px 34px rgba(11,164,75,.22) !important;
}

.footer-cta:before{
  content:"";
  position:absolute;
  right:-80px;
  top:-90px;
  width:280px;
  height:280px;
  border-radius:50%;
  background:radial-gradient(circle,rgba(11,164,75,.18),transparent 68%);
}

.footer-cta:after{
  bottom:-27px !important;
}

.premium-footer .container:before{
  margin:-42px auto 26px !important;
}

.footer-main{
  padding-top:34px !important;
}

@media(max-width:1024px){
  .footer-cta{
    grid-template-columns:1fr !important;
    gap:28px !important;
  }
  .footer-cta .btn{
    justify-self:start;
  }
}

@media(max-width:720px){
  .footer-cta{
    min-height:auto !important;
    padding:28px !important;
  }
  .footer-cta .btn{
    width:100%;
    min-width:0;
  }
}


/* FOOTER V21.3 - CLIENT LOGIN + SEPARATOR CLEANUP */
.footer-login{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:10px !important;
  min-width:154px !important;
  height:44px !important;
  padding:0 20px !important;
  border-radius:999px !important;
  background:linear-gradient(135deg,var(--brand-blue),var(--green)) !important;
  color:#ffffff !important;
  font-weight:900 !important;
  line-height:1 !important;
  white-space:nowrap !important;
  box-shadow:0 14px 30px rgba(11,164,75,.22) !important;
  overflow:visible !important;
  text-align:center !important;
}

.footer-login i{
  color:#ffffff !important;
  font-size:14px !important;
  flex-shrink:0 !important;
}

.footer-login:hover{
  transform:translateY(-3px) !important;
  color:#ffffff !important;
}

.footer-disclaimer:before{
  width:120px !important;
  height:2px !important;
  opacity:.35 !important;
  top:-13px !important;
}

.footer-disclaimer{
  margin-top:4px !important;
}

.footer-main:before{
  opacity:.45 !important;
}

.footer-col a{
  line-height:1.35 !important;
}

/* FINAL MICRO POLISH */
.btn{
  position:relative;
  overflow:hidden;
}
.btn:before{
  content:"";
  position:absolute;
  inset:0;
  left:-120%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.22),transparent);
  transition:.45s ease;
}
.btn:hover:before{
  left:120%;
}

::selection{
  background:rgba(11,164,75,.25);
  color:#fff;
}

@media(max-width:1024px){
  .footer-cta{
    flex-direction:column;
    align-items:flex-start;
  }
  .footer-main{
    grid-template-columns:1fr 1fr;
  }
  .footer-disclaimer{
    grid-template-columns:1fr;
  }
}

@media(max-width:720px){
  .premium-footer{
    padding:72px 0 26px;
  }
  .footer-cta{
    padding:28px;
    border-radius:26px;
  }
  .footer-main{
    grid-template-columns:1fr;
  }
  .footer-bottom{
    flex-direction:column;
  }
  .footer-bottom-links{
    flex-wrap:wrap;
  }
}

footer{background:#051126;color:#fff;padding:70px 0 26px}
    .footer-grid{display:grid;grid-template-columns:1.5fr repeat(3,1fr);gap:36px;margin-bottom:44px}
    .footer-logo-img{width:220px;background:#fff;border-radius:18px;padding:10px 14px}
    .footer-brand p{color:rgba(255,255,255,.65);line-height:1.8;margin-top:18px;max-width:360px}
    .footer-col h4{margin-bottom:18px;color:#fff}
    .footer-col a{display:block;color:rgba(255,255,255,.64);margin:12px 0;font-size:14px}
    .footer-col a:hover{color:#9effc3}
    .disclaimer{border-top:1px solid rgba(255,255,255,.1);padding-top:22px;color:rgba(255,255,255,.56);font-size:13px;line-height:1.7}

    .reveal{opacity:0;transform:translateY(28px);transition:.7s ease}
    .reveal.active{opacity:1;transform:translateY(0)}
    .service-card.reveal,.stat-card.reveal{
      opacity:0;
      transform:perspective(900px) rotateX(-12deg) translateY(34px) scale(.985);
      transform-origin:center top;
      transition:opacity .75s ease, transform .75s cubic-bezier(.2,.8,.2,1), box-shadow .35s ease;
    }
    .service-card.reveal.active,.stat-card.reveal.active{
      opacity:1;
      transform:perspective(900px) rotateX(0deg) translateY(0) scale(1);
    }
    @keyframes softFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    @keyframes pulseGlow{0%,100%{transform:scale(1);opacity:.85}50%{transform:scale(1.08);opacity:.55}}


    .stats-grid .stat-card:nth-child(1),.service-grid .service-card:nth-child(1){transition-delay:.02s}
    .stats-grid .stat-card:nth-child(2),.service-grid .service-card:nth-child(2){transition-delay:.08s}
    .stats-grid .stat-card:nth-child(3),.service-grid .service-card:nth-child(3){transition-delay:.14s}
    .stats-grid .stat-card:nth-child(4),.service-grid .service-card:nth-child(4){transition-delay:.20s}
    .service-grid .service-card:nth-child(5){transition-delay:.06s}
    .service-grid .service-card:nth-child(6){transition-delay:.12s}
    .service-grid .service-card:nth-child(7){transition-delay:.18s}
    .service-grid .service-card:nth-child(8){transition-delay:.24s}

    @media(max-width:1024px){
      .menu{display:none}.hamburger{display:block}
      .hero-layout,.split,.contact-box{grid-template-columns:1fr}
      .hero-layout{gap:34px;min-height:auto}
      .hero-copy{min-height:430px}
      .calculator-card{width:100%;animation:none}
      .stats-grid,.service-grid,.calculator-grid{grid-template-columns:repeat(2,1fr)}
      .timeline{grid-template-columns:repeat(3,1fr);gap:32px}.timeline:before{display:none}
      .footer-grid{grid-template-columns:repeat(2,1fr)}
    }
    @media(max-width:720px){
      .container{width:min(100% - 28px,1180px)}
      .nav{top:8px}.nav .container{width:min(100% - 24px,1120px)}
      .nav-inner{height:54px;padding:7px 10px;border-radius:14px}
      .brand-logo{min-width:0}.brand-logo img{width:145px}.nav.scrolled .brand-logo img{width:140px}
      .nav-actions .btn{display:none}
      .hero{padding:100px 0 58px}
      .hero-copy{min-height:390px}
      .hero h1{font-size:43px;letter-spacing:-.035em}
      .hero p{font-size:16px}
      .calc-input-grid,.calc-result-grid,.calc-actions{grid-template-columns:1fr}
      .stats{margin-top:0;padding-top:30px}
      .stats-grid,.service-grid,.calculator-grid,.team-grid,.footer-grid{grid-template-columns:1fr}
      .portal-card{grid-template-columns:1fr;padding:30px}
      .timeline{grid-template-columns:1fr}
      section{padding:72px 0}
      .contact-box{padding:18px}.contact-info{padding:26px}
    }

/* V22 FINAL RESPONSIVE + PRODUCTION POLISH */
html{
  scroll-padding-top:92px;
}

img{
  max-width:100%;
}

section{
  position:relative;
}

.nav-inner,
.hero-layout,
.services-story,
.why-showcase,
.mobile-app-coded-section,
.premium-contact-box,
.premium-footer{
  -webkit-font-smoothing:antialiased;
}

@media(max-width:1180px){
  .container{
    width:min(100% - 32px, 1120px);
  }

  .hero-layout{
    grid-template-columns:1fr 390px;
    gap:42px;
  }

  .calculator-card{
    width:390px;
  }

  .coded-callouts{
    display:none;
  }

  .coded-security-strip{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:1024px){
  .nav .container{
    width:min(100% - 28px,1120px);
  }

  .hero-layout{
    grid-template-columns:1fr;
    gap:36px;
    min-height:auto;
  }

  .hero-copy{
    min-height:410px;
  }

  .calculator-card{
    width:100%;
    max-width:560px;
    margin:0 auto;
    animation:none;
  }

  .services-story,
  .why-showcase,
  .app-coded-wrap,
  .contact-head,
  .premium-contact-box{
    grid-template-columns:1fr !important;
  }

  .services-left{
    position:relative !important;
    top:auto !important;
  }

  .sticky-service-card{
    min-height:auto !important;
  }

  .stack-card{
    position:relative !important;
    top:auto !important;
  }

  .why-main-card{
    min-height:auto !important;
  }

  .leadership-grid{
    grid-template-columns:1fr !important;
  }

  .team-head{
    grid-template-columns:1fr !important;
  }

  .mobile-app-coded-section{
    padding:82px 0 !important;
  }

  .app-coded-wrap{
    gap:34px;
  }

  .app-coded-phone-area{
    min-height:660px;
  }

  .coded-feature-grid{
    grid-template-columns:1fr 1fr !important;
  }

  .footer-main{
    grid-template-columns:1fr 1fr !important;
  }
}

@media(max-width:820px){
  .menu{
    display:none !important;
  }

  .hamburger{
    display:block !important;
  }

  .nav-actions .btn{
    display:none !important;
  }

  .nav-inner{
    height:56px !important;
    padding:7px 12px !important;
  }

  .brand-logo img{
    width:150px !important;
  }

  .hero{
    padding-top:102px !important;
  }

  .hero-copy{
    min-height:390px;
  }

  .hero h1{
    font-size:clamp(40px,11vw,56px) !important;
    letter-spacing:-.04em !important;
  }

  .hero p{
    font-size:16px !important;
  }

  .hero-actions{
    gap:10px;
  }

  .hero-actions .btn{
    width:100%;
  }

  .stats-grid{
    grid-template-columns:1fr 1fr !important;
  }

  .service-grid,
  .why-feature-grid,
  .calculator-grid{
    grid-template-columns:1fr !important;
  }

  .journey-timeline{
    grid-template-columns:1fr !important;
  }

  .coded-app-title span{
    white-space:normal !important;
  }

  .coded-feature-grid,
  .coded-app-actions,
  .coded-security-strip,
  .form-row,
  .trust-mini-grid,
  .why-proof-row,
  .sticky-highlight-grid{
    grid-template-columns:1fr !important;
  }

  .phone-premium,
  .coded-phone{
    width:300px !important;
    height:600px !important;
  }

  .app-coded-phone-area{
    min-height:630px !important;
  }

  .green-platform{
    width:340px !important;
  }

  .premium-contact-box{
    padding:16px !important;
    border-radius:28px !important;
  }

  .contact-left-panel,
  .lead-form-card{
    padding:28px !important;
  }

  .footer-main{
    grid-template-columns:1fr !important;
  }

  .footer-cta{
    grid-template-columns:1fr !important;
    min-height:auto !important;
    padding:28px !important;
  }

  .footer-cta .btn{
    width:100%;
    min-width:0 !important;
  }

  .footer-disclaimer{
    grid-template-columns:1fr !important;
  }

  .footer-bottom{
    flex-direction:column;
  }
}

@media(max-width:520px){
  .container{
    width:min(100% - 24px, 1120px);
  }

  section{
    padding:68px 0 !important;
  }

  .hero{
    padding-top:96px !important;
    padding-bottom:54px !important;
  }

  .hero-copy{
    min-height:420px;
  }

  .eyebrow{
    font-size:12px !important;
    padding:8px 12px !important;
  }

  .hero h1{
    font-size:38px !important;
    line-height:1.06 !important;
  }

  .hero p{
    line-height:1.7 !important;
  }

  .calculator-card{
    padding:18px !important;
    border-radius:24px !important;
  }

  .calc-input-grid,
  .calc-result-grid,
  .calc-actions{
    grid-template-columns:1fr !important;
  }

  .stats-grid{
    grid-template-columns:1fr !important;
  }

  .stat-inner,
  .flip-stat{
    min-height:168px !important;
  }

  .sticky-image,
  .why-main-image,
  .trust-image{
    height:250px !important;
  }

  .sticky-content,
  .why-main-content,
  .trust-content{
    padding:26px !important;
  }

  .sticky-content h3,
  .why-main-content h3,
  .trust-content h3{
    font-size:30px !important;
  }

  .stack-card,
  .why-feature,
  .why-point{
    padding:24px !important;
    border-radius:24px !important;
  }

  .coded-app-title{
    font-size:38px !important;
  }

  .app-coded-phone-area{
    min-height:600px !important;
  }

  .coded-phone{
    width:280px !important;
    height:560px !important;
  }

  .green-platform{
    width:300px !important;
  }

  .app-security-row,
  .coded-security-strip{
    border-radius:16px !important;
  }

  .contact-head h2{
    font-size:36px !important;
  }

  .contact-left-panel h3{
    font-size:30px !important;
  }

  .footer-logo-img{
    width:200px !important;
  }
}

/* accessibility + reduced motion */
@media(prefers-reduced-motion:reduce){
  *,
  *:before,
  *:after{
    animation-duration:.01ms !important;
    animation-iteration-count:1 !important;
    scroll-behavior:auto !important;
    transition-duration:.01ms !important;
  }
}

/* consistent focus states */
a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible{
  outline:3px solid rgba(11,164,75,.35);
  outline-offset:3px;
}


/* FOUNDER V25 - PREMIUM FLIP CARDS */
.founder-flip-section{
  background:
    radial-gradient(circle at 12% 18%, rgba(30,74,168,.06), transparent 25%),
    radial-gradient(circle at 88% 78%, rgba(11,164,75,.08), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.founder-flip-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:28px;
  align-items:start;
  perspective:1600px;
}

.flip-founder-card{
  position:relative;
  min-height:610px;
  border-radius:36px;
  perspective:1600px;
  outline:0;
}

.featured-flip{
  transform:translateY(-34px);
}

.flip-founder-inner{
  position:relative;
  width:100%;
  min-height:610px;
  transform-style:preserve-3d;
  transition:transform .9s cubic-bezier(.2,.8,.2,1);
}

.flip-founder-card.is-flipped .flip-founder-inner{
  transform:rotateY(180deg);
}

.flip-founder-card:hover{
  transform:translateY(-8px);
}

.featured-flip:hover{
  transform:translateY(-42px);
}

.flip-face{
  position:absolute;
  inset:0;
  border-radius:36px;
  overflow:hidden;
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
  box-shadow:0 28px 78px rgba(8,36,92,.13);
  border:1px solid rgba(30,74,168,.09);
}

.flip-front{
  background:#fff;
}

.flip-photo{
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 30% 20%, rgba(11,164,75,.14), transparent 30%),
    linear-gradient(135deg,rgba(30,74,168,.08),rgba(11,164,75,.08));
}

.flip-photo img{
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center top;
  filter:grayscale(.22) saturate(.92);
  transform:scale(1.02);
  transition:.65s ease;
}

.flip-founder-card:hover .flip-photo img{
  filter:grayscale(0) saturate(1.05);
  transform:scale(1.08);
}

.flip-front:after{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(to top, rgba(4,14,32,.84) 0%, rgba(4,14,32,.46) 26%, transparent 58%);
}

.flip-front-info{
  position:absolute;
  z-index:3;
  left:22px;
  right:22px;
  bottom:22px;
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:16px;
  padding:22px;
  border-radius:26px;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.18);
  backdrop-filter:blur(18px);
  color:#fff;
}

.flip-front-info h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:29px;
  letter-spacing:-.045em;
  margin-bottom:6px;
}

.flip-front-info span{
  color:rgba(255,255,255,.72);
  font-size:13px;
  font-weight:800;
}

.flip-linkedin{
  width:44px;
  height:44px;
  border-radius:15px;
  display:grid;
  place-items:center;
  color:#061833;
  background:#9effc3;
  flex-shrink:0;
  transition:.28s ease;
}

.flip-linkedin:hover{
  transform:translateY(-3px);
  background:#fff;
}

.flip-back{
  transform:rotateY(180deg);
  padding:34px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  color:#fff;
  background:
    radial-gradient(circle at 20% 20%, rgba(11,164,75,.20), transparent 30%),
    radial-gradient(circle at 85% 80%, rgba(247,148,29,.12), transparent 32%),
    linear-gradient(135deg,#061833,#08245c);
}

.flip-back:before{
  content:"";
  position:absolute;
  right:-80px;
  bottom:-90px;
  width:240px;
  height:240px;
  border-radius:50%;
  background:rgba(255,255,255,.07);
}

.flip-back-tag{
  position:relative;
  display:inline-flex;
  width:max-content;
  padding:9px 14px;
  border-radius:999px;
  background:rgba(11,164,75,.18);
  color:#9effc3;
  font-size:12px;
  font-weight:900;
  margin-bottom:24px;
}

.flip-back h3{
  position:relative;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:40px;
  letter-spacing:-.05em;
  margin-bottom:16px;
}

.flip-back p{
  position:relative;
  color:rgba(255,255,255,.74);
  line-height:1.85;
  font-size:15px;
  margin-bottom:26px;
}

.flip-chips{
  position:relative;
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin-bottom:32px;
}

.flip-chips span{
  padding:10px 13px;
  border-radius:999px;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.12);
  color:#fff;
  font-size:12px;
  font-weight:900;
}

.flip-cta{
  position:relative;
  display:inline-flex;
  align-items:center;
  gap:8px;
  color:#9effc3;
  font-weight:900;
  width:max-content;
}

.flip-cta i{
  transition:.25s ease;
}

.flip-cta:hover i{
  transform:translateX(5px);
}

@media(max-width:1024px){
  .founder-flip-grid{
    grid-template-columns:1fr;
  }
  .featured-flip{
    transform:none;
  }
  .flip-founder-card,
  .flip-founder-inner{
    min-height:620px;
  }
}

@media(max-width:520px){
  .flip-founder-card,
  .flip-founder-inner{
    min-height:560px;
  }
  .flip-front-info{
    left:16px;
    right:16px;
    bottom:16px;
    padding:18px;
  }
  .flip-front-info h3{
    font-size:24px;
  }
  .flip-back{
    padding:26px;
  }
  .flip-back h3{
    font-size:32px;
  }
}



/* FOUNDER V25.1 - UX FIX: CLICK TO FLIP */
.flip-front-info{
  align-items:flex-end;
}

.flip-actions-front{
  display:flex;
  flex-direction:column;
  align-items:flex-end;
  gap:10px;
  flex-shrink:0;
}

.know-more-btn{
  border:0;
  outline:0;
  display:inline-flex;
  align-items:center;
  gap:7px;
  padding:10px 13px;
  border-radius:999px;
  background:rgba(255,255,255,.14);
  color:#fff;
  border:1px solid rgba(255,255,255,.20);
  font-weight:900;
  font-size:12px;
  cursor:pointer;
  transition:.25s ease;
  white-space:nowrap;
}

.know-more-btn:hover{
  background:#fff;
  color:var(--brand-blue);
  transform:translateY(-2px);
}

.know-more-btn i{
  font-size:11px;
}

.flip-back-actions{
  position:relative;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px;
  flex-wrap:wrap;
}

.flip-back-btn{
  border:0;
  outline:0;
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.10);
  border:1px solid rgba(255,255,255,.14);
  color:#fff;
  font-weight:900;
  cursor:pointer;
  transition:.25s ease;
}

.flip-back-btn:hover{
  background:#fff;
  color:var(--brand-blue);
  transform:translateY(-2px);
}

@media(max-width:520px){
  .flip-front-info{
    align-items:flex-start;
    flex-direction:column;
  }
  .flip-actions-front{
    flex-direction:row;
    align-items:center;
  }
}


/* V25.2 - FLIP STATE FIX */
.flip-face{
  pointer-events:auto;
}

.flip-founder-card.is-flipped .flip-front{
  pointer-events:none;
}

.flip-founder-card.is-flipped .flip-back{
  pointer-events:auto;
}

.flip-back{
  z-index:2;
}

.flip-front{
  z-index:3;
}
.flip-face{
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

/* V26 - FINAL CTA POLISH */
/* V27 - PREMIUM CLIENT TESTIMONIALS */
.testimonials-premium{
  background:
    radial-gradient(circle at 12% 20%, rgba(30,74,168,.06), transparent 25%),
    radial-gradient(circle at 88% 74%, rgba(11,164,75,.07), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.testimonial-head{
  display:grid;
  grid-template-columns:1fr .9fr;
  gap:44px;
  align-items:end;
  margin-bottom:46px;
}

.testimonial-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(36px,4.4vw,56px);
  line-height:1.05;
  letter-spacing:-.055em;
  color:var(--navy);
}

.testimonial-head p{
  color:var(--muted);
  font-size:17px;
  line-height:1.85;
}

.testimonial-slider{
  overflow:hidden;
  border-radius:34px;
  padding:8px;
}

.testimonial-track{
  display:flex;
  gap:22px;
  transition:transform .7s cubic-bezier(.2,.8,.2,1);
}

.testimonial-card{
  min-width:calc((100% - 44px) / 3);
  padding:34px;
  border-radius:30px;
  background:rgba(255,255,255,.94);
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 18px 54px rgba(8,36,92,.09);
  transition:.35s ease;
}

.testimonial-card:hover{
  transform:translateY(-8px);
  box-shadow:0 28px 76px rgba(8,36,92,.14);
}

.stars{
  color:#f7b731;
  letter-spacing:2px;
  font-size:15px;
  margin-bottom:22px;
}

.testimonial-card p{
  color:#334155;
  line-height:1.9;
  font-size:16px;
  margin-bottom:30px;
}

.client-row{
  display:flex;
  align-items:center;
  gap:15px;
}

.client-avatar{
  width:54px;
  height:54px;
  border-radius:18px;
  display:grid;
  place-items:center;
  color:#fff;
  font-weight:900;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 14px 28px rgba(11,164,75,.20);
}

.client-row strong{
  display:block;
  color:var(--navy);
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:17px;
}

.client-row span{
  display:block;
  color:#64748b;
  font-size:13px;
  font-weight:700;
  margin-top:4px;
}

.testimonial-dots{
  display:flex;
  justify-content:center;
  gap:10px;
  margin-top:26px;
}

.testimonial-dot{
  border:0;
  width:9px;
  height:9px;
  border-radius:999px;
  background:rgba(30,74,168,.22);
  cursor:pointer;
  transition:.3s ease;
}

.testimonial-dot.active{
  width:32px;
  background:linear-gradient(90deg,var(--brand-blue),var(--green));
}

@media(max-width:1024px){
  .testimonial-head{
    grid-template-columns:1fr;
  }
  .testimonial-card{
    min-width:calc((100% - 22px) / 2);
  }
}

@media(max-width:720px){
  .testimonial-card{
    min-width:100%;
  }
}


/* V27.1 - TESTIMONIAL ARROW NAVIGATION */
.testimonial-slider-wrap{
  position:relative;
}

.testimonial-nav{
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  z-index:5;
  width:48px;
  height:48px;
  border-radius:50%;
  border:1px solid rgba(30,74,168,.12);
  background:rgba(255,255,255,.92);
  color:var(--brand-blue);
  display:grid;
  place-items:center;
  cursor:pointer;
  box-shadow:0 16px 38px rgba(8,36,92,.12);
  transition:.28s ease;
}

.testimonial-nav:hover{
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  color:#fff;
  transform:translateY(-50%) scale(1.06);
  box-shadow:0 20px 48px rgba(11,164,75,.22);
}

.testimonial-prev{
  left:-18px;
}

.testimonial-next{
  right:-18px;
}

.testimonial-slider{
  overflow:hidden;
  border-radius:34px;
  padding:8px;
}

@media(max-width:720px){
  .testimonial-prev{
    left:6px;
  }

  .testimonial-next{
    right:6px;
  }

  .testimonial-nav{
    width:42px;
    height:42px;
  }
}


/* V28 - PREMIUM FAQ SECTION */
.faq-premium{
  background:
    radial-gradient(circle at 12% 20%, rgba(30,74,168,.05), transparent 24%),
    radial-gradient(circle at 88% 72%, rgba(11,164,75,.07), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff);
}

.faq-head{
  display:grid;
  grid-template-columns:1fr .9fr;
  gap:42px;
  align-items:end;
  margin-bottom:50px;
}

.faq-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(36px,4.5vw,56px);
  line-height:1.05;
  letter-spacing:-.055em;
  color:var(--navy);
}

.faq-head p{
  color:var(--muted);
  font-size:17px;
  line-height:1.85;
}

.faq-layout{
  display:grid;
  grid-template-columns:.95fr 1.2fr;
  gap:28px;
}

.faq-left{
  padding:36px;
  border-radius:34px;
  background:linear-gradient(135deg,var(--deep-blue),var(--navy));
  color:#fff;
  box-shadow:0 28px 74px rgba(8,36,92,.16);
}

.faq-badge{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.08);
  color:#9effc3;
  font-weight:900;
  margin-bottom:22px;
}

.faq-left h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  line-height:1.05;
  letter-spacing:-.045em;
  margin-bottom:16px;
}

.faq-left p{
  color:rgba(255,255,255,.75);
  line-height:1.85;
  margin-bottom:28px;
}

.faq-mini-points{
  display:grid;
  gap:14px;
  margin-bottom:34px;
}

.faq-mini-points div{
  display:flex;
  align-items:center;
  gap:12px;
  color:#d6e4ff;
}

.faq-mini-points i{
  color:#9effc3;
}

.faq-cta{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:14px 18px;
  border-radius:999px;
  background:#fff;
  color:var(--brand-blue);
  font-weight:900;
}

.faq-accordion{
  display:grid;
  gap:16px;
}

.faq-item{
  border-radius:28px;
  overflow:hidden;
  background:#fff;
  border:1px solid rgba(30,74,168,.08);
  box-shadow:0 16px 46px rgba(8,36,92,.08);
  transition:.28s ease;
}

.faq-item:hover{
  transform:translateY(-4px);
}

.faq-question{
  width:100%;
  border:0;
  background:none;
  padding:26px 28px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:20px;
  cursor:pointer;
  font-weight:900;
  font-size:18px;
  color:var(--navy);
}

.faq-question i{
  width:34px;
  height:34px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(11,164,75,.08);
  color:var(--green);
  transition:.28s ease;
}

.faq-answer{
  max-height:0;
  overflow:hidden;
  padding:0 28px;
  color:#64748b;
  line-height:1.9;
  transition:max-height .38s ease,padding .3s ease;
}

.faq-item.active .faq-answer{
  max-height:180px;
  padding:0 28px 28px;
}

.faq-item.active .faq-question i{
  transform:rotate(45deg);
}

@media(max-width:1024px){
  .faq-head,
  .faq-layout{
    grid-template-columns:1fr;
  }
}

@media(max-width:720px){
  .faq-left{
    padding:28px;
  }
  .faq-left h3{
    font-size:34px;
  }
  .faq-question{
    font-size:16px;
    padding:22px;
  }
}


/* V26 - FINAL CTA POLISH */
.scroll-progress{
  position:fixed;
  top:0;
  left:0;
  width:0%;
  height:4px;
  z-index:10000;
  background:linear-gradient(90deg,var(--brand-blue),var(--green),var(--orange));
  box-shadow:0 0 18px rgba(11,164,75,.36);
}

.floating-whatsapp{
  position:fixed;
  right:22px;
  bottom:24px;
  z-index:999;
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:14px 18px;
  border-radius:999px;
  color:#fff;
  background:linear-gradient(135deg,#12b857,#07883d);
  box-shadow:0 18px 42px rgba(11,164,75,.34);
  font-weight:900;
  transition:.3s ease;
}
.floating-whatsapp:before{
  content:"";
  position:absolute;
  inset:-7px;
  border-radius:999px;
  background:rgba(11,164,75,.22);
  z-index:-1;
  animation:whatsappPulse 2.2s ease-in-out infinite;
}
.floating-whatsapp i{font-size:22px}
.floating-whatsapp:hover{
  transform:translateY(-5px);
  color:#fff;
}
@keyframes whatsappPulse{
  0%,100%{transform:scale(.92);opacity:.45}
  50%{transform:scale(1.08);opacity:.82}
}
@media(max-width:720px){
  .floating-whatsapp{
    right:14px;
    bottom:16px;
    padding:13px 15px;
  }
  .floating-whatsapp span{display:none}
}


/* V29 - PREMIUM CONTACT FORM UPGRADE */
.contact-v29-box{
  display:grid;
  grid-template-columns:.86fr 1.14fr;
  gap:28px;
  padding:24px;
  border-radius:40px;
  background:#fff;
  border:1px solid rgba(30,74,168,.09);
  box-shadow:0 32px 100px rgba(8,36,92,.13);
}

.contact-v29-left{
  position:relative;
  overflow:hidden;
  border-radius:32px;
  padding:42px;
  background:
    radial-gradient(circle at 20% 20%, rgba(11,164,75,.22), transparent 30%),
    linear-gradient(135deg,var(--deep-blue),var(--navy));
  color:#fff;
}

.contact-v29-left:after{
  content:"";
  position:absolute;
  right:-90px;
  bottom:-100px;
  width:260px;
  height:260px;
  border-radius:50%;
  background:rgba(255,255,255,.07);
}

.contact-v29-left h3{
  position:relative;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  line-height:1.08;
  letter-spacing:-.05em;
  margin-bottom:20px;
}

.contact-v29-left p{
  position:relative;
  color:rgba(255,255,255,.76);
  line-height:1.85;
  margin-bottom:28px;
}

.contact-trust-strip{
  position:relative;
  display:grid;
  gap:13px;
  margin-bottom:28px;
}

.contact-trust-strip div{
  display:flex;
  gap:11px;
  align-items:center;
  font-weight:800;
  color:#e7f2ff;
}

.contact-trust-strip i{
  color:#9effc3;
}

.advisor-card{
  position:relative;
  display:grid;
  grid-template-columns:54px 1fr 48px;
  align-items:center;
  gap:16px;
  padding:18px;
  border-radius:24px;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.12);
  margin-bottom:16px;
}

.advisor-icon,
.advisor-arrow{
  width:48px;
  height:48px;
  border-radius:16px;
  display:grid;
  place-items:center;
}

.advisor-icon{
  background:#9effc3;
  color:var(--navy);
}

.advisor-arrow{
  color:#fff;
  background:linear-gradient(135deg,#12b857,#07883d);
}

.advisor-card span{
  display:block;
  color:rgba(255,255,255,.64);
  font-size:13px;
}

.advisor-card strong{
  display:block;
  color:#fff;
  margin-top:4px;
}

.compact-methods{
  position:relative;
}

.contact-v29-form-card{
  padding:34px;
  border-radius:32px;
  background:linear-gradient(180deg,#ffffff,#f8fbff);
  border:1px solid rgba(30,74,168,.08);
}

.field-title{
  display:block;
  color:#334155;
  font-weight:900;
  font-size:13px;
  margin-bottom:12px;
}

.service-picker{
  margin-bottom:8px;
}

.service-chip-grid{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
}

.service-chip{
  border:1px solid rgba(30,74,168,.12);
  background:#fff;
  color:#334155;
  padding:10px 14px;
  border-radius:999px;
  font-weight:900;
  font-size:13px;
  cursor:pointer;
  transition:.25s ease;
}

.service-chip:hover{
  transform:translateY(-2px);
  border-color:rgba(11,164,75,.30);
}

.service-chip.active{
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  border-color:transparent;
  box-shadow:0 12px 26px rgba(11,164,75,.18);
}

.floating-field{
  position:relative;
  display:block;
}

.floating-field input,
.floating-field textarea{
  width:100%;
  border:1px solid rgba(30,74,168,.12);
  border-radius:18px;
  padding:22px 18px 12px;
  font:inherit;
  outline:none;
  background:#fff;
  transition:.25s ease;
}

.floating-field textarea{
  min-height:132px;
  resize:vertical;
}

.floating-field span{
  position:absolute;
  left:18px;
  top:17px;
  color:#64748b;
  font-weight:800;
  font-size:14px;
  pointer-events:none;
  transition:.2s ease;
}

.floating-field input:focus,
.floating-field textarea:focus{
  border-color:var(--green);
  box-shadow:0 0 0 4px rgba(11,164,75,.09);
}

.floating-field input:focus + span,
.floating-field input:not(:placeholder-shown) + span,
.floating-field textarea:focus + span,
.floating-field textarea:not(:placeholder-shown) + span{
  top:7px;
  font-size:11px;
  color:var(--green);
}

.form-success{
  display:none;
  margin-top:16px;
  padding:18px;
  border-radius:20px;
  background:rgba(11,164,75,.09);
  border:1px solid rgba(11,164,75,.18);
  color:var(--green);
  text-align:center;
}

.form-success.show{
  display:block;
  animation:successPop .35s ease both;
}

.form-success i{
  display:block;
  font-size:28px;
  margin-bottom:8px;
}

.form-success strong,
.form-success span{
  display:block;
}

.form-success span{
  color:#426358;
  margin-top:4px;
  font-size:13px;
}

@keyframes successPop{
  0%{transform:scale(.96);opacity:0}
  100%{transform:scale(1);opacity:1}
}

@media(max-width:1024px){
  .contact-v29-box{
    grid-template-columns:1fr;
  }
}

@media(max-width:720px){
  .contact-v29-box{
    padding:16px;
    border-radius:28px;
  }
  .contact-v29-left,
  .contact-v29-form-card{
    padding:26px;
  }
  .contact-v29-left h3{
    font-size:32px;
  }
  .service-chip-grid{
    gap:8px;
  }
  .service-chip{
    font-size:12px;
    padding:9px 12px;
  }
}


.luxury-loader{
 position:fixed; inset:0; background:#fff; z-index:99999;
 display:grid; place-items:center; transition:opacity .45s ease, visibility .45s ease;
}
.luxury-loader.hide{opacity:0; visibility:hidden}
.luxury-loader-inner{text-align:center}
.luxury-loader img{width:220px; margin-bottom:14px}
.luxury-loader h3{font-family:Inter,sans-serif;color:#0b2b5b;font-size:16px;margin-bottom:18px}
.loader-line{width:180px;height:4px;background:#eef3f8;border-radius:999px;overflow:hidden}
.loader-line span{display:block;height:100%;width:100%;background:linear-gradient(90deg,#1e4aa8,#0ba44b);transform-origin:left;animation:loadbar 1.3s ease forwards}
@keyframes loadbar{from{transform:scaleX(0)}to{transform:scaleX(1)}}

/* V30 LUXURY POLISH */
:root{
  --luxury-ease:cubic-bezier(.22,.61,.36,1);
}
.reveal{
  transition:all .9s var(--luxury-ease)!important;
}
.reveal-card{
  transition:transform .45s var(--luxury-ease), box-shadow .45s var(--luxury-ease)!important;
}
.btn,.service-chip,.testimonial-card,.flip-founder-card,.faq-item{
  transition:all .35s var(--luxury-ease)!important;
}
.btn:hover{
  transform:translateY(-2px);
}
.section-kicker{
  letter-spacing:.12em!important;
}
.scroll-progress{
  height:3px!important;
}
.counter-number{
  font-variant-numeric:tabular-nums;
}
body{
  text-rendering:optimizeLegibility;
}


/* V31 HOW WE WORK */
.how-we-work-v31{
 background:linear-gradient(180deg,#fff,#f7fbff);
}
.how-head{
 display:grid;grid-template-columns:1fr .9fr;gap:42px;align-items:end;margin-bottom:50px;
}
.how-head h2{
 font-family:"Plus Jakarta Sans",Inter,sans-serif;
 font-size:clamp(36px,4.5vw,56px);
 line-height:1.05;letter-spacing:-.05em;color:var(--navy);
}
.how-head p{color:var(--muted);line-height:1.85;font-size:17px}
.journey-line{
 position:relative;
 display:grid;
 grid-template-columns:repeat(4,1fr);
 gap:20px;
}
.journey-line:before{
 content:"";position:absolute;left:10%;right:10%;top:58px;height:2px;
 background:linear-gradient(90deg,var(--brand-blue),var(--green));opacity:.18;
}
.journey-step{
 position:relative;
 padding:34px 28px;
 border-radius:32px;
 background:rgba(255,255,255,.9);
 border:1px solid rgba(30,74,168,.08);
 box-shadow:0 18px 54px rgba(8,36,92,.08);
 transition:all .35s ease;
 text-align:center;
}
.journey-step:hover,.journey-step.active{
 transform:translateY(-8px);
 box-shadow:0 28px 70px rgba(8,36,92,.14);
 border-color:rgba(11,164,75,.18);
}
.journey-icon{
 width:88px;height:88px;border-radius:28px;
 display:grid;place-items:center;
 margin:0 auto 22px;
 color:#fff;font-size:30px;
 background:linear-gradient(135deg,var(--brand-blue),var(--green));
 box-shadow:0 16px 42px rgba(11,164,75,.24);
 position:relative;z-index:2;
}
.journey-step h3{
 font-family:"Plus Jakarta Sans",Inter,sans-serif;
 font-size:24px;color:var(--navy);margin-bottom:12px;
}
.journey-step p{color:#64748b;line-height:1.8}
@media(max-width:1024px){
 .how-head,.journey-line{grid-template-columns:1fr 1fr}
 .journey-line:before{display:none}
}
@media(max-width:720px){
 .how-head,.journey-line{grid-template-columns:1fr}
 .journey-step{padding:28px}
}


/* V32 - CLEAN HOW WAY2GRO WORKS */
.how-we-work-v32{
  background:linear-gradient(180deg,#fff,#f7fbff);
}

.how32-head{
  display:grid;
  grid-template-columns:1fr .9fr;
  gap:42px;
  align-items:end;
  margin-bottom:54px;
}

.how32-head h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(36px,4vw,56px);
  line-height:1.06;
  letter-spacing:-.05em;
  color:var(--navy);
}

.how32-head p{
  color:#64748b;
  line-height:1.85;
  font-size:17px;
}

.how32-flow{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:18px;
}

.how32-step{
  flex:1;
  min-height:320px;
  padding:34px 26px;
  border-radius:34px;
  background:#fff;
  text-align:center;
  border:1px solid rgba(30,74,168,.08);
  box-shadow:0 18px 54px rgba(8,36,92,.08);
  transition:.35s ease;
}

.how32-step:hover,
.how32-step.active{
  transform:translateY(-8px);
  box-shadow:0 30px 80px rgba(8,36,92,.14);
}

.how32-icon{
  width:90px;
  height:90px;
  border-radius:28px;
  display:grid;
  place-items:center;
  margin:0 auto 22px;
  font-size:32px;
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 18px 44px rgba(11,164,75,.24);
}

.how32-step h3{
  font-size:24px;
  color:var(--navy);
  margin-bottom:12px;
}

.how32-step p{
  color:#64748b;
  line-height:1.8;
}

.how32-connector{
  width:80px;
  height:4px;
  border-radius:999px;
  background:linear-gradient(90deg,var(--brand-blue),var(--green));
  opacity:.2;
}

@media(max-width:1024px){
  .how32-head{
    grid-template-columns:1fr;
  }

  .how32-flow{
    flex-direction:column;
  }

  .how32-connector{
    width:4px;
    height:48px;
  }

  .how32-step{
    width:100%;
    min-height:auto;
  }
}


/* V33.1 - BIG TITLE BRAND EMPHASIS */
.hero-highlight{
  color:var(--green);
  position:relative;
  display:inline-block;
}

.hero-highlight::after{
  content:"";
  position:absolute;
  left:0;
  right:0;
  bottom:.08em;
  height:.22em;
  background:rgba(11,164,75,.10);
  border-radius:999px;
  z-index:-1;
}


/* V34 - ANIMATED HOW WE WORK JOURNEY */
.how32-flow{
  position:relative;
}

.how32-flow::before{
  content:"";
  position:absolute;
  left:10%;
  right:10%;
  top:50%;
  height:3px;
  transform:translateY(-50%);
  background:rgba(30,74,168,.10);
  border-radius:999px;
  z-index:0;
}

.how32-flow::after{
  content:"";
  position:absolute;
  left:10%;
  top:50%;
  height:3px;
  width:0%;
  transform:translateY(-50%);
  background:linear-gradient(90deg,var(--brand-blue),var(--green),var(--orange));
  border-radius:999px;
  z-index:1;
  box-shadow:0 0 18px rgba(11,164,75,.24);
  transition:width 1.8s cubic-bezier(.22,.61,.36,1);
}

.how32-flow.is-running::after{
  width:80%;
}

.how32-step{
  position:relative;
  z-index:3;
  opacity:.78;
  transform:translateY(12px);
  transition:all .55s cubic-bezier(.22,.61,.36,1);
}

.how32-step.step-active{
  opacity:1;
  transform:translateY(-10px);
  border-color:rgba(11,164,75,.28);
  box-shadow:0 30px 86px rgba(8,36,92,.16);
}

.how32-stage{
  position:absolute;
  top:20px;
  left:22px;
  color:rgba(30,74,168,.18);
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:42px;
  font-weight:900;
  letter-spacing:-.07em;
  line-height:1;
  transition:.35s ease;
}

.how32-step.step-active .how32-stage{
  color:rgba(11,164,75,.20);
  transform:scale(1.05);
}

.how32-step.step-active .how32-icon{
  animation:howPulse 1.65s ease-in-out infinite;
  box-shadow:0 22px 52px rgba(11,164,75,.34);
}

.how32-connector{
  position:relative;
  z-index:2;
  opacity:.20;
  transition:.45s ease;
}

.how32-connector.connector-active{
  opacity:1;
  box-shadow:0 0 16px rgba(11,164,75,.24);
}

@keyframes howPulse{
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.06)}
}

@media(max-width:1024px){
  .how32-flow::before,
  .how32-flow::after{
    display:none;
  }

  .how32-step{
    transform:none;
  }

  .how32-step.step-active{
    transform:translateY(-6px);
  }

  .how32-stage{
    font-size:34px;
  }
}



/* V36 - Premium Services Mega Menu */
.nav-mega{
  position:relative;
  display:flex;
  align-items:center;
}

.mega-trigger{
  display:inline-flex;
  align-items:center;
  gap:7px;
}

.mega-trigger i{
  font-size:11px;
  transition:.25s ease;
}

.nav-mega:hover .mega-trigger i{
  transform:rotate(180deg);
}

.mega-panel{
  position:absolute;
  top:calc(100% + 22px);
  left:50%;
  transform:translateX(-50%) translateY(12px);
  width:760px;
  padding:18px;
  border-radius:28px;
  background:rgba(255,255,255,.96);
  border:1px solid rgba(30,74,168,.10);
  box-shadow:0 28px 90px rgba(8,36,92,.18);
  backdrop-filter:blur(18px);
  opacity:0;
  visibility:hidden;
  pointer-events:none;
  transition:.28s ease;
  z-index:999;
}

.nav-mega:hover .mega-panel{
  opacity:1;
  visibility:visible;
  pointer-events:auto;
  transform:translateX(-50%) translateY(0);
}

.mega-panel:before{
  content:"";
  position:absolute;
  top:-10px;
  left:50%;
  width:20px;
  height:20px;
  transform:translateX(-50%) rotate(45deg);
  background:rgba(255,255,255,.96);
  border-left:1px solid rgba(30,74,168,.08);
  border-top:1px solid rgba(30,74,168,.08);
}

.mega-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:12px;
}

.mega-item{
  display:grid!important;
  grid-template-columns:54px 1fr;
  gap:14px;
  align-items:center;
  padding:16px;
  border-radius:20px;
  color:var(--navy)!important;
  background:transparent;
  transition:.25s ease;
  text-align:left;
}

.mega-item:hover{
  background:linear-gradient(180deg,#f8fbff,#eef6ff);
  transform:translateY(-3px);
}

.mega-icon{
  width:54px;
  height:54px;
  border-radius:17px;
  display:grid;
  place-items:center;
  color:#fff;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  box-shadow:0 14px 28px rgba(11,164,75,.18);
}

.mega-item h4{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:16px;
  color:var(--navy);
  margin-bottom:5px;
}

.mega-item p{
  color:#64748b;
  font-size:13px;
  font-weight:700;
  line-height:1.45;
}

@media(max-width:820px){
  .nav-mega{
    display:none;
  }
}


/* V37 - Service Page Template */
.service-page-hero{padding:150px 0 90px;background:radial-gradient(circle at 12% 20%,rgba(30,74,168,.08),transparent 25%),radial-gradient(circle at 88% 78%,rgba(11,164,75,.09),transparent 28%),linear-gradient(180deg,#ffffff,#f7fbff)}
.service-page-grid{display:grid;grid-template-columns:1fr .82fr;gap:54px;align-items:center}
.breadcrumb{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(30,74,168,.06);color:#64748b;font-size:13px;font-weight:800;margin-bottom:20px}
.service-page-copy h1{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:clamp(44px,5.2vw,72px);line-height:1.02;letter-spacing:-.06em;color:var(--navy);margin:22px 0}
.service-page-copy p{color:#64748b;font-size:18px;line-height:1.85;max-width:660px;margin-bottom:34px}
.service-page-actions{display:flex;gap:14px;flex-wrap:wrap}
.service-page-card{border-radius:38px;padding:34px;background:linear-gradient(135deg,var(--deep-blue),var(--navy));color:#fff;box-shadow:0 32px 100px rgba(8,36,92,.22);overflow:hidden;position:relative}
.service-page-card:after{content:"";position:absolute;right:-80px;top:-90px;width:260px;height:260px;border-radius:50%;background:rgba(11,164,75,.16)}
.service-card-top span{display:block;color:#9effc3;font-weight:900;margin-bottom:8px}
.service-card-top strong{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:34px;letter-spacing:-.05em}
.service-growth-visual{height:240px;margin:42px 0;display:flex;align-items:end;gap:18px}
.growth-bar{flex:1;border-radius:18px 18px 0 0;background:linear-gradient(180deg,#9effc3,var(--green));animation:growBar 1.4s ease both}
.bar-1{height:32%}.bar-2{height:52%;animation-delay:.1s}.bar-3{height:72%;animation-delay:.2s}.bar-4{height:92%;animation-delay:.3s}
@keyframes growBar{from{transform:scaleY(.2);opacity:.3;transform-origin:bottom}to{transform:scaleY(1);opacity:1;transform-origin:bottom}}
.service-mini-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.service-mini-stats div{padding:20px;border-radius:22px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.10)}
.service-mini-stats strong,.service-mini-stats span{display:block}.service-mini-stats strong{font-size:22px;margin-bottom:6px}.service-mini-stats span{color:rgba(255,255,255,.68);font-size:13px}
.service-benefits,.service-solutions{background:linear-gradient(180deg,#fff,#f7fbff)}
.service-benefit-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}
.service-benefit-card{padding:30px;border-radius:28px;background:#fff;border:1px solid rgba(30,74,168,.09);box-shadow:0 18px 52px rgba(8,36,92,.08);transition:.35s ease}
.service-benefit-card:hover{transform:translateY(-8px);box-shadow:0 28px 76px rgba(8,36,92,.14)}
.service-benefit-card i{width:62px;height:62px;border-radius:20px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--brand-blue),var(--green));margin-bottom:24px}
.service-benefit-card h3{color:var(--navy);font-size:22px;margin-bottom:12px}.service-benefit-card p{color:#64748b;line-height:1.75}
.service-split{display:grid;grid-template-columns:.82fr 1.18fr;gap:42px;align-items:start}
.service-split-left h2{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:clamp(36px,4.5vw,56px);line-height:1.05;letter-spacing:-.055em;color:var(--navy);margin:18px 0}
.service-split-left p{color:#64748b;line-height:1.85;font-size:17px}
.solution-list{display:grid;gap:16px}
.solution-row{display:grid;grid-template-columns:70px 1fr;gap:18px;padding:26px;border-radius:28px;background:#fff;border:1px solid rgba(30,74,168,.08);box-shadow:0 16px 44px rgba(8,36,92,.08)}
.solution-row span{width:54px;height:54px;border-radius:18px;display:grid;place-items:center;color:#fff;font-weight:900;background:linear-gradient(135deg,var(--brand-blue),var(--green))}
.solution-row h3{color:var(--navy);margin-bottom:8px}.solution-row p{color:#64748b;line-height:1.7}
.service-cta{background:#f7fbff}.service-cta-box{display:flex;justify-content:space-between;align-items:center;gap:28px;padding:42px;border-radius:34px;color:#fff;background:linear-gradient(135deg,var(--deep-blue),var(--navy));box-shadow:0 28px 84px rgba(8,36,92,.20)}
.service-cta-box span{color:#9effc3;font-weight:900;text-transform:uppercase;letter-spacing:.12em;font-size:12px}.service-cta-box h2{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:clamp(30px,3.8vw,46px);letter-spacing:-.045em;margin:10px 0}.service-cta-box p{color:rgba(255,255,255,.72)}
.service-footer{padding:26px 0!important}.service-footer a{color:var(--brand-blue);font-weight:900}
@media(max-width:1024px){.service-page-grid,.service-split{grid-template-columns:1fr}.service-benefit-grid{grid-template-columns:1fr 1fr}.service-cta-box{flex-direction:column;align-items:flex-start}}
@media(max-width:720px){.service-page-hero{padding:120px 0 70px}.service-benefit-grid,.service-mini-stats{grid-template-columns:1fr}.solution-row{grid-template-columns:1fr}}


/* V38 - Mutual Funds Premium Polish */
.mf-hero{padding:150px 0 90px;background:radial-gradient(circle at 10% 18%,rgba(30,74,168,.08),transparent 25%),radial-gradient(circle at 86% 78%,rgba(11,164,75,.10),transparent 28%),linear-gradient(180deg,#fff,#f7fbff)}
.mf-hero-grid{display:grid;grid-template-columns:1fr .85fr;gap:58px;align-items:center}
.mf-hero-copy h1{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:clamp(44px,5.4vw,74px);line-height:1.02;letter-spacing:-.06em;color:var(--navy);margin:22px 0}
.mf-hero-copy p{font-size:18px;line-height:1.85;color:#64748b;max-width:680px;margin-bottom:34px}
.mf-hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:28px}
.mf-trust-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:650px}
.mf-trust-row div{padding:16px;border-radius:18px;background:#fff;border:1px solid rgba(30,74,168,.08);box-shadow:0 12px 32px rgba(8,36,92,.06)}
.mf-trust-row strong{display:block;color:var(--brand-blue);font-size:20px}.mf-trust-row span{display:block;color:#64748b;font-size:12px;font-weight:800;margin-top:4px}
.mf-growth-card{padding:34px;border-radius:40px;background:linear-gradient(135deg,var(--deep-blue),var(--navy));color:#fff;box-shadow:0 34px 100px rgba(8,36,92,.24);overflow:hidden;position:relative}
.mf-card-head span{display:block;color:#9effc3;font-weight:900;margin-bottom:8px}.mf-card-head strong{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:32px;letter-spacing:-.045em}
.mf-chart{height:280px;margin:38px 0;position:relative;border-radius:28px;background:rgba(255,255,255,.06);overflow:hidden}
.mf-line{position:absolute;left:26px;right:26px;bottom:52px;height:160px;background:linear-gradient(180deg,rgba(11,164,75,.20),transparent),linear-gradient(90deg,#9effc3,#f7b347);clip-path:polygon(0 88%,20% 76%,38% 66%,55% 45%,72% 52%,88% 24%,100% 10%,100% 100%,0 100%);animation:chartPulse 4s ease-in-out infinite}
.mf-dot{position:absolute;width:14px;height:14px;border-radius:50%;background:#9effc3;box-shadow:0 0 22px rgba(158,255,195,.55)}.dot-1{left:28%;bottom:112px}.dot-2{left:56%;bottom:150px}.dot-3{right:12%;bottom:215px}
.mf-card-bottom{display:grid;grid-template-columns:1fr 1fr;gap:14px}.mf-card-bottom div{padding:18px;border-radius:20px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.10)}.mf-card-bottom span{display:block;color:rgba(255,255,255,.65);font-size:13px}.mf-card-bottom strong{display:block;margin-top:5px}
.mf-benefits,.mf-journey,.mf-options,.mf-testimonials{background:linear-gradient(180deg,#fff,#f7fbff)}
.mf-benefit-grid,.mf-testimonial-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}.mf-testimonial-grid{grid-template-columns:repeat(3,1fr)}
.mf-benefit-card{padding:30px;border-radius:28px;background:#fff;border:1px solid rgba(30,74,168,.09);box-shadow:0 18px 52px rgba(8,36,92,.08);transition:.35s ease}.mf-benefit-card:hover{transform:translateY(-8px);box-shadow:0 28px 76px rgba(8,36,92,.14)}
.mf-benefit-card i{width:62px;height:62px;border-radius:20px;display:grid;place-items:center;color:#fff;background:linear-gradient(135deg,var(--brand-blue),var(--green));margin-bottom:24px}
.mf-benefit-card h3{color:var(--navy);font-size:22px;margin-bottom:12px}.mf-benefit-card p{color:#64748b;line-height:1.75}
.mf-journey-box{padding:42px;border-radius:38px;background:linear-gradient(135deg,var(--deep-blue),var(--navy));color:#fff;box-shadow:0 28px 84px rgba(8,36,92,.20)}
.mf-journey-box h2{font-family:"Plus Jakarta Sans",Inter,sans-serif;font-size:clamp(32px,4vw,50px);letter-spacing:-.05em;margin:14px 0 30px}
.mf-journey-steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.mf-journey-steps div{padding:22px;border-radius:24px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.10)}.mf-journey-steps span{color:#9effc3;font-weight:900}.mf-journey-steps strong{display:block;font-size:20px;margin:10px 0}.mf-journey-steps small{color:rgba(255,255,255,.72);line-height:1.6}
@media(max-width:1024px){.mf-hero-grid{grid-template-columns:1fr}.mf-benefit-grid,.mf-journey-steps{grid-template-columns:1fr 1fr}.mf-testimonial-grid{grid-template-columns:1fr}}
@media(max-width:720px){.mf-hero{padding:120px 0 70px}.mf-trust-row,.mf-card-bottom,.mf-benefit-grid,.mf-journey-steps{grid-template-columns:1fr}}


/* V38.1 - Services Mega Menu Hover/Click Fix */
.nav-mega{
  position:relative;
}

.nav-mega::after{
  content:"";
  position:absolute;
  left:-40px;
  right:-40px;
  top:100%;
  height:34px;
  background:transparent;
}

.mega-panel{
  top:calc(100% + 8px) !important;
}

.nav-mega:hover .mega-panel,
.mega-panel:hover{
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
  transform:translateX(-50%) translateY(0) !important;
}

.mega-item{
  position:relative;
  z-index:2;
  cursor:pointer;
}

.mega-panel{
  transition:opacity .22s ease, visibility .22s ease, transform .22s ease !important;
}


/* V38.2 - Compact Premium Services Dropdown */
.mega-panel{
  width:540px !important;
  padding:14px !important;
  border-radius:22px !important;
  box-shadow:0 22px 62px rgba(8,36,92,.16) !important;
}

.mega-grid{
  gap:8px !important;
}

.mega-item{
  grid-template-columns:42px 1fr !important;
  gap:11px !important;
  padding:12px !important;
  border-radius:16px !important;
}

.mega-icon{
  width:42px !important;
  height:42px !important;
  border-radius:14px !important;
  font-size:15px !important;
  box-shadow:0 10px 22px rgba(11,164,75,.15) !important;
}

.mega-item h4{
  font-size:14px !important;
  margin-bottom:3px !important;
}

.mega-item p{
  font-size:12px !important;
  line-height:1.35 !important;
}

.mega-panel:before{
  width:16px !important;
  height:16px !important;
  top:-8px !important;
}

.nav-mega::after{
  height:22px !important;
}

@media(max-width:980px){
  .mega-panel{
    width:500px !important;
  }
}


/* V38.3 - Luxury Typography Pass (Slimmer Premium Feel) */

.mega-item h4{
  font-weight:600 !important;
  letter-spacing:-0.01em !important;
  line-height:1.25 !important;
}

.mega-item p{
  font-weight:500 !important;
  opacity:.82 !important;
  letter-spacing:-0.005em !important;
}

.menu a,
.nav-links a,
.nav-item{
  font-weight:500 !important;
  letter-spacing:-0.01em !important;
}

/* Slightly cleaner premium spacing */
.mega-item{
  align-items:center !important;
}

.mega-trigger{
  font-weight:500 !important;
}


/* V40 - Story Driven Premium Service Pages */
.story-service-hero{
  padding:145px 0 90px;
  background:
    radial-gradient(circle at 12% 18%, rgba(30,74,168,.08), transparent 25%),
    radial-gradient(circle at 88% 78%, rgba(11,164,75,.10), transparent 28%),
    linear-gradient(180deg,#fff,#f7fbff);
}

.story-hero-grid{
  display:grid;
  grid-template-columns:1fr .9fr;
  gap:58px;
  align-items:center;
}

.story-hero-copy h1{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(44px,5.3vw,74px);
  line-height:1.02;
  letter-spacing:-.06em;
  color:var(--navy);
  margin:22px 0;
}

.story-hero-copy p{
  color:#64748b;
  font-size:18px;
  line-height:1.85;
  max-width:680px;
  margin-bottom:34px;
}

.story-actions{
  display:flex;
  gap:14px;
  flex-wrap:wrap;
}

.story-image-card{
  min-height:520px;
  border-radius:42px;
  overflow:hidden;
  position:relative;
  background:
    linear-gradient(135deg,rgba(30,74,168,.78),rgba(11,164,75,.38)),
    var(--story-image, linear-gradient(135deg,#102B5C,#0E244B));
  background-size:cover;
  background-position:center;
  box-shadow:0 36px 100px rgba(8,36,92,.22);
}

.story-image-card:after{
  content:"";
  position:absolute;
  inset:0;
  background:
    linear-gradient(180deg,transparent,rgba(4,14,32,.45)),
    radial-gradient(circle at 80% 20%,rgba(255,255,255,.16),transparent 28%);
}

.story-image-content{
  position:absolute;
  left:28px;
  right:28px;
  bottom:28px;
  z-index:2;
  padding:24px;
  border-radius:28px;
  color:#fff;
  background:rgba(255,255,255,.12);
  border:1px solid rgba(255,255,255,.18);
  backdrop-filter:blur(18px);
}

.story-image-content span{
  display:block;
  color:#9effc3;
  font-weight:900;
  margin-bottom:8px;
}

.story-image-content strong{
  display:block;
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:30px;
  letter-spacing:-.045em;
}

.story-stack-section{
  background:linear-gradient(180deg,#fff,#f7fbff);
  padding-top:60px;
}

.story-stack{
  display:grid;
  gap:34px;
}

.story-panel{
  position:sticky;
  top:98px;
  display:grid;
  grid-template-columns:1fr .92fr;
  gap:36px;
  align-items:center;
  min-height:560px;
  padding:28px;
  border-radius:42px;
  background:#fff;
  border:1px solid rgba(30,74,168,.08);
  box-shadow:0 26px 80px rgba(8,36,92,.10);
  overflow:hidden;
}

.story-panel:nth-child(even){
  grid-template-columns:.92fr 1fr;
}

.story-panel:nth-child(even) .story-panel-copy{
  order:2;
}

.story-panel:nth-child(even) .story-panel-visual{
  order:1;
}

.story-panel-copy{
  padding:34px;
}

.story-count{
  display:inline-flex;
  width:54px;
  height:54px;
  border-radius:18px;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-weight:900;
  background:linear-gradient(135deg,var(--brand-blue),var(--green));
  margin-bottom:24px;
}

.story-panel-copy h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif;
  font-size:clamp(32px,4vw,52px);
  line-height:1.06;
  letter-spacing:-.055em;
  color:var(--navy);
  margin-bottom:18px;
}

.story-panel-copy p{
  color:#64748b;
  line-height:1.9;
  font-size:17px;
  margin-bottom:24px;
}

.story-bullets{
  display:grid;
  gap:14px;
}

.story-bullets div{
  display:flex;
  gap:12px;
  align-items:flex-start;
  color:#334155;
  font-weight:800;
}

.story-bullets i{
  color:var(--green);
  margin-top:4px;
}

.story-panel-visual{
  height:500px;
  border-radius:34px;
  overflow:hidden;
  position:relative;
  background:
    linear-gradient(135deg,rgba(30,74,168,.72),rgba(11,164,75,.34)),
    var(--panel-image, linear-gradient(135deg,#102B5C,#0E244B));
  background-size:cover;
  background-position:center;
}

.story-panel-visual:after{
  content:"";
  position:absolute;
  inset:0;
  background:
    radial-gradient(circle at 80% 20%,rgba(255,255,255,.18),transparent 28%),
    linear-gradient(180deg,transparent,rgba(4,14,32,.40));
}

.visual-floating-tag{
  position:absolute;
  left:24px;
  bottom:24px;
  z-index:2;
  padding:14px 18px;
  border-radius:999px;
  color:#fff;
  background:rgba(255,255,255,.14);
  border:1px solid rgba(255,255,255,.20);
  backdrop-filter:blur(14px);
  font-weight:900;
}

.story-bottom-note{
  margin-top:40px;
  padding:28px;
  border-radius:32px;
  background:linear-gradient(135deg,var(--deep-blue),var(--navy));
  color:#fff;
  display:flex;
  justify-content:space-between;
  gap:24px;
  align-items:center;
}

.story-bottom-note p{
  color:rgba(255,255,255,.72);
  line-height:1.75;
}

@media(max-width:1024px){
  .story-hero-grid,
  .story-panel,
  .story-panel:nth-child(even){
    grid-template-columns:1fr;
  }

  .story-panel{
    position:relative;
    top:auto;
    min-height:auto;
  }

  .story-panel:nth-child(even) .story-panel-copy,
  .story-panel:nth-child(even) .story-panel-visual{
    order:initial;
  }

  .story-panel-visual{
    height:360px;
  }
}

@media(max-width:720px){
  .story-service-hero{
    padding:120px 0 70px;
  }

  .story-image-card{
    min-height:380px;
  }

  .story-panel{
    padding:16px;
    border-radius:30px;
  }

  .story-panel-copy{
    padding:22px;
  }

  .story-panel-visual{
    height:280px;
    border-radius:24px;
  }

  .story-bottom-note{
    flex-direction:column;
    align-items:flex-start;
  }
}


/* V41 - Image 2 Inspired Service Page Design
   Clean white service pages with realistic image blocks, compact rows and visible content.
*/

.story-service-hero{
  padding:125px 0 48px !important;
  background:#ffffff !important;
}

.story-hero-grid{
  display:grid !important;
  grid-template-columns:.92fr 1.08fr !important;
  gap:62px !important;
  align-items:center !important;
}

.story-hero-copy h1{
  font-family:"Plus Jakarta Sans",Inter,sans-serif !important;
  font-size:clamp(46px,5vw,70px) !important;
  line-height:1.05 !important;
  letter-spacing:-.06em !important;
  color:var(--navy) !important;
  margin:22px 0 24px !important;
}

.story-hero-copy p{
  font-size:17px !important;
  line-height:1.85 !important;
  color:#5f6b7a !important;
  max-width:620px !important;
  margin-bottom:30px !important;
}

.story-image-card{
  min-height:430px !important;
  border-radius:30px !important;
  background:
    linear-gradient(135deg,rgba(30,74,168,.08),rgba(11,164,75,.08)),
    var(--story-image, linear-gradient(135deg,#dbeafe,#dcfce7)) !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 22px 58px rgba(8,36,92,.14) !important;
}

.story-image-card:after{
  background:linear-gradient(180deg,transparent,rgba(4,14,32,.15)) !important;
}

.story-image-content{
  left:28px !important;
  right:28px !important;
  bottom:28px !important;
  padding:20px 24px !important;
  border-radius:22px !important;
  background:rgba(255,255,255,.18) !important;
  border:1px solid rgba(255,255,255,.26) !important;
}

.story-image-content strong{
  font-size:26px !important;
}

/* story rows */
.story-stack-section{
  padding:0 !important;
  background:#fff !important;
}

.story-stack{
  display:grid !important;
  gap:0 !important;
}

.story-panel{
  position:relative !important;
  top:auto !important;
  display:grid !important;
  grid-template-columns:.9fr 1.1fr !important;
  gap:56px !important;
  align-items:center !important;
  min-height:auto !important;
  padding:54px 0 !important;
  border-radius:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
  overflow:visible !important;
}

.story-panel:not(:last-child){
  border-bottom:1px solid rgba(30,74,168,.07) !important;
}

.story-panel:nth-child(even){
  grid-template-columns:1.1fr .9fr !important;
}

.story-panel:nth-child(even) .story-panel-copy{
  order:2 !important;
}

.story-panel:nth-child(even) .story-panel-visual{
  order:1 !important;
}

.story-panel-copy{
  padding:0 8px !important;
}

.story-count{
  width:auto !important;
  height:auto !important;
  display:inline-flex !important;
  color:var(--green) !important;
  background:transparent !important;
  font-size:14px !important;
  font-weight:900 !important;
  margin-bottom:12px !important;
}

.story-panel-copy h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif !important;
  font-size:clamp(30px,3vw,42px) !important;
  line-height:1.12 !important;
  letter-spacing:-.045em !important;
  color:var(--navy) !important;
  margin-bottom:16px !important;
}

.story-panel-copy p{
  color:#5f6b7a !important;
  line-height:1.78 !important;
  font-size:16px !important;
  margin-bottom:20px !important;
  max-width:560px !important;
}

.story-bullets{
  gap:10px !important;
}

.story-bullets div{
  display:flex !important;
  gap:11px !important;
  align-items:flex-start !important;
  color:#334155 !important;
  font-size:15px !important;
  font-weight:600 !important;
}

.story-bullets i{
  color:var(--green) !important;
  font-size:14px !important;
  margin-top:4px !important;
}

/* image blocks */
.story-panel-visual{
  height:315px !important;
  border-radius:26px !important;
  background:
    linear-gradient(135deg,rgba(30,74,168,.05),rgba(11,164,75,.05)),
    var(--panel-image, linear-gradient(135deg,#dbeafe,#dcfce7)) !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 18px 46px rgba(8,36,92,.12) !important;
}

.story-panel-visual:after{
  background:linear-gradient(180deg,transparent,rgba(4,14,32,.10)) !important;
}

.visual-floating-tag{
  display:none !important;
}

.story-bottom-note{
  margin:44px 0 0 !important;
  padding:34px 38px !important;
  border-radius:28px !important;
  background:linear-gradient(135deg,#125f2d,#0f5329) !important;
  box-shadow:0 24px 70px rgba(16,92,42,.18) !important;
}

/* make FAQ and CTA align better with image-2 style */
.faq-premium{
  background:#fff !important;
}

.service-cta{
  background:#fff !important;
}

.service-cta-box{
  background:linear-gradient(135deg,#125f2d,#0f5329) !important;
  border-radius:28px !important;
  box-shadow:0 24px 70px rgba(16,92,42,.18) !important;
}

/* on missing images, show a soft premium placeholder instead of dark blank */
.story-image-card,
.story-panel-visual{
  background-color:#eef7f1 !important;
}

/* recommended image object feel */
.story-service-hero .breadcrumb{
  margin-bottom:18px !important;
}

@media(max-width:1024px){
  .story-hero-grid,
  .story-panel,
  .story-panel:nth-child(even){
    grid-template-columns:1fr !important;
    gap:30px !important;
  }

  .story-panel:nth-child(even) .story-panel-copy,
  .story-panel:nth-child(even) .story-panel-visual{
    order:initial !important;
  }

  .story-image-card{
    min-height:360px !important;
  }

  .story-panel-visual{
    height:300px !important;
  }
}

@media(max-width:720px){
  .story-service-hero{
    padding:110px 0 40px !important;
  }

  .story-panel{
    padding:38px 0 !important;
  }

  .story-image-card{
    min-height:300px !important;
    border-radius:22px !important;
  }

  .story-panel-visual{
    height:240px !important;
    border-radius:22px !important;
  }

  .story-bottom-note{
    padding:28px !important;
  }
}


/* V42 - Compact Stacked Story Cards + Real Image Support */

/* Hero stays Image-2 inspired */
.story-service-hero{
  padding:125px 0 48px !important;
  background:#ffffff !important;
}

.story-hero-grid{
  grid-template-columns:.92fr 1.08fr !important;
  gap:58px !important;
}

.story-image-card{
  min-height:400px !important;
  border-radius:30px !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 22px 58px rgba(8,36,92,.14) !important;
}

/* Bring back stacked-card feeling, but compact */
.story-stack-section{
  padding:36px 0 70px !important;
  background:linear-gradient(180deg,#ffffff,#f7fbff) !important;
}

.story-stack{
  display:grid !important;
  gap:26px !important;
}

.story-panel{
  position:sticky !important;
  top:92px !important;

  display:grid !important;
  grid-template-columns:.92fr 1.08fr !important;
  gap:30px !important;
  align-items:center !important;

  min-height:430px !important;
  padding:22px !important;

  border-radius:34px !important;
  background:rgba(255,255,255,.96) !important;
  border:1px solid rgba(30,74,168,.08) !important;
  box-shadow:0 24px 72px rgba(8,36,92,.12) !important;
  overflow:hidden !important;
}

.story-panel:nth-child(1){z-index:3}
.story-panel:nth-child(2){z-index:4}
.story-panel:nth-child(3){z-index:5}

.story-panel:not(:last-child){
  border-bottom:1px solid rgba(30,74,168,.08) !important;
}

.story-panel:nth-child(even){
  grid-template-columns:1.08fr .92fr !important;
}

.story-panel:nth-child(even) .story-panel-copy{
  order:2 !important;
}

.story-panel:nth-child(even) .story-panel-visual{
  order:1 !important;
}

.story-panel-copy{
  padding:20px 26px !important;
}

.story-count{
  width:42px !important;
  height:42px !important;
  border-radius:14px !important;
  display:grid !important;
  place-items:center !important;
  color:#fff !important;
  background:linear-gradient(135deg,var(--brand-blue),var(--green)) !important;
  font-size:13px !important;
  font-weight:900 !important;
  margin-bottom:18px !important;
}

.story-panel-copy h2{
  font-size:clamp(28px,3vw,42px) !important;
  line-height:1.08 !important;
  margin-bottom:14px !important;
}

.story-panel-copy p{
  font-size:15.5px !important;
  line-height:1.72 !important;
  margin-bottom:18px !important;
  max-width:570px !important;
}

.story-bullets{
  gap:8px !important;
}

.story-bullets div{
  font-size:14.5px !important;
  font-weight:650 !important;
  line-height:1.45 !important;
}

.story-panel-visual{
  height:350px !important;
  border-radius:28px !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 18px 44px rgba(8,36,92,.12) !important;
}

.story-panel-visual:after{
  background:linear-gradient(180deg,transparent,rgba(4,14,32,.18)) !important;
}

.visual-floating-tag{
  display:inline-flex !important;
  left:22px !important;
  bottom:22px !important;
  padding:12px 16px !important;
  border-radius:999px !important;
  font-size:13px !important;
  background:rgba(255,255,255,.18) !important;
  border:1px solid rgba(255,255,255,.25) !important;
  color:#fff !important;
  backdrop-filter:blur(14px) !important;
}

/* Compact bottom note */
.story-bottom-note{
  margin-top:36px !important;
  padding:30px 34px !important;
  border-radius:30px !important;
}

/* prevent floating whatsapp covering content too much */
@media(min-width:1025px){
  .story-stack-section{
    padding-bottom:90px !important;
  }
}

/* Tablet/mobile: no sticky; simple stacked readable flow */
@media(max-width:1024px){
  .story-hero-grid,
  .story-panel,
  .story-panel:nth-child(even){
    grid-template-columns:1fr !important;
  }

  .story-panel{
    position:relative !important;
    top:auto !important;
    min-height:auto !important;
  }

  .story-panel:nth-child(even) .story-panel-copy,
  .story-panel:nth-child(even) .story-panel-visual{
    order:initial !important;
  }

  .story-panel-visual{
    height:320px !important;
  }
}

@media(max-width:720px){
  .story-service-hero{
    padding:110px 0 42px !important;
  }

  .story-image-card{
    min-height:300px !important;
  }

  .story-panel{
    padding:16px !important;
    border-radius:28px !important;
  }

  .story-panel-copy{
    padding:18px !important;
  }

  .story-panel-visual{
    height:240px !important;
  }
}


/* V43 - Products & Services Premium Dropdowns */
.nav-dropdown{position:relative;display:flex;align-items:center}
.dropdown-trigger{display:inline-flex;align-items:center;gap:7px;color:inherit;font-weight:500;letter-spacing:-.01em}
.dropdown-trigger i{font-size:11px;transition:.25s ease}
.nav-dropdown:hover .dropdown-trigger i{transform:rotate(180deg)}
.nav-dropdown:after{content:"";position:absolute;left:-25px;right:-25px;top:100%;height:22px}
.simple-dropdown-panel{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%) translateY(10px);width:360px;padding:12px;border-radius:22px;background:rgba(255,255,255,.97);border:1px solid rgba(30,74,168,.10);box-shadow:0 22px 62px rgba(8,36,92,.16);backdrop-filter:blur(18px);opacity:0;visibility:hidden;pointer-events:none;transition:.22s ease;z-index:999}
.nav-dropdown:hover .simple-dropdown-panel,.simple-dropdown-panel:hover{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0)}
.simple-dropdown-panel:before{content:"";position:absolute;top:-8px;left:50%;width:16px;height:16px;transform:translateX(-50%) rotate(45deg);background:rgba(255,255,255,.97);border-left:1px solid rgba(30,74,168,.08);border-top:1px solid rgba(30,74,168,.08)}
.simple-drop-item{display:grid!important;grid-template-columns:38px 1fr;gap:10px;align-items:center;padding:10px;border-radius:15px;color:var(--navy)!important;transition:.22s ease;text-align:left}
.simple-drop-item:hover{background:linear-gradient(180deg,#f8fbff,#eef6ff);transform:translateY(-2px)}
.simple-drop-icon{width:38px;height:38px;border-radius:12px;display:grid;place-items:center;color:#fff;font-size:13px;background:linear-gradient(135deg,var(--brand-blue),var(--green));box-shadow:0 10px 22px rgba(11,164,75,.14)}
.simple-drop-item strong{display:block;color:var(--navy);font-size:14px;font-weight:600;line-height:1.2}
.simple-drop-item span{display:block;color:#64748b;font-size:11px;font-weight:500;line-height:1.3;margin-top:3px}
@media(max-width:900px){.nav-dropdown{display:none}}


/* V44 - Clean Classy Navbar + Compact Dropdowns */
.nav-inner{
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:22px !important;
}

.menu{
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:30px !important;
  flex:1 !important;
  min-width:0 !important;
}

.menu > a,
.clean-drop-trigger{
  font-size:14px !important;
  font-weight:500 !important;
  letter-spacing:-0.01em !important;
  color:var(--navy) !important;
  white-space:nowrap !important;
}

.clean-nav-dropdown{
  position:relative !important;
  display:flex !important;
  align-items:center !important;
}

.clean-drop-trigger{
  display:inline-flex !important;
  align-items:center !important;
  gap:7px !important;
}

.clean-drop-trigger i{
  font-size:10px !important;
  opacity:.72 !important;
  transition:.22s ease !important;
}

.clean-nav-dropdown:hover .clean-drop-trigger i{
  transform:rotate(180deg) !important;
}

.clean-nav-dropdown:after{
  content:"" !important;
  position:absolute !important;
  left:-18px !important;
  right:-18px !important;
  top:100% !important;
  height:18px !important;
}

.clean-drop-menu{
  position:absolute !important;
  top:calc(100% + 8px) !important;
  left:50% !important;
  transform:translateX(-50%) translateY(8px) !important;
  width:250px !important;
  padding:10px !important;
  border-radius:18px !important;
  background:rgba(255,255,255,.98) !important;
  border:1px solid rgba(30,74,168,.10) !important;
  box-shadow:0 18px 54px rgba(8,36,92,.14) !important;
  backdrop-filter:blur(16px) !important;
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  transition:.22s ease !important;
  z-index:2000 !important;
}

.clean-nav-dropdown:hover .clean-drop-menu,
.clean-drop-menu:hover{
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
  transform:translateX(-50%) translateY(0) !important;
}

.clean-drop-menu:before{
  content:"" !important;
  position:absolute !important;
  top:-7px !important;
  left:50% !important;
  width:14px !important;
  height:14px !important;
  transform:translateX(-50%) rotate(45deg) !important;
  background:rgba(255,255,255,.98) !important;
  border-left:1px solid rgba(30,74,168,.08) !important;
  border-top:1px solid rgba(30,74,168,.08) !important;
}

.clean-drop-menu a{
  display:block !important;
  padding:11px 14px !important;
  border-radius:12px !important;
  color:#334155 !important;
  font-size:14px !important;
  font-weight:500 !important;
  letter-spacing:-0.01em !important;
  line-height:1.2 !important;
  white-space:nowrap !important;
  transition:.2s ease !important;
}

.clean-drop-menu a:hover{
  color:var(--green) !important;
  background:#f5fbf7 !important;
  transform:translateX(3px) !important;
}

/* Hide older heavy dropdown/mega-menu structures if any remain */
.nav-mega,
.mega-panel,
.simple-dropdown-panel{
  display:none !important;
}

/* Logo/button sizing guard */
.brand-logo img{
  max-width:170px !important;
  height:auto !important;
}

.nav-actions{
  flex-shrink:0 !important;
}

.nav-actions .btn{
  white-space:nowrap !important;
}

/* Better fit for medium screens */
@media(max-width:1120px){
  .menu{
    gap:20px !important;
  }

  .menu > a,
  .clean-drop-trigger{
    font-size:13px !important;
  }

  .brand-logo img{
    max-width:145px !important;
  }
}

@media(max-width:920px){
  .menu{
    display:none !important;
  }
}


/* V45 - Reworked Stable Premium Navbar */

/* Header/nav shell */
.nav,
#navbar{
  position:fixed !important;
  top:18px !important;
  left:0 !important;
  right:0 !important;
  z-index:5000 !important;
  width:100% !important;
  background:transparent !important;
  pointer-events:none !important;
}

.nav .nav-inner,
#navbar .nav-inner{
  pointer-events:auto !important;
  width:min(1280px, calc(100% - 64px)) !important;
  height:76px !important;
  margin:0 auto !important;
  padding:0 18px 0 22px !important;

  display:grid !important;
  grid-template-columns:190px minmax(0, 1fr) auto !important;
  align-items:center !important;
  column-gap:24px !important;

  border-radius:26px !important;
  background:rgba(255,255,255,.92) !important;
  border:1px solid rgba(30,74,168,.08) !important;
  box-shadow:0 16px 50px rgba(8,36,92,.11) !important;
  backdrop-filter:blur(18px) !important;
}

/* Logo area */
.nav .brand-logo,
#navbar .brand-logo{
  display:flex !important;
  align-items:center !important;
  justify-content:flex-start !important;
  min-width:0 !important;
}

.nav .brand-logo img,
#navbar .brand-logo img{
  width:158px !important;
  max-width:158px !important;
  height:auto !important;
  display:block !important;
  object-fit:contain !important;
}

/* Center menu */
.nav .menu,
#navbar .menu{
  display:flex !important;
  align-items:center !important;
  justify-content:center !important;
  gap:26px !important;
  min-width:0 !important;
  width:100% !important;
  flex:initial !important;
  overflow:visible !important;
}

.nav .menu > a,
#navbar .menu > a,
.nav .clean-drop-trigger,
#navbar .clean-drop-trigger{
  display:inline-flex !important;
  align-items:center !important;
  justify-content:center !important;
  height:40px !important;
  padding:0 !important;

  color:#1f2937 !important;
  font-family:Inter, system-ui, sans-serif !important;
  font-size:14px !important;
  font-weight:600 !important;
  line-height:1 !important;
  letter-spacing:-.01em !important;
  white-space:nowrap !important;
  text-decoration:none !important;
}

.nav .menu > a:hover,
#navbar .menu > a:hover,
.nav .clean-drop-trigger:hover,
#navbar .clean-drop-trigger:hover{
  color:var(--green) !important;
}

/* Right action */
.nav .nav-actions,
#navbar .nav-actions{
  display:flex !important;
  align-items:center !important;
  justify-content:flex-end !important;
  flex-shrink:0 !important;
}

.nav .nav-actions .btn,
#navbar .nav-actions .btn{
  height:46px !important;
  padding:0 20px !important;
  border-radius:999px !important;
  white-space:nowrap !important;
  font-size:14px !important;
  font-weight:800 !important;
}

/* Dropdown structure */
.clean-nav-dropdown{
  position:relative !important;
  display:flex !important;
  align-items:center !important;
  height:76px !important;
}

.clean-drop-trigger i{
  margin-left:2px !important;
  font-size:10px !important;
  opacity:.68 !important;
  transition:.22s ease !important;
}

.clean-nav-dropdown:hover .clean-drop-trigger i{
  transform:rotate(180deg) !important;
}

.clean-nav-dropdown:after{
  content:"" !important;
  position:absolute !important;
  left:-22px !important;
  right:-22px !important;
  top:56px !important;
  height:34px !important;
  background:transparent !important;
}

/* Compact dropdown panel */
.clean-drop-menu{
  position:absolute !important;
  top:72px !important;
  left:50% !important;
  transform:translateX(-50%) translateY(8px) !important;

  width:238px !important;
  padding:9px !important;
  border-radius:18px !important;

  background:rgba(255,255,255,.98) !important;
  border:1px solid rgba(30,74,168,.10) !important;
  box-shadow:0 20px 58px rgba(8,36,92,.16) !important;
  backdrop-filter:blur(18px) !important;

  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  transition:.20s ease !important;
  z-index:6000 !important;
}

.clean-nav-dropdown:hover .clean-drop-menu,
.clean-drop-menu:hover{
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
  transform:translateX(-50%) translateY(0) !important;
}

.clean-drop-menu:before{
  content:"" !important;
  position:absolute !important;
  top:-7px !important;
  left:50% !important;
  width:14px !important;
  height:14px !important;
  transform:translateX(-50%) rotate(45deg) !important;
  background:rgba(255,255,255,.98) !important;
  border-left:1px solid rgba(30,74,168,.08) !important;
  border-top:1px solid rgba(30,74,168,.08) !important;
}

.clean-drop-menu a{
  display:block !important;
  padding:10px 13px !important;
  border-radius:12px !important;
  color:#374151 !important;
  font-size:13.5px !important;
  font-weight:500 !important;
  line-height:1.2 !important;
  letter-spacing:-.01em !important;
  text-align:left !important;
  text-decoration:none !important;
  white-space:nowrap !important;
  transition:.18s ease !important;
}

.clean-drop-menu a:hover{
  background:#f4fbf6 !important;
  color:var(--green) !important;
  transform:translateX(3px) !important;
}

/* Remove any old heavy dropdown artifacts completely */
.nav-mega,
.mega-panel,
.simple-dropdown-panel,
.simple-drop-item,
.simple-drop-icon{
  display:none !important;
}

/* Medium screens: compress gracefully */
@media(max-width:1180px){
  .nav .nav-inner,
  #navbar .nav-inner{
    grid-template-columns:160px minmax(0, 1fr) auto !important;
    width:min(1180px, calc(100% - 44px)) !important;
    column-gap:16px !important;
  }

  .nav .brand-logo img,
  #navbar .brand-logo img{
    width:138px !important;
    max-width:138px !important;
  }

  .nav .menu,
  #navbar .menu{
    gap:18px !important;
  }

  .nav .menu > a,
  #navbar .menu > a,
  .nav .clean-drop-trigger,
  #navbar .clean-drop-trigger{
    font-size:13px !important;
  }

  .nav .nav-actions .btn,
  #navbar .nav-actions .btn{
    padding:0 16px !important;
    font-size:13px !important;
  }
}

/* Hide center nav if it cannot fit, keep logo + login stable */
@media(max-width:940px){
  .nav .nav-inner,
  #navbar .nav-inner{
    grid-template-columns:1fr auto !important;
  }

  .nav .menu,
  #navbar .menu{
    display:none !important;
  }

  .nav .brand-logo img,
  #navbar .brand-logo img{
    width:150px !important;
    max-width:150px !important;
  }
}


/* V46 - Navbar White Polish + Compact Stacked Service/Product Pages */

/* 1 & 2: Navbar pure white and slightly higher */
.nav,
#navbar{
  top:8px !important;
}

.nav .nav-inner,
#navbar .nav-inner{
  height:72px !important;
  background:#ffffff !important;
  border:1px solid rgba(30,74,168,.07) !important;
  box-shadow:0 14px 42px rgba(8,36,92,.10) !important;
  backdrop-filter:none !important;
}

.clean-drop-menu,
.clean-drop-menu:before{
  background:#ffffff !important;
}

/* Give hero sections enough space after higher navbar */
.hero,
.mf-hero,
.story-service-hero,
.service-page-hero{
  padding-top:118px !important;
}

/* 3: Restore compact premium stacked information-card pages */
.story-stack-section{
  padding:34px 0 78px !important;
  background:
    radial-gradient(circle at 10% 20%, rgba(30,74,168,.035), transparent 24%),
    radial-gradient(circle at 92% 82%, rgba(11,164,75,.055), transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff) !important;
}

.story-stack{
  display:grid !important;
  gap:28px !important;
  max-width:1180px !important;
  margin:0 auto !important;
}

/* compact sticky stack: visible content, not full-page scroll */
.story-panel{
  position:sticky !important;
  top:92px !important;
  z-index:2 !important;

  display:grid !important;
  grid-template-columns:.92fr 1.08fr !important;
  align-items:center !important;
  gap:30px !important;

  min-height:420px !important;
  padding:22px !important;
  border-radius:34px !important;

  background:rgba(255,255,255,.98) !important;
  border:1px solid rgba(30,74,168,.08) !important;
  box-shadow:0 24px 72px rgba(8,36,92,.12) !important;
  overflow:hidden !important;
}

/* stacking depth */
.story-panel:nth-child(1){z-index:3 !important}
.story-panel:nth-child(2){z-index:4 !important}
.story-panel:nth-child(3){z-index:5 !important}
.story-panel:nth-child(4){z-index:6 !important}

.story-panel:nth-child(even){
  grid-template-columns:1.08fr .92fr !important;
}

.story-panel:nth-child(even) .story-panel-copy{
  order:2 !important;
}

.story-panel:nth-child(even) .story-panel-visual{
  order:1 !important;
}

.story-panel-copy{
  padding:20px 26px !important;
}

.story-count{
  width:42px !important;
  height:42px !important;
  border-radius:14px !important;
  display:grid !important;
  place-items:center !important;
  color:#fff !important;
  background:linear-gradient(135deg,var(--brand-blue),var(--green)) !important;
  font-size:13px !important;
  font-weight:900 !important;
  margin-bottom:16px !important;
}

.story-panel-copy h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif !important;
  font-size:clamp(28px,3vw,42px) !important;
  line-height:1.08 !important;
  letter-spacing:-.045em !important;
  color:var(--navy) !important;
  margin-bottom:14px !important;
}

.story-panel-copy p{
  color:#5f6b7a !important;
  font-size:15.5px !important;
  line-height:1.72 !important;
  margin-bottom:18px !important;
  max-width:580px !important;
}

.story-bullets{
  display:grid !important;
  gap:8px !important;
}

.story-bullets div{
  display:flex !important;
  gap:10px !important;
  align-items:flex-start !important;
  color:#334155 !important;
  font-size:14.5px !important;
  font-weight:650 !important;
  line-height:1.45 !important;
}

.story-bullets i{
  color:var(--green) !important;
  font-size:14px !important;
  margin-top:4px !important;
}

.story-panel-visual{
  height:345px !important;
  border-radius:28px !important;
  overflow:hidden !important;
  position:relative !important;

  background:
    linear-gradient(135deg, rgba(30,74,168,.06), rgba(11,164,75,.06)),
    var(--panel-image, linear-gradient(135deg,#dbeafe,#dcfce7)) !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 18px 44px rgba(8,36,92,.12) !important;
}

.story-panel-visual:after{
  content:"" !important;
  position:absolute !important;
  inset:0 !important;
  background:linear-gradient(180deg,transparent,rgba(4,14,32,.16)) !important;
}

.visual-floating-tag{
  display:inline-flex !important;
  position:absolute !important;
  left:22px !important;
  bottom:22px !important;
  z-index:2 !important;
  padding:12px 16px !important;
  border-radius:999px !important;
  color:#fff !important;
  font-size:13px !important;
  font-weight:900 !important;
  background:rgba(255,255,255,.18) !important;
  border:1px solid rgba(255,255,255,.25) !important;
  backdrop-filter:blur(14px) !important;
}

/* Hero image should be real-image friendly and elegant */
.story-image-card{
  min-height:395px !important;
  border-radius:30px !important;
  background:
    linear-gradient(135deg, rgba(30,74,168,.06), rgba(11,164,75,.06)),
    var(--story-image, linear-gradient(135deg,#dbeafe,#dcfce7)) !important;
  background-size:cover !important;
  background-position:center !important;
  box-shadow:0 22px 58px rgba(8,36,92,.14) !important;
}

/* CTA and bottom note retained cleanly */
.story-bottom-note{
  margin-top:36px !important;
  padding:30px 34px !important;
  border-radius:30px !important;
  background:linear-gradient(135deg,#125f2d,#0f5329) !important;
  box-shadow:0 24px 70px rgba(16,92,42,.18) !important;
}

/* Ensure FAQs and ready section remain below stack */
.faq-premium,
.service-cta{
  position:relative !important;
  z-index:10 !important;
}

/* Responsive: remove sticky on smaller screens */
@media(max-width:1024px){
  .story-panel,
  .story-panel:nth-child(even){
    position:relative !important;
    top:auto !important;
    grid-template-columns:1fr !important;
    min-height:auto !important;
  }

  .story-panel:nth-child(even) .story-panel-copy,
  .story-panel:nth-child(even) .story-panel-visual{
    order:initial !important;
  }

  .story-panel-visual{
    height:310px !important;
  }

  .story-image-card{
    min-height:330px !important;
  }
}

@media(max-width:720px){
  .nav,
  #navbar{
    top:6px !important;
  }

  .hero,
  .mf-hero,
  .story-service-hero,
  .service-page-hero{
    padding-top:105px !important;
  }

  .story-panel{
    padding:16px !important;
    border-radius:28px !important;
  }

  .story-panel-copy{
    padding:18px !important;
  }

  .story-panel-visual{
    height:240px !important;
    border-radius:22px !important;
  }

  .story-image-card{
    min-height:285px !important;
  }
}


/* V47 - Uniform CTA Blocks + Hide WhatsApp Floater Near CTA/Footer */

/* Uniform Ready/CTA section sizing across all product/service pages */
.service-cta{
  padding:64px 0 72px !important;
  background:#fff !important;
}

.service-cta .container{
  max-width:1180px !important;
}

.service-cta-box,
.story-bottom-note{
  width:100% !important;
  min-height:188px !important;
  padding:34px 42px !important;
  border-radius:30px !important;

  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:28px !important;

  background:linear-gradient(135deg,#125f2d,#0f5329) !important;
  box-shadow:0 24px 70px rgba(16,92,42,.18) !important;
  overflow:hidden !important;
}

.service-cta-box > div,
.story-bottom-note > div{
  max-width:720px !important;
}

.service-cta-box h2,
.story-bottom-note h3{
  font-family:"Plus Jakarta Sans",Inter,sans-serif !important;
  font-size:clamp(30px,3.4vw,44px) !important;
  line-height:1.08 !important;
  letter-spacing:-.045em !important;
  margin:8px 0 10px !important;
  color:#fff !important;
}

.service-cta-box p,
.story-bottom-note p{
  color:rgba(255,255,255,.74) !important;
  line-height:1.7 !important;
  margin:0 !important;
}

.service-cta-box .btn,
.story-bottom-note .btn{
  flex-shrink:0 !important;
  min-width:190px !important;
  justify-content:center !important;
}

/* Smoothly hide WhatsApp floater when CTA is in viewport */
.floating-whatsapp{
  transition:opacity .28s ease, transform .28s ease, visibility .28s ease !important;
}

.floating-whatsapp.is-hidden-near-cta{
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  transform:translateY(18px) scale(.96) !important;
}

@media(max-width:720px){
  .service-cta{
    padding:46px 0 56px !important;
  }

  .service-cta-box,
  .story-bottom-note{
    min-height:auto !important;
    padding:28px !important;
    flex-direction:column !important;
    align-items:flex-start !important;
  }

  .service-cta-box .btn,
  .story-bottom-note .btn{
    width:100% !important;
  }
}


/* V48 - Complete Service Page Cleanup */

/* Remove redundant guidance banner if any escaped HTML cleanup */
.story-bottom-note{
  display:none !important;
}

/* FAQ plus icon: no external icon dependency */
.faq-question i.fa-plus,
.faq-question .fa-plus{
  display:none !important;
}

.faq-plus-symbol{
  width:34px;
  height:34px;
  min-width:34px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:rgba(11,164,75,.08);
  border:1px solid rgba(11,164,75,.12);
  color:var(--green);
  font-size:23px;
  font-weight:700;
  line-height:1;
  transition:.28s ease;
}

.faq-item.active .faq-plus-symbol{
  transform:rotate(45deg);
  background:var(--green);
  color:#fff;
}

/* Guard older faq icon circles */
.faq-question > i,
.faq-question .faq-icon{
  width:34px !important;
  height:34px !important;
  min-width:34px !important;
  border-radius:50% !important;
  display:grid !important;
  place-items:center !important;
}

/* Uniform CTA block across product/service pages */
.service-cta{
  padding:64px 0 72px !important;
  background:#fff !important;
}

.service-cta .container{
  max-width:1180px !important;
}

.service-cta-box{
  width:100% !important;
  min-height:190px !important;
  padding:36px 42px !important;
  border-radius:30px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:28px !important;
  background:linear-gradient(135deg,#125f2d,#0f5329) !important;
  box-shadow:0 24px 70px rgba(16,92,42,.18) !important;
  overflow:hidden !important;
}

.service-cta-box > div{
  max-width:720px !important;
}

.service-cta-box h2{
  font-family:"Plus Jakarta Sans",Inter,sans-serif !important;
  font-size:clamp(30px,3.4vw,44px) !important;
  line-height:1.08 !important;
  letter-spacing:-.045em !important;
  margin:8px 0 10px !important;
  color:#fff !important;
}

.service-cta-box p{
  color:rgba(255,255,255,.74) !important;
  line-height:1.7 !important;
  margin:0 !important;
}

.service-cta-box .btn{
  flex-shrink:0 !important;
  min-width:190px !important;
  justify-content:center !important;
}

/* WhatsApp hide near CTA/footer */
.floating-whatsapp{
  transition:opacity .28s ease, transform .28s ease, visibility .28s ease !important;
}

.floating-whatsapp.is-hidden-near-cta,
.floating-whatsapp.hide-near-footer{
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  transform:translateY(18px) scale(.96) !important;
}

@media(max-width:720px){
  .service-cta{
    padding:46px 0 56px !important;
  }

  .service-cta-box{
    min-height:auto !important;
    padding:28px !important;
    flex-direction:column !important;
    align-items:flex-start !important;
  }

  .service-cta-box .btn{
    width:100% !important;
  }
}


/* V52 - Life Insurance Image Fix */
.story-image-card,
.story-panel-visual{
  background-size:cover !important;
  background-position:center !important;
  background-repeat:no-repeat !important;
}

.faq-plus-symbol{
  display:grid !important;
  place-items:center !important;
}


/* V53 - Life Insurance Page Self-contained Fix */
.reveal{
  opacity:1;
  transform:none;
}

.reveal.show{
  opacity:1;
  transform:none;
}

.story-image-card,
.story-panel-visual{
  background-size:cover !important;
  background-position:center !important;
  background-repeat:no-repeat !important;
}

/* Ensure local file images are not hidden by previous fallback overrides */
.story-image-card[style],
.story-panel-visual[style]{
  background-color:transparent !important;
}


/* V64 - Founder Card Resize + Associate Partners Section */
.team-grid,.founder-grid,.founders-grid{gap:22px!important;align-items:stretch!important}
.team-card,.founder-card,.flip-card{max-width:290px!important;min-height:auto!important;margin-left:auto!important;margin-right:auto!important}
.team-card img,.founder-card img,.flip-card img,.founder-photo img{max-height:260px!important;object-fit:cover!important}
.founder-photo,.team-photo{height:260px!important;overflow:hidden!important}
.team-card h3,.founder-card h3{font-size:20px!important;margin-bottom:5px!important}
.team-card p,.founder-card p{font-size:13px!important;line-height:1.55!important}

.associate-section{padding:34px 0 86px;background:linear-gradient(180deg,#fff,#f7fbff)}
.associate-head{text-align:center;max-width:720px;margin:0 auto 28px}
.associate-head h2{font-family:"Plus Jakarta Sans",Inter,sans-serif;color:var(--navy);font-size:clamp(28px,3.2vw,42px);letter-spacing:-.045em;line-height:1.1;margin-bottom:12px}
.associate-head p{color:#64748b;line-height:1.75}
.associate-grid{display:flex;justify-content:center;gap:18px;flex-wrap:wrap}
.associate-card{width:220px;padding:18px;border-radius:24px;background:#fff;border:1px solid rgba(30,74,168,.08);box-shadow:0 16px 44px rgba(8,36,92,.08);text-align:center;transition:.28s ease}
.associate-card:hover{transform:translateY(-6px);box-shadow:0 24px 60px rgba(8,36,92,.13)}
.associate-avatar{width:92px;height:92px;border-radius:50%;margin:0 auto 14px;display:grid;place-items:center;color:#fff;font-size:26px;font-weight:900;background:linear-gradient(135deg,var(--brand-blue),var(--green));box-shadow:0 14px 32px rgba(11,164,75,.16);overflow:hidden}
.associate-avatar img{width:100%;height:100%;object-fit:cover;display:block}
.associate-card h3{color:var(--navy);font-size:18px;margin-bottom:5px}
.associate-card span{display:block;color:var(--green);font-size:12px;font-weight:900;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
.associate-card p{color:#64748b;font-size:13px;line-height:1.55}
@media(max-width:720px){.team-card,.founder-card,.flip-card{max-width:100%!important}.associate-card{width:100%;max-width:280px}}


/* V65 - Founder Cards Final Polish */

/* Reduce founder card visual heaviness */
.founder-flip-grid{
  grid-template-columns:repeat(3, minmax(250px, 310px)) !important;
  gap:28px !important;
  justify-content:center !important;
}

.flip-founder-card{
  max-width:310px !important;
  width:100% !important;
  min-height:420px !important;
}

.flip-founder-inner,
.flip-founder-front,
.flip-founder-back{
  min-height:420px !important;
}

/* Reduce oversized glass overlay */
.flip-founder-content,
.flip-founder-info,
.flip-founder-front .glass-card,
.flip-founder-front .founder-content{
  width:82% !important;
  padding:18px !important;
  border-radius:24px !important;
  left:24px !important;
  bottom:24px !important;
}

/* Founder name font */
.flip-founder-content h3,
.flip-founder-info h3,
.flip-founder-front h3,
.flip-founder-back h3{
  font-size:26px !important;
  line-height:1.08 !important;
  letter-spacing:-0.04em !important;
  margin-bottom:10px !important;
}

/* Designation text */
.flip-founder-content p,
.flip-founder-info p,
.flip-founder-front p,
.flip-founder-back p,
.flip-founder-content .designation,
.flip-founder-info .designation{
  font-size:14px !important;
  line-height:1.42 !important;
  font-weight:700 !important;
  margin-bottom:10px !important;
}

/* LinkedIn icon smaller */
.flip-founder-linkedin,
.flip-founder-social,
.flip-founder-content .linkedin,
.flip-founder-info .linkedin{
  width:52px !important;
  height:52px !important;
  min-width:52px !important;
  font-size:20px !important;
  border-radius:16px !important;
}

/* Know More button smaller */
.flip-founder-btn,
.flip-founder-content .know-more,
.flip-founder-info .know-more,
.flip-founder-content button,
.flip-founder-info button{
  padding:10px 18px !important;
  font-size:13px !important;
  line-height:1 !important;
  border-radius:999px !important;
}

/* Founder photo crop polish */
.flip-founder-card img,
.flip-founder-front img,
.flip-founder-photo img{
  object-fit:cover !important;
  object-position:center top !important;
}

/* Back side text should not be oversized */
.flip-founder-back{
  padding:26px !important;
}

.flip-founder-back p{
  font-size:13px !important;
  line-height:1.65 !important;
  font-weight:500 !important;
}

.flip-founder-back h3{
  font-size:24px !important;
}

@media(max-width:1050px){
  .founder-flip-grid{
    grid-template-columns:repeat(3, minmax(230px, 285px)) !important;
    gap:20px !important;
  }

  .flip-founder-card{
    max-width:285px !important;
    min-height:395px !important;
  }

  .flip-founder-inner,
  .flip-founder-front,
  .flip-founder-back{
    min-height:395px !important;
  }

  .flip-founder-content h3,
  .flip-founder-info h3,
  .flip-founder-front h3{
    font-size:23px !important;
  }

  .flip-founder-content p,
  .flip-founder-info p,
  .flip-founder-front p{
    font-size:13px !important;
  }
}

@media(max-width:820px){
  .founder-flip-grid{
    grid-template-columns:1fr !important;
  }

  .flip-founder-card{
    max-width:330px !important;
  }
}


/* V66 - Founder Front Name & Overlay Final Fix */
.flip-founder-content,
.flip-founder-info,
.flip-founder-front .glass-card,
.flip-founder-front .founder-content{
  width:76% !important;
  max-width:260px !important;
  padding:14px 16px !important;
  border-radius:22px !important;
  left:22px !important;
  bottom:22px !important;
}

.flip-founder-content h3,
.flip-founder-info h3,
.flip-founder-front h3{
  font-size:17px !important;
  line-height:1.15 !important;
  letter-spacing:-0.015em !important;
  margin:0 0 6px !important;
  white-space:nowrap !important;
  max-width:100% !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

.flip-founder-content h3 br,
.flip-founder-info h3 br,
.flip-founder-front h3 br{
  display:none !important;
}

.flip-founder-content p,
.flip-founder-info p,
.flip-founder-front p{
  font-size:11.5px !important;
  line-height:1.35 !important;
  font-weight:700 !important;
  margin:0 !important;
  max-width:150px !important;
}

.flip-founder-back h3{
  font-size:22px !important;
  line-height:1.18 !important;
  white-space:normal !important;
}

.flip-founder-back h3 br{
  display:block !important;
}

.flip-founder-back p{
  font-size:12.5px !important;
  line-height:1.6 !important;
  font-weight:500 !important;
}

.flip-founder-linkedin,
.flip-founder-social,
.flip-founder-content .linkedin,
.flip-founder-info .linkedin{
  width:44px !important;
  height:44px !important;
  min-width:44px !important;
  font-size:17px !important;
  border-radius:14px !important;
}

.flip-founder-btn,
.flip-founder-content .know-more,
.flip-founder-info .know-more,
.flip-founder-content button,
.flip-founder-info button{
  padding:8px 14px !important;
  font-size:12px !important;
  line-height:1 !important;
  border-radius:999px !important;
}

.flip-founder-card img,
.flip-founder-front img,
.flip-founder-photo img{
  object-fit:cover !important;
  object-position:center top !important;
}

.flip-founder-card{
  max-width:300px !important;
  min-height:410px !important;
}

.flip-founder-inner,
.flip-founder-front,
.flip-founder-back{
  min-height:410px !important;
}

@media(max-width:1050px){
  .flip-founder-content,
  .flip-founder-info,
  .flip-founder-front .glass-card,
  .flip-founder-front .founder-content{
    width:78% !important;
    padding:13px 14px !important;
  }

  .flip-founder-content h3,
  .flip-founder-info h3,
  .flip-founder-front h3{
    font-size:16px !important;
  }

  .flip-founder-card{
    max-width:280px !important;
    min-height:390px !important;
  }

  .flip-founder-inner,
  .flip-founder-front,
  .flip-founder-back{
    min-height:390px !important;
  }
}


/* V67 - Founder Text Single Line Final Fix */

/* Compact front overlay */
.flip-founder-content,
.flip-founder-info,
.flip-founder-front .glass-card,
.flip-founder-front .founder-content{
  width:72% !important;
  max-width:230px !important;
  padding:12px 13px !important;
  border-radius:20px !important;
  left:20px !important;
  bottom:20px !important;
}

/* Name: small enough to stay single line */
.flip-founder-content h3,
.flip-founder-info h3,
.flip-founder-front h3{
  font-size:14px !important;
  line-height:1.1 !important;
  font-weight:800 !important;
  letter-spacing:0 !important;
  margin:0 0 4px !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

/* Hide any manual line breaks in name */
.flip-founder-content h3 br,
.flip-founder-info h3 br,
.flip-founder-front h3 br{
  display:none !important;
}

/* Designation: single line */
.flip-founder-content p,
.flip-founder-info p,
.flip-founder-front p{
  font-size:10px !important;
  line-height:1.15 !important;
  font-weight:650 !important;
  margin:0 !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:135px !important;
}

/* Hide manual breaks in designation too */
.flip-founder-content p br,
.flip-founder-info p br,
.flip-founder-front p br{
  display:none !important;
}

/* Smaller LinkedIn / action icon */
.flip-founder-linkedin,
.flip-founder-social,
.flip-founder-content .linkedin,
.flip-founder-info .linkedin{
  width:38px !important;
  height:38px !important;
  min-width:38px !important;
  font-size:15px !important;
  border-radius:12px !important;
}

/* Smaller front button if present */
.flip-founder-btn,
.flip-founder-content .know-more,
.flip-founder-info .know-more,
.flip-founder-content button,
.flip-founder-info button{
  padding:7px 12px !important;
  font-size:11px !important;
  border-radius:999px !important;
}

/* Keep card/card front controlled */
.flip-founder-card{
  max-width:290px !important;
  min-height:395px !important;
}

.flip-founder-inner,
.flip-founder-front,
.flip-founder-back{
  min-height:395px !important;
}

/* Back side can remain readable */
.flip-founder-back h3{
  font-size:21px !important;
  line-height:1.18 !important;
  white-space:normal !important;
}

.flip-founder-back p{
  font-size:12.5px !important;
  line-height:1.6 !important;
  white-space:normal !important;
}

/* Image crop */
.flip-founder-card img,
.flip-founder-front img,
.flip-founder-photo img{
  object-fit:cover !important;
  object-position:center top !important;
}

@media(max-width:1050px){
  .flip-founder-content,
  .flip-founder-info,
  .flip-founder-front .glass-card,
  .flip-founder-front .founder-content{
    width:74% !important;
    padding:11px 12px !important;
  }

  .flip-founder-content h3,
  .flip-founder-info h3,
  .flip-founder-front h3{
    font-size:13px !important;
  }

  .flip-founder-content p,
  .flip-founder-info p,
  .flip-founder-front p{
    font-size:9.5px !important;
    max-width:120px !important;
  }
}


/* V68 - Founder Cards Mockup Style */
.founder-flip-grid{
  grid-template-columns:repeat(3, minmax(280px, 340px)) !important;
  gap:34px !important;
  justify-content:center !important;
  align-items:stretch !important;
}

.flip-founder-card{
  max-width:340px !important;
  width:100% !important;
  min-height:460px !important;
  border-radius:28px !important;
}

.flip-founder-inner,
.flip-founder-front,
.flip-founder-back{
  min-height:460px !important;
  border-radius:28px !important;
  overflow:hidden !important;
}

.flip-founder-card img,
.flip-founder-front img,
.flip-founder-photo img{
  width:100% !important;
  height:100% !important;
  object-fit:cover !important;
  object-position:center top !important;
}

.flip-founder-content,
.flip-founder-info,
.flip-founder-front .glass-card,
.flip-founder-front .founder-content{
  position:absolute !important;
  left:20px !important;
  right:20px !important;
  bottom:20px !important;
  width:auto !important;
  max-width:none !important;
  height:118px !important;
  padding:16px 18px !important;
  border-radius:22px !important;
  display:grid !important;
  grid-template-columns:1fr 48px !important;
  grid-template-rows:auto auto auto !important;
  align-items:center !important;
  gap:2px 14px !important;
  background:rgba(10,17,30,.58) !important;
  border:1px solid rgba(255,255,255,.16) !important;
  box-shadow:0 18px 50px rgba(0,0,0,.18) !important;
  backdrop-filter:blur(16px) !important;
}

.flip-founder-content h3,
.flip-founder-info h3,
.flip-founder-front h3{
  grid-column:1 / 2 !important;
  font-size:19px !important;
  line-height:1.12 !important;
  font-weight:800 !important;
  letter-spacing:-0.02em !important;
  color:#fff !important;
  margin:0 !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

.flip-founder-content h3 br,
.flip-founder-info h3 br,
.flip-founder-front h3 br{
  display:none !important;
}

.flip-founder-content p,
.flip-founder-info p,
.flip-founder-front p{
  grid-column:1 / 2 !important;
  font-size:12.5px !important;
  line-height:1.2 !important;
  font-weight:700 !important;
  color:#a7f3b8 !important;
  margin:0 !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:100% !important;
}

.flip-founder-content p br,
.flip-founder-info p br,
.flip-founder-front p br{
  display:none !important;
}

.flip-founder-linkedin,
.flip-founder-social,
.flip-founder-content .linkedin,
.flip-founder-info .linkedin{
  grid-column:2 / 3 !important;
  grid-row:1 / 3 !important;
  justify-self:end !important;
  align-self:center !important;
  width:42px !important;
  height:42px !important;
  min-width:42px !important;
  border-radius:12px !important;
  font-size:16px !important;
  display:grid !important;
  place-items:center !important;
  background:#a7f3b8 !important;
  color:#0f172a !important;
}

.flip-founder-btn,
.flip-founder-content .know-more,
.flip-founder-info .know-more,
.flip-founder-content button,
.flip-founder-info button{
  grid-column:1 / 2 !important;
  grid-row:3 / 4 !important;
  justify-self:start !important;
  margin-top:8px !important;
  padding:8px 14px !important;
  border-radius:999px !important;
  font-size:12px !important;
  line-height:1 !important;
  font-weight:800 !important;
  white-space:nowrap !important;
}

.flip-founder-back{
  padding:28px !important;
}

.flip-founder-back h3{
  font-size:24px !important;
  line-height:1.16 !important;
  color:#fff !important;
  margin-bottom:12px !important;
  white-space:normal !important;
}

.flip-founder-back p{
  font-size:13px !important;
  line-height:1.65 !important;
  font-weight:500 !important;
  white-space:normal !important;
  color:rgba(255,255,255,.78) !important;
}

.flip-founder-content *{
  min-width:0 !important;
}

@media(max-width:1100px){
  .founder-flip-grid{
    grid-template-columns:repeat(3, minmax(250px, 310px)) !important;
    gap:24px !important;
  }
  .flip-founder-card{max-width:310px !important;min-height:430px !important;}
  .flip-founder-inner,.flip-founder-front,.flip-founder-back{min-height:430px !important;}
  .flip-founder-content,.flip-founder-info,.flip-founder-front .glass-card,.flip-founder-front .founder-content{
    height:108px !important;padding:14px 16px !important;
  }
  .flip-founder-content h3,.flip-founder-info h3,.flip-founder-front h3{font-size:17px !important;}
  .flip-founder-content p,.flip-founder-info p,.flip-founder-front p{font-size:11.5px !important;}
  .flip-founder-linkedin,.flip-founder-social,.flip-founder-content .linkedin,.flip-founder-info .linkedin{
    width:38px !important;height:38px !important;min-width:38px !important;font-size:15px !important;
  }
}

@media(max-width:820px){
  .founder-flip-grid{grid-template-columns:1fr !important;}
  .flip-founder-card{max-width:340px !important;margin:auto !important;}
}


/* V69 - Founder Overlay Direct HTML/CSS Fix */
#team.founder-flip-section .flip-founder-front .flip-founder-content,
#team.founder-flip-section .flip-founder-front .flip-founder-info,
#team.founder-flip-section .flip-founder-front .founder-content,
#team.founder-flip-section .flip-founder-front .glass-card,
#team.founder-flip-section .flip-founder-content,
#team.founder-flip-section .flip-founder-info{
  position:absolute !important;
  left:22px !important;
  right:22px !important;
  bottom:22px !important;
  width:auto !important;
  max-width:none !important;
  height:96px !important;
  min-height:96px !important;
  padding:14px 16px !important;
  border-radius:20px !important;
  display:grid !important;
  grid-template-columns:minmax(0,1fr) 40px !important;
  grid-template-rows:22px 18px 30px !important;
  column-gap:12px !important;
  row-gap:2px !important;
  align-items:center !important;
  overflow:hidden !important;
}

#team.founder-flip-section .flip-founder-front h3,
#team.founder-flip-section .flip-founder-content h3,
#team.founder-flip-section .flip-founder-info h3{
  grid-column:1 / 2 !important;
  grid-row:1 / 2 !important;
  display:block !important;
  font-size:15px !important;
  line-height:1.05 !important;
  font-weight:800 !important;
  letter-spacing:0 !important;
  color:#fff !important;
  margin:0 !important;
  padding:0 !important;
  white-space:nowrap !important;
  word-break:normal !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:100% !important;
  min-width:0 !important;
}

#team.founder-flip-section .flip-founder-front h3 br,
#team.founder-flip-section .flip-founder-content h3 br,
#team.founder-flip-section .flip-founder-info h3 br,
#team.founder-flip-section .flip-founder-front p br,
#team.founder-flip-section .flip-founder-content p br,
#team.founder-flip-section .flip-founder-info p br{
  display:none !important;
}

#team.founder-flip-section .flip-founder-front p,
#team.founder-flip-section .flip-founder-content p,
#team.founder-flip-section .flip-founder-info p{
  grid-column:1 / 2 !important;
  grid-row:2 / 3 !important;
  display:block !important;
  font-size:9.5px !important;
  line-height:1.05 !important;
  font-weight:700 !important;
  color:#a7f3b8 !important;
  margin:0 !important;
  padding:0 !important;
  white-space:nowrap !important;
  word-break:normal !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:100% !important;
  min-width:0 !important;
}

#team.founder-flip-section .flip-founder-front .flip-founder-linkedin,
#team.founder-flip-section .flip-founder-front .flip-founder-social,
#team.founder-flip-section .flip-founder-front a[href*="linkedin"],
#team.founder-flip-section .flip-founder-content .linkedin,
#team.founder-flip-section .flip-founder-info .linkedin{
  grid-column:2 / 3 !important;
  grid-row:1 / 3 !important;
  width:36px !important;
  height:36px !important;
  min-width:36px !important;
  max-width:36px !important;
  border-radius:11px !important;
  font-size:14px !important;
  justify-self:end !important;
  align-self:center !important;
  display:grid !important;
  place-items:center !important;
}

#team.founder-flip-section .flip-founder-front .flip-founder-btn,
#team.founder-flip-section .flip-founder-front button,
#team.founder-flip-section .flip-founder-front .know-more,
#team.founder-flip-section .flip-founder-content .flip-founder-btn,
#team.founder-flip-section .flip-founder-info .flip-founder-btn{
  grid-column:1 / 2 !important;
  grid-row:3 / 4 !important;
  justify-self:start !important;
  padding:7px 12px !important;
  font-size:10.5px !important;
  line-height:1 !important;
  margin:4px 0 0 !important;
  white-space:nowrap !important;
  max-height:28px !important;
}

#team.founder-flip-section .flip-founder-card{
  max-width:330px !important;
  min-height:450px !important;
}

#team.founder-flip-section .flip-founder-inner,
#team.founder-flip-section .flip-founder-front,
#team.founder-flip-section .flip-founder-back{
  min-height:450px !important;
}

#team.founder-flip-section .flip-founder-back h3{
  font-size:22px !important;
  white-space:normal !important;
  line-height:1.15 !important;
}

#team.founder-flip-section .flip-founder-back p{
  font-size:12.5px !important;
  white-space:normal !important;
  line-height:1.6 !important;
}


/* V70 - Founder Cards Exact Compact Bottom Design */

/* Larger photo area, compact info bar */
#team.founder-exact-v70 .founder-flip-grid{
  display:grid !important;
  grid-template-columns:repeat(3, minmax(300px, 360px)) !important;
  gap:36px !important;
  justify-content:center !important;
  align-items:stretch !important;
}

#team.founder-exact-v70 .flip-founder-card{
  max-width:360px !important;
  width:100% !important;
  height:500px !important;
  min-height:500px !important;
  border-radius:28px !important;
}

#team.founder-exact-v70 .flip-founder-inner,
#team.founder-exact-v70 .flip-founder-front,
#team.founder-exact-v70 .flip-founder-back{
  height:500px !important;
  min-height:500px !important;
  border-radius:28px !important;
  overflow:hidden !important;
}

#team.founder-exact-v70 .flip-founder-front{
  position:relative !important;
  background:#111827 !important;
}

#team.founder-exact-v70 .flip-founder-front img,
#team.founder-exact-v70 .flip-founder-photo img,
#team.founder-exact-v70 .flip-founder-card img{
  width:100% !important;
  height:100% !important;
  object-fit:cover !important;
  object-position:center top !important;
  display:block !important;
}

/* The actual compact glass panel */
#team.founder-exact-v70 .flip-founder-front .flip-founder-content,
#team.founder-exact-v70 .flip-founder-front .flip-founder-info,
#team.founder-exact-v70 .flip-founder-front .founder-content,
#team.founder-exact-v70 .flip-founder-front .glass-card,
#team.founder-exact-v70 .flip-founder-content,
#team.founder-exact-v70 .flip-founder-info{
  position:absolute !important;
  left:20px !important;
  right:20px !important;
  bottom:20px !important;

  width:auto !important;
  max-width:none !important;
  height:102px !important;
  min-height:102px !important;
  max-height:102px !important;

  padding:14px 16px !important;
  border-radius:20px !important;

  display:grid !important;
  grid-template-columns:minmax(0,1fr) 34px !important;
  grid-template-rows:24px 18px 30px !important;
  column-gap:12px !important;
  row-gap:3px !important;
  align-items:center !important;

  background:rgba(10,17,30,.68) !important;
  border:1px solid rgba(255,255,255,.18) !important;
  box-shadow:0 18px 45px rgba(0,0,0,.24) !important;
  backdrop-filter:blur(16px) !important;
  overflow:hidden !important;
}

/* Name single line */
#team.founder-exact-v70 .flip-founder-front h3,
#team.founder-exact-v70 .flip-founder-content h3,
#team.founder-exact-v70 .flip-founder-info h3{
  grid-column:1 / 2 !important;
  grid-row:1 / 2 !important;
  display:block !important;

  font-size:19px !important;
  line-height:1.05 !important;
  font-weight:800 !important;
  letter-spacing:-.02em !important;

  color:#fff !important;
  margin:0 !important;
  padding:0 !important;

  white-space:nowrap !important;
  word-break:normal !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:100% !important;
  min-width:0 !important;
}

/* remove all line breaks in front name/designation */
#team.founder-exact-v70 .flip-founder-front h3 br,
#team.founder-exact-v70 .flip-founder-content h3 br,
#team.founder-exact-v70 .flip-founder-info h3 br,
#team.founder-exact-v70 .flip-founder-front p br,
#team.founder-exact-v70 .flip-founder-content p br,
#team.founder-exact-v70 .flip-founder-info p br{
  display:none !important;
}

/* Designation single line */
#team.founder-exact-v70 .flip-founder-front p,
#team.founder-exact-v70 .flip-founder-content p,
#team.founder-exact-v70 .flip-founder-info p{
  grid-column:1 / 2 !important;
  grid-row:2 / 3 !important;
  display:block !important;

  font-size:13px !important;
  line-height:1.05 !important;
  font-weight:800 !important;

  color:#a7f3b8 !important;
  margin:0 !important;
  padding:0 !important;

  white-space:nowrap !important;
  word-break:normal !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  max-width:100% !important;
  min-width:0 !important;
}

/* LinkedIn small like mockup */
#team.founder-exact-v70 .flip-founder-front a[href*="linkedin"],
#team.founder-exact-v70 .flip-founder-front .flip-founder-linkedin,
#team.founder-exact-v70 .flip-founder-front .flip-founder-social,
#team.founder-exact-v70 .flip-founder-content .linkedin,
#team.founder-exact-v70 .flip-founder-info .linkedin{
  grid-column:2 / 3 !important;
  grid-row:1 / 3 !important;

  width:34px !important;
  height:34px !important;
  min-width:34px !important;
  max-width:34px !important;

  border-radius:9px !important;
  font-size:13px !important;
  line-height:1 !important;

  justify-self:end !important;
  align-self:center !important;
  display:grid !important;
  place-items:center !important;

  background:#9df58e !important;
  color:#0f172a !important;
  padding:0 !important;
  margin:0 !important;
}

/* Know More button compact and right aligned bottom */
#team.founder-exact-v70 .flip-founder-front .flip-founder-btn,
#team.founder-exact-v70 .flip-founder-front button,
#team.founder-exact-v70 .flip-founder-front .know-more,
#team.founder-exact-v70 .flip-founder-content .flip-founder-btn,
#team.founder-exact-v70 .flip-founder-info .flip-founder-btn{
  grid-column:2 / 3 !important;
  grid-row:3 / 4 !important;

  justify-self:end !important;
  align-self:center !important;

  min-width:112px !important;
  max-width:120px !important;
  height:30px !important;
  padding:0 13px !important;

  border-radius:999px !important;
  font-size:11px !important;
  line-height:1 !important;
  font-weight:800 !important;
  white-space:nowrap !important;

  margin:0 !important;
}

/* If button cannot fit in col 2, make it absolute bottom right */
#team.founder-exact-v70 .flip-founder-front .flip-founder-btn,
#team.founder-exact-v70 .flip-founder-content .flip-founder-btn,
#team.founder-exact-v70 .flip-founder-info .flip-founder-btn{
  position:absolute !important;
  right:14px !important;
  bottom:14px !important;
}

/* Keep name/designation area wide despite right-side button */
#team.founder-exact-v70 .flip-founder-content *{
  min-width:0 !important;
}

/* Back side readable */
#team.founder-exact-v70 .flip-founder-back{
  padding:28px !important;
}

#team.founder-exact-v70 .flip-founder-back h3{
  font-size:24px !important;
  line-height:1.16 !important;
  color:#fff !important;
  margin-bottom:12px !important;
  white-space:normal !important;
}

#team.founder-exact-v70 .flip-founder-back p{
  font-size:13px !important;
  line-height:1.65 !important;
  font-weight:500 !important;
  white-space:normal !important;
  color:rgba(255,255,255,.78) !important;
}

/* Responsive */
@media(max-width:1120px){
  #team.founder-exact-v70 .founder-flip-grid{
    grid-template-columns:repeat(3, minmax(270px, 320px)) !important;
    gap:24px !important;
  }

  #team.founder-exact-v70 .flip-founder-card,
  #team.founder-exact-v70 .flip-founder-inner,
  #team.founder-exact-v70 .flip-founder-front,
  #team.founder-exact-v70 .flip-founder-back{
    height:460px !important;
    min-height:460px !important;
  }

  #team.founder-exact-v70 .flip-founder-front h3,
  #team.founder-exact-v70 .flip-founder-content h3,
  #team.founder-exact-v70 .flip-founder-info h3{
    font-size:17px !important;
  }

  #team.founder-exact-v70 .flip-founder-front p,
  #team.founder-exact-v70 .flip-founder-content p,
  #team.founder-exact-v70 .flip-founder-info p{
    font-size:12px !important;
  }
}

@media(max-width:840px){
  #team.founder-exact-v70 .founder-flip-grid{
    grid-template-columns:1fr !important;
  }

  #team.founder-exact-v70 .flip-founder-card{
    max-width:360px !important;
    margin:auto !important;
  }
}


/* V72 - Final requested fixes */
#team.founder-v72 .flip-founder-card{perspective:1200px!important;cursor:pointer!important;max-width:300px!important;width:100%!important;height:400px!important;min-height:400px!important;border-radius:26px!important;}
#team.founder-v72 .flip-founder-inner{position:relative!important;width:100%!important;height:100%!important;min-height:400px!important;transition:transform .7s cubic-bezier(.2,.8,.2,1)!important;transform-style:preserve-3d!important;}
#team.founder-v72 .flip-founder-card.flipped .flip-founder-inner,#team.founder-v72 .flip-founder-card:hover .flip-founder-inner{ transform:none !important; }
#team.founder-v72 .flip-founder-front,#team.founder-v72 .flip-founder-back{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:400px!important;border-radius:26px!important;overflow:hidden!important;backface-visibility:hidden!important;-webkit-backface-visibility:hidden!important;}
#team.founder-v72 .flip-founder-back{transform:rotateY(180deg)!important;background:linear-gradient(135deg,#102B5C,#071C3D)!important;padding:24px!important;display:flex!important;flex-direction:column!important;justify-content:center!important;}
#team.founder-v72 .flip-founder-front img,#team.founder-v72 .flip-founder-photo img,#team.founder-v72 .flip-founder-card img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center top!important;display:block!important;}
#team.founder-v72 .flip-founder-front .flip-founder-content,#team.founder-v72 .flip-founder-front .flip-founder-info,#team.founder-v72 .flip-founder-front .founder-content,#team.founder-v72 .flip-founder-front .glass-card,#team.founder-v72 .flip-founder-content,#team.founder-v72 .flip-founder-info{position:absolute!important;left:14px!important;right:14px!important;bottom:14px!important;width:auto!important;max-width:none!important;height:78px!important;min-height:78px!important;max-height:78px!important;padding:10px 12px!important;border-radius:18px!important;display:grid!important;grid-template-columns:minmax(0,1fr) 24px!important;grid-template-rows:24px 17px 24px!important;column-gap:8px!important;row-gap:1px!important;align-items:center!important;background:rgba(10,17,30,.66)!important;border:1px solid rgba(255,255,255,.18)!important;backdrop-filter:blur(14px)!important;overflow:hidden!important;}
#team.founder-v72 .flip-founder-front h3,#team.founder-v72 .flip-founder-content h3,#team.founder-v72 .flip-founder-info h3{grid-column:1/2!important;grid-row:1/2!important;font-size:20px!important;line-height:1!important;font-weight:800!important;letter-spacing:-.03em!important;color:#fff!important;margin:0!important;padding:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:100%!important;}
#team.founder-v72 .flip-founder-front h3 br,#team.founder-v72 .flip-founder-content h3 br,#team.founder-v72 .flip-founder-info h3 br,#team.founder-v72 .flip-founder-front p br,#team.founder-v72 .flip-founder-content p br,#team.founder-v72 .flip-founder-info p br{display:none!important;}
#team.founder-v72 .flip-founder-front p,#team.founder-v72 .flip-founder-content p,#team.founder-v72 .flip-founder-info p{grid-column:1/2!important;grid-row:2/3!important;font-size:10.5px!important;line-height:1!important;font-weight:800!important;color:#a7f3b8!important;margin:0!important;padding:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important;max-width:100%!important;}
#team.founder-v72 .flip-founder-front a[href*="linkedin"],#team.founder-v72 .flip-founder-front .flip-founder-linkedin,#team.founder-v72 .flip-founder-front .flip-founder-social,#team.founder-v72 .flip-founder-content .linkedin,#team.founder-v72 .flip-founder-info .linkedin{grid-column:2/3!important;grid-row:1/2!important;width:24px!important;height:24px!important;min-width:24px!important;max-width:24px!important;border-radius:7px!important;font-size:10px!important;justify-self:end!important;align-self:center!important;display:grid!important;place-items:center!important;background:#9df58e!important;color:#0f172a!important;padding:0!important;margin:0!important;}
#team.founder-v72 .flip-founder-front .flip-founder-btn,#team.founder-v72 .flip-founder-front button,#team.founder-v72 .flip-founder-front .know-more,#team.founder-v72 .flip-founder-content .flip-founder-btn,#team.founder-v72 .flip-founder-info .flip-founder-btn{grid-column:1/3!important;grid-row:3/4!important;justify-self:start!important;height:22px!important;min-width:78px!important;padding:0 9px!important;border-radius:999px!important;font-size:9.5px!important;line-height:1!important;font-weight:800!important;white-space:nowrap!important;margin:2px 0 0!important;}
#team.founder-v72 .flip-founder-back h3{font-size:22px!important;line-height:1.1!important;color:#fff!important;margin:0 0 12px!important;}
#team.founder-v72 .flip-founder-back p{font-size:12.5px!important;line-height:1.6!important;color:rgba(255,255,255,.78)!important;margin:0 0 12px!important;}
.associate-card h3{font-size:17px!important;line-height:1.15!important;}
.floating-whatsapp{height:44px!important;padding:0 13px!important;border-radius:999px!important;font-size:12.5px!important;gap:8px!important;box-shadow:0 14px 34px rgba(11,164,75,.22)!important;}
.floating-whatsapp i{font-size:16px!important;}.floating-whatsapp span{font-size:12.5px!important;font-weight:800!important;}
.app-qr-install{display:flex;align-items:center;gap:14px;margin-top:14px;padding:14px;border-radius:20px;background:#fff;border:1px solid rgba(30,74,168,.08);box-shadow:0 14px 34px rgba(8,36,92,.08);max-width:360px;}
.app-qr-box{width:78px;height:78px;min-width:78px;border-radius:14px;background:#f8fafc;display:grid;place-items:center;border:1px solid rgba(15,23,42,.08);}
.qr-pattern{width:58px;height:58px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px;}.qr-pattern span{background:#0f172a;border-radius:2px;}.qr-pattern span:nth-child(2),.qr-pattern span:nth-child(5),.qr-pattern span:nth-child(7),.qr-pattern span:nth-child(10),.qr-pattern span:nth-child(12),.qr-pattern span:nth-child(15){background:#16a34a;}.app-qr-install strong{display:block;color:var(--navy);font-size:14px;margin-bottom:4px;}.app-qr-install p{color:#64748b;font-size:12px;line-height:1.45;margin:0;}
@media(max-width:900px){#team.founder-v72 .founder-flip-grid{grid-template-columns:1fr!important;}#team.founder-v72 .flip-founder-card{max-width:300px!important;margin:auto!important;}.floating-whatsapp span{display:inline!important;}}


/* V73 - ACTUAL TEAM CLASSES FIX */
#team.founder-v73 .founder-flip-grid{display:grid!important;grid-template-columns:repeat(3,minmax(270px,300px))!important;gap:20px!important;justify-content:center!important;align-items:stretch!important}
#team.founder-v73 .flip-founder-card{max-width:300px!important;width:100%!important;height:400px!important;min-height:400px!important;perspective:1200px!important;cursor:default!important;border-radius:24px!important}
#team.founder-v73 .flip-founder-inner{width:100%!important;height:100%!important;min-height:400px!important;position:relative!important;transform-style:preserve-3d!important;transition:transform .7s cubic-bezier(.2,.8,.2,1)!important}
#team.founder-v73 .flip-founder-card.is-flipped .flip-founder-inner{transform:rotateY(180deg)!important}
#team.founder-v73 .flip-founder-card:hover .flip-founder-inner{ transform:none !important; }
#team.founder-v73 .flip-founder-card.flipped .flip-founder-inner{ transform:none !important; }
#team.founder-v73 .flip-founder-card.is-flipped.flipped .flip-founder-inner{transform:rotateY(180deg)!important}
#team.founder-v73 .flip-face,#team.founder-v73 .flip-front,#team.founder-v73 .flip-back{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;min-height:400px!important;border-radius:24px!important;overflow:hidden!important;backface-visibility:hidden!important;-webkit-backface-visibility:hidden!important}
#team.founder-v73 .flip-front{transform:rotateY(0deg)!important;background:#111827!important}
#team.founder-v73 .flip-back{transform:rotateY(180deg)!important;background:linear-gradient(135deg,#102B5C,#071C3D)!important;padding:24px!important;display:flex!important;flex-direction:column!important;justify-content:center!important}
#team.founder-v73 .flip-photo,#team.founder-v73 .flip-photo img{width:100%!important;height:100%!important}
#team.founder-v73 .flip-photo img{object-fit:cover!important;object-position:center top!important;display:block!important}
#team.founder-v73 .flip-front-info{position:absolute!important;left:12px!important;right:12px!important;bottom:12px!important;height:64px!important;min-height:64px!important;padding:8px 10px!important;border-radius:15px!important;background:rgba(10,17,30,.70)!important;border:1px solid rgba(255,255,255,.14)!important;backdrop-filter:blur(14px)!important;display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;overflow:hidden!important}
#team.founder-v73 .flip-front-info>div:first-child{min-width:0!important;flex:1 1 auto!important;overflow:hidden!important}
#team.founder-v73 .flip-front-info h3{font-size:20px!important;line-height:1!important;font-weight:800!important;color:#fff!important;margin:0 0 5px!important;padding:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
#team.founder-v73 .flip-front-info span{display:block!important;font-size:10.5px!important;line-height:1!important;font-weight:800!important;color:#a7f3b8!important;margin:0!important;padding:0!important;white-space:nowrap!important;overflow:hidden!important;text-overflow:ellipsis!important}
#team.founder-v73 .flip-actions-front{display:flex!important;align-items:center!important;gap:5px!important;flex-shrink:0!important}
#team.founder-v73 .flip-linkedin{width:24px!important;height:24px!important;min-width:24px!important;border-radius:7px!important;font-size:10px!important;display:grid!important;place-items:center!important;background:#9df58e!important;color:#0f172a!important;padding:0!important;margin:0!important}
#team.founder-v73 .know-more-btn{height:24px!important;min-width:76px!important;padding:0 8px!important;border-radius:999px!important;font-size:9px!important;line-height:1!important;font-weight:800!important;white-space:nowrap!important;cursor:pointer!important}
#team.founder-v73 .know-more-btn i{font-size:8px!important}
#team.founder-v73 .flip-back-tag{font-size:11px!important;color:#a7f3b8!important;font-weight:900!important;letter-spacing:.08em!important;text-transform:uppercase!important;margin-bottom:10px!important}
#team.founder-v73 .flip-back h3{font-size:24px!important;line-height:1.1!important;color:#fff!important;margin:0 0 10px!important}
#team.founder-v73 .flip-back p{font-size:13px!important;line-height:1.6!important;color:rgba(255,255,255,.78)!important;margin:0 0 14px!important}
#team.founder-v73 .flip-chips{display:flex!important;flex-wrap:wrap!important;gap:8px!important;margin-bottom:18px!important}
#team.founder-v73 .flip-chips span{padding:7px 10px!important;border-radius:999px!important;background:rgba(255,255,255,.10)!important;color:#fff!important;font-size:11px!important;font-weight:700!important}
#team.founder-v73 .flip-back-actions{display:flex!important;gap:10px!important;flex-wrap:wrap!important}
#team.founder-v73 .flip-back-btn,#team.founder-v73 .flip-cta{height:34px!important;padding:0 13px!important;border-radius:999px!important;font-size:12px!important;font-weight:800!important;display:inline-flex!important;align-items:center!important;gap:7px!important;cursor:pointer!important}
.associate-card h3{font-size:17px!important;line-height:1.15!important}
.floating-whatsapp{height:42px!important;padding:0 12px!important;border-radius:999px!important;font-size:12px!important;gap:7px!important}
.floating-whatsapp i{font-size:15px!important}.floating-whatsapp span{font-size:12px!important;font-weight:800!important}
.coded-feature-grid{grid-template-columns:1fr!important;gap:14px!important;max-width:520px!important}
.app-qr-install{display:flex;align-items:center;gap:14px;margin-top:14px;padding:14px;border-radius:20px;background:#fff;border:1px solid rgba(30,74,168,.08);box-shadow:0 14px 34px rgba(8,36,92,.08);max-width:380px}
.app-qr-box{width:78px;height:78px;min-width:78px;border-radius:14px;background:#f8fafc;display:grid;place-items:center;border:1px solid rgba(15,23,42,.08)}
.qr-pattern{width:58px;height:58px;display:grid;grid-template-columns:repeat(4,1fr);gap:4px}.qr-pattern span{background:#0f172a;border-radius:2px}.qr-pattern span:nth-child(2),.qr-pattern span:nth-child(5),.qr-pattern span:nth-child(7),.qr-pattern span:nth-child(10),.qr-pattern span:nth-child(12),.qr-pattern span:nth-child(15){background:#16a34a}
.app-qr-install strong{display:block;color:var(--navy);font-size:14px;margin-bottom:4px}.app-qr-install p{color:#64748b;font-size:12px;line-height:1.45;margin:0}
@media(max-width:980px){#team.founder-v73 .founder-flip-grid{grid-template-columns:1fr!important}#team.founder-v73 .flip-founder-card{max-width:300px!important;margin:auto!important}}

/* V74 - FINAL BUTTON ONLY FOUNDER FLIP FIX */

/* No hover flip anywhere */
#team.founder-v73 .flip-founder-card:hover .flip-founder-inner,
#team .flip-founder-card:hover .flip-founder-inner,
.flip-founder-card:hover .flip-founder-inner{
  transform:none !important;
}

/* Ignore old .flipped class completely */
#team.founder-v73 .flip-founder-card.flipped .flip-founder-inner,
#team .flip-founder-card.flipped .flip-founder-inner,
.flip-founder-card.flipped .flip-founder-inner{
  transform:none !important;
}

/* Only .is-flipped should rotate */
#team.founder-v73 .flip-founder-card.is-flipped .flip-founder-inner,
#team .flip-founder-card.is-flipped .flip-founder-inner,
.flip-founder-card.is-flipped .flip-founder-inner{
  transform:rotateY(180deg) !important;
}

#team .know-more-btn,
#team .flip-back-btn{
  pointer-events:auto !important;
  cursor:pointer !important;
  position:relative !important;
  z-index:20 !important;
}


/* V75 - FINAL Founder Flip Fix: No mirror, Know More only */

#team .flip-founder-card,
.flip-founder-card{
  perspective:none !important;
}

#team .flip-founder-inner,
.flip-founder-inner{
  position:relative !important;
  width:100% !important;
  height:100% !important;
  transform:none !important;
  transform-style:flat !important;
  transition:none !important;
}

#team .flip-founder-card:hover .flip-founder-inner,
#team .flip-founder-card.flipped .flip-founder-inner,
#team .flip-founder-card.is-flipped .flip-founder-inner,
.flip-founder-card:hover .flip-founder-inner,
.flip-founder-card.flipped .flip-founder-inner,
.flip-founder-card.is-flipped .flip-founder-inner{
  transform:none !important;
}

#team .flip-face,
#team .flip-front,
#team .flip-back,
.flip-face,
.flip-front,
.flip-back{
  position:absolute !important;
  inset:0 !important;
  width:100% !important;
  height:100% !important;
  min-height:inherit !important;
  border-radius:24px !important;
  overflow:hidden !important;
  transform:none !important;
  backface-visibility:visible !important;
  -webkit-backface-visibility:visible !important;
  transition:opacity .32s ease, visibility .32s ease !important;
}

#team .flip-front,
.flip-front{
  z-index:2 !important;
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
}

#team .flip-back,
.flip-back{
  z-index:1 !important;
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  background:linear-gradient(135deg,#102B5C,#071C3D) !important;
  color:#fff !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
  padding:24px !important;
}

#team .flip-founder-card.is-flipped .flip-front,
.flip-founder-card.is-flipped .flip-front{
  z-index:1 !important;
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
}

#team .flip-founder-card.is-flipped .flip-back,
.flip-founder-card.is-flipped .flip-back{
  z-index:5 !important;
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
}

#team .flip-front-info{
  height:64px !important;
  padding:8px 10px !important;
  border-radius:15px !important;
}

#team .flip-front-info h3{
  font-size:20px !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

#team .flip-front-info span{
  font-size:10.5px !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

#team .flip-linkedin{
  width:24px !important;
  height:24px !important;
  min-width:24px !important;
  font-size:10px !important;
}

#team .know-more-btn{
  height:24px !important;
  min-width:76px !important;
  padding:0 8px !important;
  font-size:9px !important;
  position:relative !important;
  z-index:20 !important;
}

#team .flip-back-btn{
  position:relative !important;
  z-index:20 !important;
}
/* TEAM SECTION FRESH FINAL FIX */

#team .founder-flip-grid{
  display:grid !important;
  grid-template-columns:repeat(3, 300px) !important;
  gap:20px !important;
  justify-content:center !important;
}

#team .flip-founder-card{
  width:300px !important;
  height:400px !important;
  min-height:400px !important;
  border-radius:24px !important;
  overflow:hidden !important;
  position:relative !important;
  perspective:none !important;
}

#team .flip-founder-inner{
  width:100% !important;
  height:100% !important;
  min-height:400px !important;
  position:relative !important;
  transform:none !important;
  transition:none !important;
}

#team .flip-face,
#team .flip-front,
#team .flip-back{
  position:absolute !important;
  inset:0 !important;
  width:100% !important;
  height:100% !important;
  min-height:400px !important;
  border-radius:24px !important;
  overflow:hidden !important;
  transform:none !important;
  backface-visibility:visible !important;
  opacity:1 !important;
  visibility:visible !important;
}

#team .flip-front{
  z-index:2 !important;
  background:#111827 !important;
}

#team .flip-back{
  z-index:1 !important;
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  background:linear-gradient(135deg,#061833,#08245c) !important;
  color:#fff !important;
  padding:26px !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
}

#team .flip-founder-card.is-flipped .flip-front{
  opacity:0 !important;
  visibility:hidden !important;
  pointer-events:none !important;
  z-index:1 !important;
}

#team .flip-founder-card.is-flipped .flip-back{
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
  z-index:5 !important;
}

#team .flip-photo,
#team .flip-photo img{
  width:100% !important;
  height:100% !important;
}

#team .flip-photo img{
  object-fit:cover !important;
  object-position:center top !important;
}

#team .flip-front:after{
  content:"" !important;
  position:absolute !important;
  inset:0 !important;
  background:linear-gradient(to top,rgba(4,14,32,.82),rgba(4,14,32,.24),transparent) !important;
  z-index:1 !important;
}

#team .flip-front-info{
  position:absolute !important;
  left:12px !important;
  right:12px !important;
  bottom:12px !important;
  height:64px !important;
  padding:8px 10px !important;
  border-radius:16px !important;
  z-index:3 !important;
  background:rgba(10,17,30,.72) !important;
  border:1px solid rgba(255,255,255,.16) !important;
  backdrop-filter:blur(14px) !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:8px !important;
}

#team .flip-front-info > div:first-child{
  min-width:0 !important;
  overflow:hidden !important;
}

#team .flip-front-info h3{
  font-size:20px !important;
  line-height:1 !important;
  color:#fff !important;
  margin:0 0 5px !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}

#team .flip-front-info span{
  display:block !important;
  font-size:10.5px !important;
  line-height:1 !important;
  color:#a7f3b8 !important;
  font-weight:800 !important;
  white-space:nowrap !important;
}

#team .flip-actions-front{
  display:flex !important;
  align-items:center !important;
  gap:5px !important;
  flex-shrink:0 !important;
}

#team .flip-linkedin{
  width:24px !important;
  height:24px !important;
  min-width:24px !important;
  border-radius:7px !important;
  font-size:10px !important;
  display:grid !important;
  place-items:center !important;
  background:#9df58e !important;
  color:#061833 !important;
}

#team .know-more-btn{
  height:24px !important;
  min-width:76px !important;
  padding:0 8px !important;
  border-radius:999px !important;
  font-size:9px !important;
  font-weight:800 !important;
  cursor:pointer !important;
}

#team .flip-back *{
  color:inherit !important;
  opacity:1 !important;
  visibility:visible !important;
}

#team .flip-back-tag{
  width:max-content !important;
  padding:8px 12px !important;
  border-radius:999px !important;
  background:rgba(11,164,75,.18) !important;
  color:#9effc3 !important;
  font-size:11px !important;
  font-weight:900 !important;
  margin-bottom:18px !important;
}

#team .flip-back h3{
  font-size:28px !important;
  line-height:1.1 !important;
  color:#fff !important;
  margin:0 0 12px !important;
}

#team .flip-back p{
  font-size:13px !important;
  line-height:1.65 !important;
  color:rgba(255,255,255,.78) !important;
  margin:0 0 18px !important;
}

#team .flip-chips{
  display:flex !important;
  flex-wrap:wrap !important;
  gap:8px !important;
  margin-bottom:22px !important;
}

#team .flip-chips span{
  padding:7px 10px !important;
  border-radius:999px !important;
  background:rgba(255,255,255,.12) !important;
  color:#fff !important;
  font-size:11px !important;
  font-weight:800 !important;
}

#team .flip-back-actions{
  display:flex !important;
  gap:10px !important;
  flex-wrap:wrap !important;
}

#team .flip-back-btn,
#team .flip-cta{
  height:34px !important;
  padding:0 13px !important;
  border-radius:999px !important;
  font-size:12px !important;
  font-weight:800 !important;
  display:inline-flex !important;
  align-items:center !important;
  gap:7px !important;
}

@media(max-width:980px){
  #team .founder-flip-grid{
    grid-template-columns:1fr !important;
  }

  #team .flip-founder-card{
    margin:auto !important;
  }
}
/* FORCE TEAM CARD BACK SIDE */

#team .flip-founder-card.is-flipped .flip-front{
    display:none !important;
}

#team .flip-founder-card.is-flipped .flip-back{
    display:flex !important;
    opacity:1 !important;
    visibility:visible !important;
    z-index:999 !important;
    background:#071b38 !important;
    color:#ffffff !important;
}

#team .flip-back{
    display:none !important;
}

#team .flip-back h3,
#team .flip-back p,
#team .flip-back span,
#team .flip-back a,
#team .flip-back button{
    color:#ffffff !important;
}

/* TEAM BACK CONTENT FORCE FIX */

#team .flip-back{
  display:none !important;
}

#team .flip-founder-card.is-flipped .flip-front{
  display:none !important;
}

#team .flip-founder-card.is-flipped .flip-back{
  display:flex !important;
  position:absolute !important;
  inset:0 !important;
  width:100% !important;
  height:100% !important;
  z-index:999 !important;
  opacity:1 !important;
  visibility:visible !important;
  pointer-events:auto !important;
  background:linear-gradient(135deg,#061833,#08245c) !important;
  color:#ffffff !important;
  padding:26px !important;
  flex-direction:column !important;
  justify-content:center !important;
  border-radius:24px !important;
}

#team .flip-founder-card.is-flipped .flip-back *{
  display:revert !important;
  color:inherit !important;
  opacity:1 !important;
  visibility:visible !important;
}

#team .flip-founder-card.is-flipped .flip-back .flip-chips{
  display:flex !important;
}

#team .flip-founder-card.is-flipped .flip-back .flip-back-actions{
  display:flex !important;
}

/* FINAL TEAM BACK OVERLAY - BYPASS OLD FLIP CSS */

#team .flip-founder-card{
  position:relative !important;
  overflow:hidden !important;
}

#team .team-back-overlay{
  position:absolute !important;
  inset:0 !important;
  z-index:99999 !important;
  width:100% !important;
  height:100% !important;
  border-radius:24px !important;
  padding:26px !important;
  background:linear-gradient(135deg,#061833,#08245c) !important;
  color:#fff !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
  opacity:1 !important;
  visibility:visible !important;
  transform:none !important;
}

#team .team-back-overlay *{
  opacity:1 !important;
  visibility:visible !important;
  color:inherit !important;
}

#team .team-back-overlay .flip-back-tag{
  display:inline-flex !important;
  width:max-content !important;
  padding:8px 12px !important;
  border-radius:999px !important;
  background:rgba(11,164,75,.18) !important;
  color:#9effc3 !important;
  font-size:11px !important;
  font-weight:900 !important;
  margin-bottom:18px !important;
}

#team .team-back-overlay h3{
  display:block !important;
  font-size:28px !important;
  line-height:1.1 !important;
  color:#fff !important;
  margin:0 0 12px !important;
}

#team .team-back-overlay p{
  display:block !important;
  font-size:13px !important;
  line-height:1.65 !important;
  color:rgba(255,255,255,.78) !important;
  margin:0 0 18px !important;
}

#team .team-back-overlay .flip-chips{
  display:flex !important;
  flex-wrap:wrap !important;
  gap:8px !important;
  margin-bottom:22px !important;
}

#team .team-back-overlay .flip-chips span{
  display:inline-flex !important;
  padding:7px 10px !important;
  border-radius:999px !important;
  background:rgba(255,255,255,.12) !important;
  color:#fff !important;
  font-size:11px !important;
  font-weight:800 !important;
}

#team .team-back-overlay .flip-back-actions{
  display:flex !important;
  gap:10px !important;
  flex-wrap:wrap !important;
}

#team .team-back-overlay .flip-back-btn,
#team .team-back-overlay .flip-cta{
  height:34px !important;
  padding:0 13px !important;
  border-radius:999px !important;
  font-size:12px !important;
  font-weight:800 !important;
  display:inline-flex !important;
  align-items:center !important;
  gap:7px !important;
  background:rgba(255,255,255,.10) !important;
  border:1px solid rgba(255,255,255,.16) !important;
  color:#fff !important;
  cursor:pointer !important;
}
/* FINAL TEAM CARD SWITCH FIX */

#team .flip-founder-card{
  position:relative !important;
  width:300px !important;
  height:400px !important;
  min-height:400px !important;
  border-radius:24px !important;
  overflow:hidden !important;
  background:#071b38 !important;
}

#team .flip-founder-inner{
  position:relative !important;
  width:100% !important;
  height:100% !important;
  transform:none !important;
}

#team .flip-front,
#team .flip-back{
  position:absolute !important;
  inset:0 !important;
  width:100% !important;
  height:100% !important;
  transform:none !important;
  border-radius:24px !important;
  overflow:hidden !important;
}

#team .flip-front{
  display:block !important;
  z-index:2 !important;
}

#team .flip-back{
  display:none !important;
  z-index:5 !important;
  background:linear-gradient(135deg,#061833,#08245c) !important;
  color:#fff !important;
  padding:28px !important;
  flex-direction:column !important;
  justify-content:center !important;
}

#team .flip-founder-card.is-flipped .flip-front{
  display:none !important;
}

#team .flip-founder-card.is-flipped .flip-back{
  display:flex !important;
}

#team .flip-back *{
  color:#fff !important;
  opacity:1 !important;
  visibility:visible !important;
}

#team .flip-back-tag{
  color:#9effc3 !important;
}

#team .flip-chips span{
  background:rgba(255,255,255,.12) !important;
}

/* TEAM FINAL OVERLAY FIX */

#team .flip-back{
  display:none !important;
}

#team .flip-founder-card{
  position:relative !important;
  overflow:hidden !important;
}

#team .team-back-overlay{
  position:absolute !important;
  inset:0 !important;
  z-index:999 !important;
  border-radius:24px !important;
  background:linear-gradient(135deg,#061833,#08245c) !important;
  color:#fff !important;
  padding:28px !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
}

#team .team-back-overlay *{
  color:#fff !important;
  opacity:1 !important;
  visibility:visible !important;
}

#team .team-back-overlay .flip-back-tag{
  width:max-content !important;
  padding:8px 12px !important;
  border-radius:999px !important;
  background:rgba(11,164,75,.18) !important;
  color:#9effc3 !important;
  font-size:11px !important;
  font-weight:900 !important;
  margin-bottom:18px !important;
}

#team .team-back-overlay h3{
  font-size:28px !important;
  margin:0 0 12px !important;
}

#team .team-back-overlay p{
  font-size:13px !important;
  line-height:1.65 !important;
  color:rgba(255,255,255,.78) !important;
  margin-bottom:18px !important;
}

#team .team-back-overlay .flip-chips{
  display:flex !important;
  flex-wrap:wrap !important;
  gap:8px !important;
  margin-bottom:22px !important;
}

#team .team-back-overlay .flip-chips span{
  padding:7px 10px !important;
  border-radius:999px !important;
  background:rgba(255,255,255,.12) !important;
  font-size:11px !important;
  font-weight:800 !important;
}

#team .team-overlay-back-btn,
#team .team-back-overlay .flip-cta{
  height:34px !important;
  padding:0 13px !important;
  border-radius:999px !important;
  font-size:12px !important;
  font-weight:800 !important;
  display:inline-flex !important;
  align-items:center !important;
  gap:7px !important;
  background:rgba(255,255,255,.10) !important;
  border:1px solid rgba(255,255,255,.14) !important;
}
.founder-flip-grid{
    justify-content:center;
}
.flip-founder-card{
    transition:all .35s ease;
}

.flip-founder-card:hover{
    transform:translateY(-8px);
}
.flip-linkedin:hover{
    transform:scale(1.08);
}
.show-founder-info{
    box-shadow:
        0 0 0 1px rgba(134,239,172,.25),
        0 20px 40px rgba(34,197,94,.15);
}
/* Slow smooth founder info reveal */

#team .team-back-overlay{
  opacity:0;
  transform:rotateY(8deg) scale(.96);
  transform-origin:center;
  transition:
    opacity .65s ease,
    transform .65s cubic-bezier(.22,.61,.36,1);
}

#team .flip-founder-card.show-founder-info .team-back-overlay{
  opacity:1;
  transform:rotateY(0deg) scale(1);
}

#team .flip-front{
  transition:
    opacity .55s ease,
    transform .65s cubic-bezier(.22,.61,.36,1);
}

#team .flip-founder-card.show-founder-info .flip-front{
  opacity:0;
  transform:rotateY(-8deg) scale(.96);
}
/* Slow premium founder reveal */

#team .team-back-overlay{
  opacity:0 !important;
  transform:scale(.94) rotateY(12deg) !important;
  transform-origin:center !important;
  transition:opacity .8s ease, transform .8s cubic-bezier(.22,.61,.36,1) !important;
}

#team .flip-founder-card.show-founder-info .team-back-overlay{
  opacity:1 !important;
  transform:scale(1) rotateY(0deg) !important;
}

#team .flip-founder-card .flip-front{
  opacity:1 !important;
  transform:scale(1) rotateY(0deg) !important;
  transition:opacity .65s ease, transform .8s cubic-bezier(.22,.61,.36,1) !important;
}

#team .flip-founder-card.show-founder-info .flip-front{
  opacity:0 !important;
  transform:scale(.96) rotateY(-10deg) !important;
}
.flip-founder-card{
    transition: transform .35s ease;
}

.flip-founder-card:hover{
    transform: translateY(-8px);
}
.flip-front img{
    transition: all .8s ease;
}

.flip-founder-card.show-founder-info .flip-front img{
    filter: blur(4px);
    transform: scale(1.05);
}
.flip-founder-card.show-founder-info{
    box-shadow:
        0 0 0 1px rgba(134,239,172,.25),
        0 25px 50px rgba(34,197,94,.18);
}
.associate-avatar{
    width:120px;
    height:120px;
    margin:0 auto 20px;
    border-radius:50%;
    overflow:hidden;
    border:3px solid rgba(255,255,255,.15);
}

.associate-avatar img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
}
.associate-card:hover .associate-avatar img{
    transform:scale(1.08);
}

.associate-avatar img{
    transition:.4s ease;
}
.sticky-image {
    position: sticky;
    top: -1;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.sticky-image img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.sticky-image:hover img {
    transform: scale(1.03);
}

/* ==========================
   Calculator View All CTA
========================== */

.calculator-view-all {
    text-align: center;
    margin-top: 50px;
}

.calculator-view-all .btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 16px 32px;
    border-radius: 50px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    transition: all 0.35s ease;
}

/* Outline Style */
.calculator-view-all .btn-outline {
    background: #fff;
    color: #0BA44B;
    border: 2px solid #0BA44B;
    box-shadow: 0 10px 25px rgba(11, 164, 75, 0.08);
}

.calculator-view-all .btn-outline:hover {
    background: #0BA44B;
    color: #fff;
    transform: translateY(-4px);
    box-shadow: 0 18px 35px rgba(11, 164, 75, 0.25);
}

.calculator-view-all .btn i {
    transition: transform 0.3s ease;
}

.calculator-view-all .btn:hover i {
    transform: translateX(5px);
}

/* Mobile */
@media (max-width: 768px) {
    .calculator-view-all {
        margin-top: 35px;
    }

    .calculator-view-all .btn {
        width: 100%;
        justify-content: center;
        padding: 15px 20px;
    }
}
/* ===============================
   Premium Lead Contact Section
================================ */

.premium-contact-section {
    padding: 100px 0;
    background:
        radial-gradient(circle at 10% 20%, rgba(11,164,75,.08), transparent 28%),
        radial-gradient(circle at 90% 80%, rgba(30,74,168,.08), transparent 30%),
        linear-gradient(180deg, #ffffff, #f7fbff);
}

.contact-header {
    max-width: 780px;
    margin: 0 auto 55px;
    text-align: center;
}

.contact-header h2 {
    font-family: "Plus Jakarta Sans", Inter, sans-serif;
    font-size: clamp(36px, 4.5vw, 58px);
    line-height: 1.08;
    letter-spacing: -0.055em;
    color: var(--navy);
    margin-bottom: 18px;
}

.contact-header h2 span {
    color: var(--green);
}

.contact-header p {
    color: #64748b;
    font-size: 17px;
    line-height: 1.8;
}

.contact-grid {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 30px;
    align-items: stretch;
}

.contact-info-card,
.contact-form-card {
    border-radius: 34px;
    padding: 40px;
    box-shadow: 0 24px 70px rgba(8,36,92,.11);
}

.contact-info-card {
    background:
        radial-gradient(circle at 20% 20%, rgba(11,164,75,.20), transparent 32%),
        linear-gradient(135deg, #061833, #08245c);
    color: #fff;
}

.contact-info-card h3,
.contact-form-card h3 {
    font-family: "Plus Jakarta Sans", Inter, sans-serif;
    font-size: 30px;
    letter-spacing: -0.04em;
    margin-bottom: 26px;
}

.contact-benefits {
    display: grid;
    gap: 16px;
    margin-bottom: 34px;
}

.benefit-item {
    display: flex;
    align-items: center;
    gap: 14px;
    font-weight: 800;
    color: rgba(255,255,255,.86);
}

.benefit-item i {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    background: rgba(158,255,195,.16);
    color: #9effc3;
    font-size: 12px;
}

.contact-trust {
    display: flex;
    align-items: center;
    gap: 18px;
    padding: 22px;
    border-radius: 24px;
    background: rgba(255,255,255,.09);
    border: 1px solid rgba(255,255,255,.12);
    margin-bottom: 28px;
}

.trust-number {
    font-family: "Plus Jakarta Sans", Inter, sans-serif;
    font-size: 42px;
    font-weight: 900;
    letter-spacing: -0.05em;
    color: #9effc3;
}

.contact-details {
    display: grid;
    gap: 14px;
}

.contact-details a {
    display: flex;
    align-items: center;
    gap: 14px;
    color: rgba(255,255,255,.82);
    font-weight: 800;
}

.contact-details i {
    color: #9effc3;
}

.contact-form-card {
    background: #ffffff;
    border: 1px solid rgba(30,74,168,.09);
}

.contact-form-card h3 {
    color: var(--navy);
}

#consultationForm {
    display: grid;
    gap: 16px;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    border: 1px solid rgba(30,74,168,.12);
    background: #f8fbff;
    border-radius: 18px;
    padding: 16px 18px;
    font: inherit;
    outline: none;
    transition: .25s ease;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--green);
    background: #fff;
    box-shadow: 0 0 0 4px rgba(11,164,75,.09);
}

.contact-submit-btn {
    margin-top: 8px;
    border: 0;
    border-radius: 999px;
    padding: 17px 24px;
    background: linear-gradient(135deg, var(--brand-blue), var(--green));
    color: #fff;
    font-weight: 900;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: .28s ease;
    box-shadow: 0 18px 40px rgba(11,164,75,.24);
}

.contact-submit-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 24px 50px rgba(11,164,75,.32);
}

@media (max-width: 900px) {
    .contact-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .premium-contact-section {
        padding: 75px 0;
    }

    .contact-info-card,
    .contact-form-card {
        padding: 28px;
        border-radius: 26px;
    }

    .contact-trust {
        align-items: flex-start;
        flex-direction: column;
    }
}

.contact-cta-section {
    padding: 100px 0;
    background: #f8fbff;
}

.contact-wrapper {

    display: grid;
    grid-template-columns: 1fr auto 1.2fr;

    background: white;

    border-radius: 32px;

    padding: 55px;

    box-shadow:
        0 15px 50px rgba(0,0,0,.06);

    align-items: center;

    gap: 40px;
}

.contact-left h2 {

    font-size: 46px;

    line-height: 1.1;

    color: var(--navy);

    margin: 20px 0;
}

.contact-left h2 span {
    color: var(--green);
}

.contact-left p {

    color: #64748b;

    line-height: 1.8;

    margin-bottom: 35px;
}

.contact-tag {

    background: rgba(11,164,75,.1);

    color: var(--green);

    padding: 8px 18px;

    border-radius: 50px;

    font-size: 14px;

    font-weight: 700;
}

.contact-highlights {

    display: flex;

    flex-direction: column;

    gap: 18px;

    margin-bottom: 35px;
}

.highlight-item {

    display: flex;

    align-items: center;

    gap: 12px;

    font-weight: 600;
}

.highlight-item i {
    color: var(--green);
}

.contact-info {

    display: flex;

    flex-direction: column;

    gap: 15px;

    color: var(--navy);

    font-weight: 600;
}

.contact-info div {

    display: flex;

    align-items: center;

    gap: 12px;
}

.contact-info i {
    color: var(--green);
}

.contact-divider {

    width: 1px;

    height: 400px;

    background:
        linear-gradient(
            to bottom,
            transparent,
            rgba(0,0,0,.08),
            transparent
        );
}

.contact-right h3 {

    color: var(--navy);

    margin-bottom: 30px;

    font-size: 28px;
}

#consultationForm {

    display: flex;

    flex-direction: column;

    gap: 16px;
}

#consultationForm input,
#consultationForm select,
#consultationForm textarea {

    width: 100%;

    padding: 16px 18px;

    border-radius: 16px;

    border: 1px solid #e2e8f0;

    background: #fafcff;

    font-size: 15px;

    transition: .3s;
}

#consultationForm input:focus,
#consultationForm select:focus,
#consultationForm textarea:focus {

    outline: none;

    border-color: var(--green);

    box-shadow:
        0 0 0 3px rgba(11,164,75,.08);
}

.contact-submit-btn {

    margin-top: 10px;

    background:
        linear-gradient(
            135deg,
            var(--green),
            #0dc267
        );

    color: white;

    border: none;

    border-radius: 16px;

    padding: 18px;

    font-size: 16px;

    font-weight: 700;

    cursor: pointer;

    transition: .3s;
}

.contact-submit-btn:hover {

    transform: translateY(-2px);

    box-shadow:
        0 15px 30px rgba(11,164,75,.25);
}
@media(max-width:992px){

    .contact-wrapper{

        grid-template-columns:1fr;

        padding:35px;
    }

    .contact-divider{

        width:100%;

        height:1px;
    }

    .contact-left h2{

        font-size:36px;
    }
}

.partners-section {
    padding: 90px 0;
    background: #f8fbff;
}

.partners-header {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 50px;
}

.partners-header h2 {
    color: var(--navy);
    font-size: clamp(36px, 4vw, 52px);
    line-height: 1.1;
    margin: 20px 0;
}

.partners-header p {
    color: #64748b;
    line-height: 1.8;
}

.partners-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.partner-card {
    background: white;
    border-radius: 24px;
    padding: 30px;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 1px solid rgba(30,74,168,.08);

    box-shadow:
        0 15px 35px rgba(0,0,0,.04);

    transition: all .3s ease;
}

.partner-card:hover {
    transform: translateY(-6px);

    box-shadow:
        0 25px 45px rgba(0,0,0,.08);
}

.partner-card img {
    max-width: 140px;
    max-height: 50px;

    object-fit: contain;

    filter: grayscale(100%);
    opacity: 0.8;

    transition: all .3s ease;
}

.partner-card:hover img {
    filter: grayscale(0%);
    opacity: 1;
}

@media (max-width: 992px) {
    .partners-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 576px) {
    .partners-grid {
        grid-template-columns: 1fr;
    }
}
.stat-card:hover{
    transform: translateY(-10px);
    box-shadow: 0 30px 60px rgba(0,0,0,.15);
}

.stats-card {
    height: 220px;
    perspective: 1000px;
}

.stats-card-inner {
    position: relative;
    width: 100%;
    height: 100%;

    transition: transform 0.8s ease;

    transform-style: preserve-3d;
}

/* Flip ONLY on hover */
.stats-card:hover .stats-card-inner {
    transform: rotateY(180deg);
}

.stats-front,
.stats-back {

    position: absolute;

    inset: 0;

    border-radius: 28px;

    padding: 35px;

    backface-visibility: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.stats-front {

    background:
        linear-gradient(
            135deg,
            #0f3c86,
            #0ba44b
        );

    color: white;
}

.stats-back {

    background: white;

    border: 1px solid rgba(15,60,134,.12);

    color: #334155;

    transform: rotateY(180deg);

    box-shadow:
        0 20px 40px rgba(0,0,0,.08);
}

.stats-card.active .stats-card-inner {
    transform: rotateY(180deg);
}

/* V76 - Premium Stats Hover Flip */
.stats-grid{
  gap:18px !important;
  padding:20px !important;
  border-radius:34px !important;
}

.flip-stat{
  min-height:230px !important;
  perspective:1200px !important;
}

.stat-inner{
  min-height:230px !important;
  transition:transform .75s cubic-bezier(.2,.8,.2,1) !important;
}

.flip-stat.flip-show .stat-inner{
  transform:none !important;
}

.flip-stat:hover .stat-inner{
  transform:rotateY(180deg) !important;
}

.stat-face{
  padding:28px !important;
  border-radius:28px !important;
  backface-visibility:hidden !important;
  -webkit-backface-visibility:hidden !important;
}

.stat-front{
  background:
    radial-gradient(circle at 82% 18%,rgba(255,255,255,.20),transparent 22%),
    linear-gradient(135deg,#0f4f8f,#0ba44b) !important;
  color:#fff !important;
  display:flex !important;
  flex-direction:column !important;
  align-items:center !important;
  justify-content:center !important;
  text-align:center !important;
}

.stat-front .stat-icon{
  width:48px !important;
  height:48px !important;
  border-radius:16px !important;
  margin:0 0 14px !important;
  background:rgba(255,255,255,.16) !important;
  color:#fff !important;
  box-shadow:none !important;
}

.stat-front strong{
  color:#fff !important;
  font-size:48px !important;
  line-height:1 !important;
  margin-bottom:10px !important;
}

.stat-front span{
  color:#fff !important;
  font-size:20px !important;
  line-height:1.25 !important;
  font-weight:900 !important;
}

.stat-front small{
  display:none !important;
}

.stat-back{
  transform:rotateY(180deg) !important;
  background:
    radial-gradient(circle at 90% 15%,rgba(11,164,75,.12),transparent 28%),
    linear-gradient(180deg,#ffffff,#f7fbff) !important;
  border:1px solid rgba(30,74,168,.10) !important;
  color:#334155 !important;
  display:flex !important;
  flex-direction:column !important;
  justify-content:center !important;
  text-align:left !important;
  box-shadow:0 20px 55px rgba(8,36,92,.10) !important;
}

.stat-back .back-kicker{
  display:inline-flex;
  width:max-content;
  padding:7px 12px;
  border-radius:999px;
  background:rgba(11,164,75,.10);
  color:var(--green);
  font-size:11px;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:.08em;
  margin-bottom:14px;
}

.stat-back p{
  color:#334155 !important;
  font-size:18px !important;
  line-height:1.55 !important;
  font-weight:700 !important;
  margin:0;
}

.stat-back i{
  color:var(--green);
  font-size:28px;
  margin-bottom:16px;
}

@media(max-width:720px){
  .flip-stat:hover .stat-inner{
    transform:none !important;
  }

  .flip-stat.is-flipped .stat-inner{
    transform:rotateY(180deg) !important;
  }
}

/* ==========================================
   IMPACT SECTION
========================================== */

.impact-section {
    padding: 100px 0;
    background: #f8fafc;
}

.impact-header {
    text-align: center;
    max-width: 900px;
    margin: 0 auto 60px;
}

.impact-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 10px 18px;

    border-radius: 50px;

    background: rgba(11, 164, 75, 0.08);

    color: var(--green);

    font-size: 13px;
    font-weight: 700;
    letter-spacing: 1px;

    margin-bottom: 20px;
}

.impact-header h2 {
    font-size: clamp(40px, 4vw, 56px);

    color: var(--navy);

    font-weight: 800;

    margin-bottom: 20px;

    white-space: nowrap;
}

.impact-header p {
    font-size: 18px;

    color: #64748b;

    line-height: 1.8;
}


/* Cards */

.impact-grid {
    display: grid;

    grid-template-columns: repeat(4, 1fr);

    gap: 24px;
}

.impact-card {

    background: white;

    border-radius: 28px;

    padding: 28px;

    min-height: 260px;

    border: 1px solid rgba(15, 23, 42, 0.06);

    box-shadow:
        0 10px 35px rgba(15, 23, 42, 0.05);

    transition: all 0.35s ease;

    display: flex;
    flex-direction: column;
}

.impact-card:hover {

    transform: translateY(-10px);

    box-shadow:
        0 25px 50px rgba(15, 23, 42, 0.10);
}


/* Top */

.impact-top {

    display: flex;

    align-items: center;

    gap: 16px;

    margin-bottom: 30px;
}

.impact-icon {

    width: 62px;
    height: 62px;

    border-radius: 18px;

    background: rgba(11, 164, 75, 0.12);

    color: var(--green);

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 24px;
}

.impact-icon.blue {
    background: rgba(37, 99, 235, 0.10);
    color: #2563eb;
}

.impact-icon.green {
    background: rgba(16, 185, 129, 0.10);
    color: #10b981;
}

.impact-icon.orange {
    background: rgba(249, 115, 22, 0.10);
    color: #f97316;
}

.impact-number {

    font-size: 50px;

    font-weight: 800;

    color: var(--navy);

    line-height: 1;
}


/* Content */

.impact-card h3 {

    font-size: 24px;

    font-weight: 700;

    color: var(--navy);

    line-height: 1.3;

    margin-bottom: 18px;
}

.impact-divider {

    width: 55px;

    height: 4px;

    border-radius: 10px;

    background: linear-gradient(
        90deg,
        var(--green),
        var(--primary)
    );

    margin-bottom: 18px;
}

.impact-card p {

    color: #64748b;

    line-height: 1.7;

    font-size: 15px;

    margin: 0;
}


/* Responsive */

@media (max-width: 1100px) {

    .impact-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .impact-header h2 {
        white-space: normal;
    }
}

@media (max-width: 768px) {

    .impact-section {
        padding: 70px 0;
    }

    .impact-grid {
        grid-template-columns: 1fr;
    }

    .impact-header h2 {
        font-size: 34px;
    }

    .impact-card {
        min-height: auto;
    }
}

.app-qr-install {
    display: flex;
    align-items: center;
    gap: 22px;

    padding: 22px;

    border-radius: 24px;

    background: rgba(255, 255, 255, 0.06);

    border: 1px solid rgba(255, 255, 255, 0.12);

    backdrop-filter: blur(12px);
}

.app-qr-box {
    flex-shrink: 0;

    width: 110px;
    height: 110px;

    padding: 8px;

    background: white;

    border-radius: 20px;

    box-shadow: 0 12px 30px rgba(0,0,0,.12);
}

.app-qr-image {
    width: 100%;
    height: 100%;

    object-fit: contain;

    border-radius: 12px;
}

.app-qr-content strong {
    display: block;

    color: #ffffff;

    font-size: 18px;

    margin-bottom: 8px;
}

.app-qr-content p {
    color: rgba(255,255,255,.75);

    font-size: 14px;

    line-height: 1.6;

    margin-bottom: 14px;
}

.app-qr-badges {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.app-qr-badges span {
    display: inline-flex;
    align-items: center;
    gap: 6px;

    padding: 8px 12px;

    border-radius: 999px;

    background: rgba(255,255,255,.08);

    color: rgba(255,255,255,.9);

    font-size: 12px;
    font-weight: 700;
}

.app-qr-badges i {
    color: #9effc3;
}

@media (max-width: 768px) {
    .app-qr-install {
        flex-direction: column;
        text-align: center;
    }

    .app-qr-badges {
        justify-content: center;
    }
}

/* Compact QR Card Fix */
.compact-qr-card{
  width:430px !important;
  max-width:100% !important;
  min-height:auto !important;
  display:flex !important;
  flex-direction:row !important;
  align-items:center !important;
  gap:18px !important;
  padding:18px !important;
  border-radius:24px !important;
  background:rgba(255,255,255,.08) !important;
  border:1px solid rgba(255,255,255,.14) !important;
  box-shadow:0 18px 48px rgba(0,0,0,.18) !important;
}

.compact-qr-card .app-qr-box{
  width:118px !important;
  height:118px !important;
  min-width:118px !important;
  padding:8px !important;
  border-radius:20px !important;
  background:#fff !important;
}

.compact-qr-card .app-qr-image{
  width:100% !important;
  height:100% !important;
  object-fit:contain !important;
  border-radius:12px !important;
}

.compact-qr-card .app-qr-content{
  min-width:0 !important;
}

.compact-qr-card .app-qr-content span{
  display:inline-flex !important;
  padding:6px 10px !important;
  border-radius:999px !important;
  background:rgba(158,255,195,.12) !important;
  color:#9effc3 !important;
  font-size:11px !important;
  font-weight:900 !important;
  margin-bottom:8px !important;
}

.compact-qr-card .app-qr-content strong{
  display:block !important;
  color:#fff !important;
  font-size:20px !important;
  line-height:1.2 !important;
  margin-bottom:7px !important;
}

.compact-qr-card .app-qr-content p{
  color:rgba(255,255,255,.68) !important;
  font-size:13px !important;
  line-height:1.55 !important;
  margin:0 !important;
}

.compact-qr-card .app-qr-badges{
  display:none !important;
}

@media(max-width:520px){
  .compact-qr-card{
    width:100% !important;
    flex-direction:column !important;
    text-align:center !important;
  }
}

.mobile-access-card{
    margin-top:24px;

    display:flex;
    align-items:center;
    gap:16px;

    width:320px;
    max-width:100%;

    padding:16px 18px;

    border-radius:24px;

    background:
        linear-gradient(
            135deg,
            rgba(20,45,85,.95),
            rgba(28,103,92,.95)
        );

    border:1px solid rgba(158,255,195,.12);

    backdrop-filter:blur(20px);

    box-shadow:
        0 12px 35px rgba(0,0,0,.18);
}

.mobile-qr{
    width:82px;
    height:82px;

    flex-shrink:0;

    padding:6px;

    background:white;

    border-radius:18px;
}

.mobile-qr img{
    width:100%;
    height:100%;

    object-fit:contain;
}

.mobile-chip{
    display:inline-flex;
    align-items:center;
    gap:5px;

    padding:4px 10px;

    border-radius:999px;

    background:rgba(158,255,195,.10);

    color:#9effc3;

    font-size:10px;
    font-weight:800;

    margin-bottom:10px;
}

.mobile-access-content h4{
    color:white;

    font-size:26px;
    font-weight:800;

    margin-bottom:6px;

    line-height:1.1;
}

.mobile-access-content p{
    color:rgba(255,255,255,.72);

    font-size:13px;

    line-height:1.4;

    margin:0;
}

@media(max-width:768px){

    .mobile-access-card{
        width:100%;
    }
}

.mobile-tag{
    display:inline-flex;
    align-items:center;
    gap:6px;

    padding:8px 14px;

    border-radius:999px;

    background:rgba(255,255,255,.08);

    color:white;

    font-size:12px;
    font-weight:700;
}

@media(max-width:768px){

    .mobile-access-card{
        width:100%;

        flex-direction:column;

        text-align:center;
    }
}

.mobile-access-card{
    margin-top:28px;

    display:flex;
    align-items:center;
    gap:18px;

    padding:18px;

    max-width:430px;

    border-radius:28px;

    background:
        linear-gradient(
            135deg,
            rgba(19,41,75,.95),
            rgba(18,88,85,.95)
        );

    border:1px solid rgba(158,255,195,.15);

    box-shadow:0 20px 50px rgba(0,0,0,.18);
}

.mobile-qr{
    width:95px;
    height:95px;

    flex-shrink:0;

    padding:8px;

    background:white;

    border-radius:20px;
}

.mobile-qr img{
    width:100%;
    height:100%;

    object-fit:contain;
}

.mobile-chip{
    display:inline-flex;
    align-items:center;
    gap:6px;

    padding:5px 10px;

    border-radius:999px;

    background:rgba(158,255,195,.12);

    color:#9effc3;

    font-size:11px;
    font-weight:800;

    margin-bottom:10px;
}

.mobile-access-content h4{
    color:white;

    font-size:22px;

    margin-bottom:8px;
}

.mobile-access-content p{
    color:rgba(255,255,255,.72);

    line-height:1.5;

    font-size:14px;

    margin-bottom:14px;
}

.mobile-tag{
    display:inline-flex;
    align-items:center;
    gap:6px;

    padding:8px 14px;

    border-radius:999px;

    background:rgba(255,255,255,.08);

    color:white;

    font-size:12px;
    font-weight:700;
}

.app-support-card{
    margin-top:24px;

    display:flex;
    align-items:center;
    justify-content:space-between;

    padding:22px;

    border-radius:24px;

    background:rgba(255,255,255,.05);

    border:1px solid rgba(255,255,255,.10);
}

.app-support-card i{
    font-size:32px;

    color:#9effc3;
}

.app-support-card strong{
    color:white;

    display:block;
}

.app-support-card p{
    color:rgba(255,255,255,.7);

    margin:4px 0 0;
}

@media(max-width:768px){

    .mobile-access-card,
    .app-support-card{
        flex-direction:column;
        text-align:center;
    }
}

.mobile-access-card {
    transition: all 0.3s ease;
}

.mobile-access-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 18px 40px rgba(0,0,0,.22);
}

/* ===============================
   Utility Top Bar
================================== */

.utility-bar {

    background: #ffffff;

    border-bottom: 1px solid rgba(6, 24, 51, 0.08);

    position: relative;

    z-index: 1002;
}

.utility-wrapper {

    display: flex;

    justify-content: space-between;

    align-items: center;

    min-height: 52px;
}

.utility-contact {

    display: flex;

    gap: 28px;
}

.utility-contact a {

    display: flex;

    align-items: center;

    gap: 8px;

    color: var(--navy);

    text-decoration: none;

    font-size: 14px;

    font-weight: 600;
}

.utility-contact i {

    color: var(--green);
}

.utility-links {

    display: flex;

    align-items: center;

    gap: 26px;
}

.utility-link {

    display: flex;

    align-items: center;

    gap: 6px;

    color: var(--navy);

    text-decoration: none;

    font-weight: 600;

    font-size: 14px;

    background: none;

    border: none;

    cursor: pointer;

    transition: 0.3s;
}

.utility-link:hover {

    color: var(--green);
}

.utility-dropdown {

    position: relative;
}

.utility-dropdown-menu {

    position: absolute;

    top: calc(100% + 18px);

    left: 0;

    min-width: 260px;

    background: white;

    border-radius: 22px;

    padding: 12px;

    box-shadow: 0 20px 50px rgba(0,0,0,0.12);

    opacity: 0;

    visibility: hidden;

    transform: translateY(12px);

    transition: all .3s ease;

    border: 1px solid rgba(6,24,51,.08);
}

.utility-dropdown:hover .utility-dropdown-menu {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}

.utility-dropdown-menu a {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 14px 16px;

    border-radius: 14px;

    text-decoration: none;

    color: var(--navy);

    font-weight: 600;

    transition: .25s;
}

.utility-dropdown-menu a:hover {

    background: rgba(11,164,75,.08);

    color: var(--green);
}

.utility-dropdown-menu i {

    width: 20px;

    color: var(--green);
}

.nav-badge {

    background: linear-gradient(
        135deg,
        #ff6b6b,
        #ff9800
    );

    color: white;

    font-size: 10px;

    font-weight: 700;

    padding: 4px 8px;

    border-radius: 999px;
}

/* ===============================
   Utility Top Bar
================================== */

.utility-bar {

    background: #ffffff;

    border-bottom: 1px solid rgba(6, 24, 51, 0.08);

    position: relative;

    z-index: 1002;
}

.utility-wrapper {

    display: flex;

    justify-content: space-between;

    align-items: center;

    min-height: 52px;
}

.utility-contact {

    display: flex;

    gap: 28px;
}

.utility-contact a {

    display: flex;

    align-items: center;

    gap: 8px;

    color: var(--navy);

    text-decoration: none;

    font-size: 14px;

    font-weight: 600;
}

.utility-contact i {

    color: var(--green);
}

.utility-links {

    display: flex;

    align-items: center;

    gap: 26px;
}

.utility-link {

    display: flex;

    align-items: center;

    gap: 6px;

    color: var(--navy);

    text-decoration: none;

    font-weight: 600;

    font-size: 14px;

    background: none;

    border: none;

    cursor: pointer;

    transition: 0.3s;
}

.utility-link:hover {

    color: var(--green);
}

.utility-dropdown {

    position: relative;
}

.utility-dropdown-menu {

    position: absolute;

    top: calc(100% + 18px);

    left: 0;

    min-width: 260px;

    background: white;

    border-radius: 22px;

    padding: 12px;

    box-shadow: 0 20px 50px rgba(0,0,0,0.12);

    opacity: 0;

    visibility: hidden;

    transform: translateY(12px);

    transition: all .3s ease;

    border: 1px solid rgba(6,24,51,.08);
}

.utility-dropdown:hover .utility-dropdown-menu {

    opacity: 1;

    visibility: visible;

    transform: translateY(0);
}

.utility-dropdown-menu a {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 14px 16px;

    border-radius: 14px;

    text-decoration: none;

    color: var(--navy);

    font-weight: 600;

    transition: .25s;
}

.utility-dropdown-menu a:hover {

    background: rgba(11,164,75,.08);

    color: var(--green);
}

.utility-dropdown-menu i {

    width: 20px;

    color: var(--green);
}

.nav-badge {

    background: linear-gradient(
        135deg,
        #ff6b6b,
        #ff9800
    );

    color: white;

    font-size: 10px;

    font-weight: 700;

    padding: 4px 8px;

    border-radius: 999px;
}

.utility-bar a,
.utility-bar span{
  font-size:13px;
  font-weight:600;
  color:#334155;
}
/* Utility bar + navbar stacking fix */
.utility-bar{
  position:relative !important;
  z-index:6000 !important;
}

.utility-wrapper{
  min-height:34px !important;
}

.nav,
#navbar{
  position:sticky !important;
  top:0 !important;
  z-index:5000 !important;
}

/* remove floating gap created by old navbar */
.nav .nav-inner,
#navbar .nav-inner{
  margin-top:0 !important;
}

/* dropdown should stay above navbar/content */
.utility-dropdown-menu{
  z-index:7000 !important;
  top:calc(100% + 8px) !important;
}

.utility-contact,
.utility-links{
  gap:18px !important;
}

.utility-contact a,
.utility-link{
  font-size:13px !important;
}

.nav-badge{
  font-size:9px !important;
  padding:3px 7px !important;
}

.footer-social a.instagram {
    color: #f7941d;
}

.footer-social a.linkedin {
    color: #0077b5;
}

.footer-social a.facebook {
    color: #1877f2;
}

.footer-social a.youtube {
    color: #ff0000;
}

.footer-social a:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,.12);
}

/* V90 - Footer Alignment Polish */

.premium-footer{
  background:#f8fafc !important;
  padding-top:70px !important;
  overflow:hidden !important;
}

.footer-brand{
  max-width:520px !important;
}

.footer-brand p{
  max-width:520px !important;
  color:#64748b !important;
  line-height:1.8 !important;
  margin:18px 0 24px !important;
}

.footer-social{
  display:flex !important;
  align-items:center !important;
  gap:12px !important;
  margin-top:18px !important;
}

.footer-social a{
  width:46px !important;
  height:46px !important;
  border-radius:14px !important;
  display:grid !important;
  place-items:center !important;
  background:#fff !important;
  border:1px solid rgba(30,74,168,.08) !important;
  color:var(--brand-blue) !important;
  box-shadow:0 10px 24px rgba(8,36,92,.06) !important;
  transition:.28s ease !important;
}

.footer-social a:hover{
  color:#fff !important;
  background:linear-gradient(135deg,var(--orange),#f97316) !important;
  transform:translateY(-4px) !important;
}

.footer-disclaimer{
  width:100% !important;
  max-width:1180px !important;
  margin:46px auto 0 !important;
  padding:24px 30px !important;
  border-radius:24px !important;
  background:rgba(247,148,29,.07) !important;
  border:1px solid rgba(247,148,29,.16) !important;
  color:#64748b !important;
  line-height:1.75 !important;
  text-align:left !important;
}

.footer-disclaimer strong{
  color:#334155 !important;
}

.footer-bottom{
  max-width:1180px !important;
  margin:34px auto 0 !important;
  padding:24px 0 30px !important;
  border-top:1px solid rgba(247,148,29,.18) !important;
  display:flex !important;
  justify-content:space-between !important;
  align-items:center !important;
  gap:18px !important;
  color:#64748b !important;
  font-size:14px !important;
}

@media(max-width:720px){
  .premium-footer{
    padding-top:52px !important;
  }

  .footer-disclaimer{
    margin-top:32px !important;
    padding:20px !important;
  }

  .footer-bottom{
    flex-direction:column !important;
    text-align:center !important;
  }

  .footer-social{
    justify-content:flex-start !important;
  }
}

.footer-contact h4{
    font-size:28px;
    color:var(--navy);
    margin-bottom:12px;
}

.footer-contact-divider{
    width:80px;
    height:4px;
    border-radius:10px;
    background:linear-gradient(
        90deg,
        var(--brand-blue),
        var(--green),
        var(--orange)
    );
    margin-bottom:28px;
}

.footer-contact-item{
    display:flex;
    align-items:flex-start;
    gap:14px;
    margin-bottom:22px;

    color:#475569;
    text-decoration:none;

    transition:.3s;
}

.footer-contact-item:hover{
    color:var(--brand-blue);
}

.footer-contact-item i{
    width:20px;
    margin-top:4px;

    color:var(--green);
    font-size:18px;

    flex-shrink:0;
}

.footer-contact-item span{
    line-height:1.7;
    font-size:15px;
}

/* Footer Contact + Map Polish */
.footer-contact-col{
  min-width:320px !important;
}

.footer-contact-row{
  display:flex !important;
  align-items:center !important;
  gap:14px !important;
  margin-bottom:18px !important;
  color:#64748b !important;
  font-weight:700 !important;
}

.footer-contact-row i{
  width:38px !important;
  height:38px !important;
  border-radius:13px !important;
  display:grid !important;
  place-items:center !important;
  color:#fff !important;
  background:linear-gradient(135deg,var(--brand-blue),var(--green)) !important;
  flex-shrink:0 !important;
}

.footer-map-card{
  margin-top:20px !important;
  padding:20px !important;
  border-radius:24px !important;
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:18px !important;
  background:
    linear-gradient(135deg,rgba(30,74,168,.08),rgba(11,164,75,.08)),
    #fff !important;
  border:1px solid rgba(30,74,168,.10) !important;
  box-shadow:0 14px 36px rgba(8,36,92,.08) !important;
  color:var(--navy) !important;
}

.footer-map-card strong{
  display:block !important;
  font-size:15px !important;
  margin-bottom:6px !important;
  color:var(--navy) !important;
}

.footer-map-card span{
  display:block !important;
  color:#64748b !important;
  font-size:13px !important;
  line-height:1.55 !important;
}

.footer-map-card > i{
  width:44px !important;
  height:44px !important;
  min-width:44px !important;
  border-radius:15px !important;
  display:grid !important;
  place-items:center !important;
  color:#fff !important;
  background:linear-gradient(135deg,var(--green),var(--orange)) !important;
}

.footer-map-card:hover{
  transform:translateY(-4px) !important;
  box-shadow:0 22px 52px rgba(8,36,92,.12) !important;
}

/* CONTACT FOOTER */

.footer-contact h4 {
    font-size: 36px;
    font-weight: 700;
    color: var(--navy);
    margin-bottom: 12px;
}

.footer-heading-line {
    width: 100px;
    height: 4px;
    border-radius: 50px;

    background: linear-gradient(
        90deg,
        var(--brand-blue),
        var(--green),
        var(--orange)
    );

    margin-bottom: 30px;
}

.footer-contact-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;

    margin-bottom: 22px;

    text-decoration: none;
    color: #475569;

    transition: all 0.3s ease;
}

.footer-contact-item:hover {
    color: var(--brand-blue);
}

.footer-contact-item i:first-child {

    width: 16px;
    min-width: 16px;

    margin-top: 4px;

    color: var(--green);

    font-size: 16px;
}

.footer-contact-item span {
    font-size: 16px;
    line-height: 1.6;
}

.footer-address strong {
    display: block;

    color: var(--navy);

    font-size: 15px;
    font-weight: 700;

    margin-bottom: 6px;
}

.footer-address span {
    color: #64748b;

    font-size: 15px;
    line-height: 1.7;
}

/* MAP BLOCK */

.footer-map-link {

    margin-top: 10px;

    display: inline-flex;
    align-items: center;
    gap: 10px;

    padding: 10px 16px;

    border-radius: 14px;

    background: linear-gradient(
        135deg,
        rgba(30,74,168,.05),
        rgba(11,164,75,.05)
    );

    border: 1px solid rgba(11,164,75,.12);

    text-decoration: none;

    color: var(--navy);

    font-size: 14px;
    font-weight: 600;

    transition: all 0.3s ease;
}

.footer-map-link:hover {

    transform: translateY(-2px);

    box-shadow:
        0 10px 24px rgba(0,0,0,.08);

    color: var(--brand-blue);
}

.footer-map-link .fa-map-marked-alt {

    color: var(--green);

    font-size: 15px;
}

.footer-map-link .fa-arrow-up-right-from-square {

    font-size: 12px;

    color: var(--orange);
}

/* Footer Contact Simple Alignment Fix */
.footer-contact-premium,
.footer-contact-col{
  min-width:unset !important;
}

.footer-contact-card,
.footer-map-card{
  padding:0 !important;
  margin:0 !important;
  background:transparent !important;
  border:0 !important;
  box-shadow:none !important;
}

.footer-contact-simple a{
  display:flex !important;
  align-items:flex-start !important;
  gap:10px !important;
  margin-bottom:16px !important;
  color:#64748b !important;
  font-weight:700 !important;
  line-height:1.55 !important;
}

.footer-contact-simple a:hover{
  color:var(--green) !important;
}

.footer-contact-simple i{
  width:18px !important;
  min-width:18px !important;
  height:auto !important;
  margin-top:3px !important;
  display:inline-block !important;
  color:var(--green) !important;
  background:none !important;
  font-size:15px !important;
}

.footer-contact-simple span{
  display:block !important;
}
