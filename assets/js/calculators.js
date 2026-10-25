let calcChart = null;
let activeType = "sip";

const config = {
  sip: {
    title: "SIP (Systematic Investment Plan) Calculator",
    infoTitle: "SIP Calculator - Systematic Investment Plan Calculator",
    infoText: "A SIP calculator helps estimate the future value of regular monthly investments based on expected return and time period.",
    fields: [
      { label: "Monthly investment", value: 25000, min: 500, max: 500000, step: 500, prefix: "₹", suffix: "" },
      { label: "Expected return rate (p.a)", value: 12, min: 1, max: 30, step: 0.5, prefix: "", suffix: "%" },
      { label: "Time period", value: 10, min: 1, max: 40, step: 1, prefix: "", suffix: "Yr" }
    ],
    legends: ["Invested amount", "Est. returns"]
  },

  swp: {
    title: "SWP (Systematic Withdrawal Plan) Calculator",
    infoTitle: "SWP Calculator - Systematic Withdrawal Plan Calculator",
    infoText: "An SWP calculator estimates how much corpus may remain after regular monthly withdrawals from an investment.",
    fields: [
      { label: "Initial corpus", value: 2500000, min: 100000, max: 50000000, step: 50000, prefix: "₹", suffix: "" },
      { label: "Expected return rate (p.a)", value: 8, min: 1, max: 20, step: 0.5, prefix: "", suffix: "%" },
      { label: "Withdrawal period", value: 10, min: 1, max: 40, step: 1, prefix: "", suffix: "Yr" },
      { label: "Monthly withdrawal", value: 25000, min: 1000, max: 500000, step: 1000, prefix: "₹", suffix: "" }
    ],
    legends: ["Remaining corpus", "Total withdrawn"]
  },

  goal: {
    title: "Goal Planner",
    infoTitle: "Goal Planner - Future Financial Goal Calculator",
    infoText: "A goal planner helps estimate the monthly SIP required to reach a future financial goal after considering inflation and expected returns.",
    fields: [
      { label: "Goal amount today", value: 2500000, min: 100000, max: 100000000, step: 50000, prefix: "₹", suffix: "" },
      { label: "Expected return rate (p.a)", value: 12, min: 1, max: 30, step: 0.5, prefix: "", suffix: "%" },
      { label: "Time period", value: 10, min: 1, max: 40, step: 1, prefix: "", suffix: "Yr" },
      { label: "Inflation rate", value: 6, min: 0, max: 15, step: 0.5, prefix: "", suffix: "%" }
    ],
    legends: ["Goal today", "Inflation impact"]
  },

  emi: {
    title: "EMI Calculator",
    infoTitle: "EMI Calculator - Loan EMI Calculator",
    infoText: "An EMI calculator helps estimate monthly loan repayment, total interest and total payable amount.",
    fields: [
      { label: "Loan amount", value: 1000000, min: 50000, max: 50000000, step: 50000, prefix: "₹", suffix: "" },
      { label: "Interest rate (p.a)", value: 9, min: 1, max: 25, step: 0.5, prefix: "", suffix: "%" },
      { label: "Loan tenure", value: 5, min: 1, max: 30, step: 1, prefix: "", suffix: "Yr" }
    ],
    legends: ["Principal amount", "Total interest"]
  },
lumpsum: {
    title: "Lumpsum Calculator",
    infoTitle: "Lumpsum Investment Calculator",
    infoText: "Estimate the future value of your one-time investment.",
    fields: [
        { label: "Investment amount", value: 100000, min: 1000, max: 100000000, step: 1000, prefix: "₹", suffix: "" },
        { label: "Expected return rate (p.a)", value: 12, min: 1, max: 30, step: 0.5, prefix: "", suffix: "%" },
        { label: "Time period", value: 10, min: 1, max: 40, step: 1, prefix: "", suffix: "Yr" }
    ],
    legends: ["Invested amount", "Est. returns"]
},
fd: {
    title: "FD (Fixed Deposit) Calculator",
    infoTitle: "Fixed Deposit Calculator",
    infoText: "Calculate maturity amount and interest earned from Fixed Deposits.",
    fields: [
        { label: "Deposit amount", value: 500000, min: 1000, max: 100000000, step: 1000, prefix: "₹", suffix: "" },
        { label: "Interest rate (p.a)", value: 7, min: 1, max: 15, step: 0.1, prefix: "", suffix: "%" },
        { label: "Investment period", value: 5, min: 1, max: 30, step: 1, prefix: "", suffix: "Yr" }
    ],
    legends: ["Principal", "Interest earned"]
},
ppf: {
    title: "PPF (Public Provident Fund) Calculator",
    infoTitle: "Public Provident Fund Calculator",
    infoText: "Estimate your maturity value from PPF investments.",
    fields: [
        { label: "Yearly investment", value: 150000, min: 500, max: 150000, step: 500, prefix: "₹", suffix: "" },
        { label: "Interest rate", value: 7.1, min: 1, max: 15, step: 0.1, prefix: "", suffix: "%" },
        { label: "Investment period", value: 15, min: 15, max: 50, step: 5, prefix: "", suffix: "Yr" }
    ],
    legends: ["Investment", "Interest earned"]
},
retirement: {
    title: "Retirement Calculator",
    infoTitle: "Retirement Planning Calculator",
    infoText: "Plan how much corpus you need for a comfortable retirement.",
    fields: [
        { label: "Monthly expenses today", value: 50000, min: 5000, max: 1000000, step: 1000, prefix: "₹", suffix: "" },
        { label: "Current age", value: 35, min: 18, max: 59, step: 1, prefix: "", suffix: "Yr" },
        { label: "Retirement age", value: 60, min: 40, max: 80, step: 1, prefix: "", suffix: "Yr" },
        { label: "Inflation rate", value: 6, min: 1, max: 15, step: 0.5, prefix: "", suffix: "%" }
    ],
    legends: ["Corpus Needed", "Inflation Impact"]
},
};

