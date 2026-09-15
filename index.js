<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>SureTips | Football Predictions</title>

  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }

    body {
      background: #080b12;
      color: white;
      line-height: 1.5;
    }

    header {
      background: linear-gradient(135deg, #101827, #18263d);
      padding: 25px 15px;
      text-align: center;
      border-bottom: 2px solid #263a5c;
    }

    .logo {
      font-size: 34px;
      font-weight: 900;
      letter-spacing: 1px;
    }

    .logo span {
      color: #19d66b;
    }

    header p {
      color: #b8c2d1;
      margin-top: 6px;
    }

    .hero {
      padding: 45px 18px;
      text-align: center;
      background:
        linear-gradient(rgba(5,8,14,.75), rgba(5,8,14,.95)),
        radial-gradient(circle at center, #174b38, #080b12 65%);
    }

    .hero h1 {
      font-size: 38px;
      margin-bottom: 12px;
    }

    .hero h1 span {
      color: #19d66b;
    }

    .hero p {
      color: #c7ced8;
      max-width: 650px;
      margin: auto;
    }

    .container {
      width: 94%;
      max-width: 1100px;
      margin: auto;
    }

    .section-title {
      text-align: center;
      margin: 35px 0 20px;
      font-size: 27px;
    }

    .section-title span {
      color: #19d66b;
    }

    .matches {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 18px;
    }

    .match {
      background: #111722;
      border: 1px solid #253044;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 8px 25px rgba(0,0,0,.25);
    }

    .league {
      color: #8f9bad;
      font-size: 13px;
      margin-bottom: 12px;
    }

    .teams {
      font-size: 19px;
      font-weight: bold;
      margin-bottom: 15px;
    }

    .prediction {
      background: #172b22;
      border-left: 4px solid #19d66b;
      padding: 12px;
      border-radius: 7px;
    }

    .prediction strong {
      color: #19d66b;
    }

    .confidence {
      margin-top: 12px;
      color: #c3cbd6;
      font-size: 14px;
    }

    .packages {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }

    .package {
      background: #111722;
      border: 1px solid #29354a;
      border-radius: 16px;
      padding: 28px 20px;
      text-align: center;
    }

    .package.vip {
      border: 2px solid #19d66b;
    }

    .package.vvip {
      border: 2px solid #f1c40f;
    }

    .package h3 {
      font-size: 25px;
      margin-bottom: 10px;
    }

    .price {
      font-size: 32px;
      font-weight: bold;
      margin: 12px 0;
    }

    .vip .price {
      color: #19d66b;
    }

    .vvip .price {
      color: #f1c40f;
    }

    .package ul {
      list-style: none;
      margin: 20px 0;
      color: #c2cad5;
    }

    .package li {
      margin: 8px 0;
    }

    .btn {
      display: inline-block;
      width: 100%;
      border: none;
      padding: 14px;
      border-radius: 8px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      background: #19d66b;
      color: #06100a;
    }

    .vvip .btn {
      background: #f1c40f;
    }

    .btn:hover {
      opacity: .88;
    }

    .how {
      background: #0e141f;
      padding: 30px 20px;
      border-radius: 15px;
      margin-bottom: 35px;
    }

    .steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
      text-align: center;
    }

    .step {
      padding: 15px;
    }

    .step-number {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto auto 10px;
      border-radius: 50%;
      background: #19d66b;
      color: #06100a;
      font-weight: bold;
    }

    .contact {
      text-align: center;
      padding: 30px 15px 50px;
    }

    .contact a {
      display: inline-block;
      margin: 8px;
      padding: 12px 20px;
      border-radius: 8px;
      text-decoration: none;
      background: #172033;
      color: white;
      border: 1px solid #33415a;
    }

    footer {
      background: #05070b;
      text-align: center;
      padding: 25px 15px;
      color: #7e8898;
      font-size: 13px;
    }

    .disclaimer {
      max-width: 800px;
      margin: 10px auto 0;
    }

    @media (max-width: 500px) {
      .hero h1 {
        font-size: 30px;
      }

      .logo {
        font-size: 29px;
      }

      .section-title {
        font-size: 24px;
      }
    }
  </style>
</head>

<body>

<header>
  <div class="logo">SURE<span>TIPS</span></div>
  <p>Football Predictions & Match Insights</p>
</header>

<section class="hero">
  <div class="container">
    <h1>Make Your <span>Next Pick</span> Smarter</h1>
    <p>
      Daily football predictions, match analysis and premium selections.
      Choose from our Free Tips, VIP and VVIP packages.
    </p>
  </div>
</section>


<div class="container">

  <!-- FREE TIPS -->
  <h2 class="section-title">🔥 Today's <span>Free Tips</span></h2>

  <div class="matches">

    <div class="match">
      <div class="league">Premier League</div>
      <div class="teams">Team A vs Team B</div>

      <div class="prediction">
        Prediction: <strong>Over 1.5 Goals</strong>
      </div>

      <div class="confidence">
        Confidence: 78%
      </div>
    </div>


    <div class="match">
      <div class="league">La Liga</div>
      <div class="teams">Team C vs Team D</div>

      <div class="prediction">
        Prediction: <strong>Home Win</strong>
      </div>

      <div class="confidence">
        Confidence: 74%
      </div>
    </div>


    <div class="match">
      <div class="league">Serie A</div>
      <div class="teams">Team E vs Team F</div>

      <div class="prediction">
        Prediction: <strong>Both Teams To Score</strong>
      </div>

      <div class="confidence">
        Confidence: 72%
      </div>
    </div>

  </div>


  <!-- VIP -->
  <h2 class="section-title">💎 Premium <span>Packages</span></h2>

  <div class="packages">

    <div class="package vip">
      <h3>VIP</h3>

      <div class="price">$10 – $30</div>

      <ul>
        <li>✓ Premium football selections</li>
        <li>✓ Higher-confidence picks</li>
        <li>✓ Daily selections</li>
        <li>✓ VIP access</li>
      </ul>

      <button class="btn" onclick="paymentMessage('VIP')">
        Get VIP Access
      </button>
    </div>


    <div class="package vvip">
      <h3>VVIP</h3>

      <div class="price">$30 – $100</div>

      <ul>
        <li>✓ Premium selections</li>
        <li>✓ Exclusive VVIP picks</li>
        <li>✓ Detailed match analysis</li>
        <li>✓ Priority access</li>
      </ul>

      <button class="btn" onclick="paymentMessage('VVIP')">
        Get VVIP Access
      </button>
    </div>

  </div>


  <!-- HOW IT WORKS -->
  <div class="how">

    <h2 class="section-title">How It <span>Works</span></h2>

    <div class="steps">

      <div class="step">
        <div class="step-number">1</div>
        <h3>Choose</h3>
        <p>Select Free, VIP or VVIP tips.</p>
      </div>

      <div class="step">
        <div class="step-number">2</div>
        <h3>Payment</h3>
        <p>Payment options will be available here.</p>
      </div>

      <div class="step">
        <div class="step-number">3</div>
        <h3>Receive Tips</h3>
        <p>Access your selected football predictions.</p>
      </div>

    </div>

  </div>

</div>


<!-- CONTACT -->
<section class="contact">

  <h2>Follow <span style="color:#19d66b;">SureTips</span></h2>

  <p style="color:#aeb7c4; margin:10px 0 15px;">
    Username: @suretips
  </p>

  <a href="#" onclick="alert('Social media link will be added later.')">
    📱 Social Media
  </a>

  <a href="#" onclick="alert('Contact option will be added later.')">
    💬 Contact Us
  </a>

</section>


<footer>

  <div>© 2026 SureTips. All rights reserved.</div>

  <div class="disclaimer">
    <strong>Disclaimer:</strong>
    Football predictions are based on analysis and are not guaranteed.
    Betting involves financial risk. Please bet responsibly and only use
    money you can afford to lose.
  </div>

</footer>


<script>

  function paymentMessage(packageName) {

    alert(
      packageName +
      " payment will be available soon.\n\n" +
      "USDT and other payment options will be added here."
    );

  }

</script>

</body>
</html>