const formatINR = value => "₹" + Math.round(value || 0).toLocaleString("en-IN");

function getEl(id) {
  return document.getElementById(id);
}

function setupCalculator(type) {
  activeType = type;
  const data = config[type];

  getEl("pageTitle").textContent = data.title;
  getEl("infoTitle").textContent = data.infoTitle;
  getEl("infoText").textContent = data.infoText;

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.type === type);
  });

  for (let i = 1; i <= 4; i++) {
    const field = data.fields[i - 1];
    const row = getEl(`row${i}`);

    if (!field) {
      if (row) row.style.display = "none";
      continue;
    }

    if (row) row.style.display = "block";

    getEl(`label${i}`).textContent = field.label;
    getEl(`prefix${i}`).textContent = field.prefix;
    getEl(`suffix${i}`).textContent = field.suffix;

    const input = getEl(`input${i}`);
    const range = getEl(`range${i}`);

    input.value = field.value;
    input.min = field.min;
    input.max = field.max;
    input.step = field.step;

    range.value = field.value;
    range.min = field.min;
    range.max = field.max;
    range.step = field.step;
  }

  getEl("legend1").textContent = data.legends[0];
  getEl("legend2").textContent = data.legends[1];

  history.replaceState(null, "", `?type=${type}`);
  calculate();
}

function readValue(index) {
  return Number(getEl(`input${index}`).value) || 0;
}

function calculate() {
  const v1 = readValue(1);
  const rate = readValue(2) / 100;
  const years = readValue(3);
  const months = years * 12;
  const monthlyRate = rate / 12;

  let result1Label = "";
  let result2Label = "";
  let result3Label = "";

  let result1 = 0;
  let result2 = 0;
  let result3 = 0;

  let chart1 = 0;
  let chart2 = 0;

  if (activeType === "sip") {
    const monthlySip = v1;
    const invested = monthlySip * months;

    const yearlyInvestment = monthlySip * 12;

    const totalValue = rate > 0
      ? yearlyInvestment * ((Math.pow(1 + rate, years) - 1) / rate) * (1 + rate / 2)
      : invested;

    const returns = totalValue - invested;

    result1Label = "Invested amount";
    result2Label = "Est. returns";
    result3Label = "Total value";

    result1 = invested;
    result2 = returns;
    result3 = totalValue;

    chart1 = invested;
    chart2 = returns;
  }

  if (activeType === "swp") {
    const initialCorpus = v1;
    const monthlyWithdrawal = readValue(4);

    let corpus = initialCorpus;
    let withdrawn = 0;

    for (let i = 1; i <= months; i++) {
      corpus = corpus * (1 + monthlyRate);

      if (corpus >= monthlyWithdrawal) {
        corpus -= monthlyWithdrawal;
        withdrawn += monthlyWithdrawal;
      } else {
        withdrawn += corpus;
        corpus = 0;
        break;
      }
    }

    result1Label = "Initial corpus";
    result2Label = "Total withdrawn";
    result3Label = "Remaining corpus";

    result1 = initialCorpus;
    result2 = withdrawn;
    result3 = corpus;

    chart1 = corpus;
    chart2 = withdrawn;
  }

  if (activeType === "goal") {
    const goalToday = v1;
    const inflation = readValue(4) / 100;

    const futureGoal = goalToday * Math.pow(1 + inflation, years);

    const requiredSip = monthlyRate > 0
      ? futureGoal / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
      : futureGoal / months;

    result1Label = "Goal amount today";
    result2Label = "Future goal value";
    result3Label = "Required monthly SIP";

    result1 = goalToday;
    result2 = futureGoal;
    result3 = requiredSip;

    chart1 = goalToday;
    chart2 = futureGoal - goalToday;
  }

  if (activeType === "emi") {
    const loanAmount = v1;

    const emi = monthlyRate > 0
      ? loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : loanAmount / months;

    const totalPayment = emi * months;
    const interest = totalPayment - loanAmount;

    result1Label = "Loan amount";
    result2Label = "Total interest";
    result3Label = "Monthly EMI";

    result1 = loanAmount;
    result2 = interest;
    result3 = emi;

    chart1 = loanAmount;
    chart2 = interest;
  }
if (activeType === "lumpsum") {

    const principal = v1;

    const maturity = principal * Math.pow(1 + rate, years);

    const gains = maturity - principal;

    result1Label = "Invested amount";
    result2Label = "Est. returns";
    result3Label = "Total value";

    result1 = principal;
    result2 = gains;
    result3 = maturity;

    chart1 = principal;
    chart2 = gains;
}
if (activeType === "fd") {

    const principal = v1;

    const maturity = principal * Math.pow((1 + rate / 4), years * 4);

    const interest = maturity - principal;

    result1Label = "Deposit amount";
    result2Label = "Interest earned";
    result3Label = "Maturity amount";

    result1 = principal;
    result2 = interest;
    result3 = maturity;

    chart1 = principal;
    chart2 = interest;
}
if (activeType === "ppf") {

    const yearlyInvestment = v1;

    let corpus = 0;
    let invested = 0;

    for (let i = 0; i < years; i++) {

        corpus += yearlyInvestment;

        corpus *= (1 + rate);

        invested += yearlyInvestment;
    }

    const gains = corpus - invested;

    result1Label = "Invested amount";
    result2Label = "Interest earned";
    result3Label = "Maturity amount";

    result1 = invested;
    result2 = gains;
    result3 = corpus;

    chart1 = invested;
    chart2 = gains;
}
if (activeType === "retirement") {

    const monthlyExpense = v1;

    const currentAge = readValue(2);

    const retirementAge = readValue(3);

    const inflation = readValue(4) / 100;

    const yearsToRetirement = retirementAge - currentAge;

    const futureExpense =
        monthlyExpense * Math.pow((1 + inflation), yearsToRetirement);

    const annualExpense = futureExpense * 12;

    const corpusNeeded = annualExpense * 25;

    result1Label = "Monthly expense at retirement";
    result2Label = "Annual expenses";
    result3Label = "Corpus required";

    result1 = futureExpense;
    result2 = annualExpense;
    result3 = corpusNeeded;

    chart1 = annualExpense;
    chart2 = corpusNeeded - annualExpense;
}

  getEl("resultLabel1").textContent = result1Label;
  getEl("resultLabel2").textContent = result2Label;
  getEl("resultLabel3").textContent = result3Label;

  getEl("resultValue1").textContent = formatINR(result1);
  getEl("resultValue2").textContent = formatINR(result2);
  getEl("resultValue3").textContent = formatINR(result3);

  updateChart(chart1, chart2);
}

function updateChart(value1, value2) {
  const ctx = getEl("calcChart");

  if (calcChart) {
    calcChart.destroy();
  }

  calcChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: [getEl("legend1").textContent, getEl("legend2").textContent],
      datasets: [{
        data: [Math.max(value1, 0), Math.max(value2, 0)],
        backgroundColor: ["#dbeafe", "#000080"],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: context => `${context.label}: ${formatINR(context.raw)}`
          }
        }
      }
    }
  });
}

for (let i = 1; i <= 4; i++) {
  const input = getEl(`input${i}`);
  const range = getEl(`range${i}`);

  input.addEventListener("input", () => {
    range.value = input.value;
    calculate();
  });

  range.addEventListener("input", () => {
    input.value = range.value;
    calculate();
  });
}

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => setupCalculator(btn.dataset.type));
});

document.querySelectorAll(".popular-card button[data-type]").forEach(btn => {
  btn.addEventListener("click", () => {
    setupCalculator(btn.dataset.type);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

const params = new URLSearchParams(window.location.search);
const initialType = params.get("type") || "sip";

setupCalculator(config[initialType] ? initialType : "sip");
