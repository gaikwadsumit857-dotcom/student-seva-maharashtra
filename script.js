/* =========================================================
   STUDENT SEVA MAHARASHTRA
   COMPLETE UPDATED SCRIPT.JS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {
  const nav = document.querySelector(".nav-links");

  if (nav) {
    nav.classList.toggle("active");
  }
}


/* =========================================================
   SERVICE SEARCH
========================================================= */

function searchServices() {
  const input = document.getElementById("serviceSearch");

  if (!input) return;

  const query = input.value.toLowerCase().trim();

  const cards = document.querySelectorAll(".service-card");

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();

    if (text.includes(query)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
}


/* =========================================================
   TOOL AREA
========================================================= */

function showTool(tool) {
  const area = document.getElementById("toolArea");

  if (!area) return;

  area.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

  if (tool === "percentage") {
    area.innerHTML = `
      <div class="tool-box">

        <div class="tool-header">
          <span>🧮</span>
          <div>
            <h2>Percentage Calculator</h2>
            <p>Calculate your marks percentage instantly.</p>
          </div>
        </div>

        <div class="form-grid">

          <div class="form-group">
            <label>Total Marks</label>
            <input
              type="number"
              id="totalMarks"
              placeholder="Example: 500"
              min="1"
            >
          </div>

          <div class="form-group">
            <label>Obtained Marks</label>
            <input
              type="number"
              id="obtainedMarks"
              placeholder="Example: 425"
              min="0"
            >
          </div>

        </div>

        <button class="primary-btn" onclick="calculatePercentage()">
          Calculate Percentage
        </button>

        <div id="percentageResult"></div>

      </div>
    `;

  } else if (tool === "application") {

    showApplicationGenerator();

  } else if (tool === "documents") {

    showDocumentChecklist();
  }
}


/* =========================================================
   CLEAR TOOL
========================================================= */

function clearTool() {
  const area = document.getElementById("toolArea");

  if (area) {
    area.innerHTML = "";
  }
}


/* =========================================================
   PERCENTAGE CALCULATOR
========================================================= */

function calculatePercentage() {

  const totalInput = document.getElementById("totalMarks");
  const obtainedInput = document.getElementById("obtainedMarks");
  const result = document.getElementById("percentageResult");

  if (!totalInput || !obtainedInput || !result) return;

  const total = parseFloat(totalInput.value);
  const obtained = parseFloat(obtainedInput.value);

  if (!total || total <= 0) {
    result.innerHTML = `
      <div class="error-message">
        Please enter a valid total marks.
      </div>
    `;
    return;
  }

  if (obtained < 0 || obtained > total) {
    result.innerHTML = `
      <div class="error-message">
        Obtained marks must be between 0 and total marks.
      </div>
    `;
    return;
  }

  const percentage = (obtained / total) * 100;

  result.innerHTML = `
    <div class="result-card">
      <div class="result-icon">🎯</div>
      <h3>Your Percentage</h3>
      <div class="big-result">
        ${percentage.toFixed(2)}%
      </div>
      <p>
        ${obtained} out of ${total} marks
      </p>
    </div>
  `;
}


/* =========================================================
   SCHOLARSHIP FINDER
========================================================= */

function openScholarshipFinder() {

  const section = document.getElementById("scholarship");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


function findScholarships() {

  const category = document.getElementById("sfCategory")?.value || "";
  const education = document.getElementById("sfEducation")?.value || "";
  const income = parseFloat(
    document.getElementById("sfIncome")?.value || "0"
  );
  const domicile =
    document.getElementById("sfDomicile")?.value || "";
  const disability =
    document.getElementById("sfDisability")?.value || "";
  const hostel =
    document.getElementById("sfHostel")?.value || "";

  const resultBox = document.getElementById("scholarshipResults");

  if (!resultBox) return;

  if (!category) {
    resultBox.innerHTML = `
      <div class="error-message">
        Please select your category first.
      </div>
    `;
    return;
  }

  const scholarships = [];


  /* -------------------------------------------------------
     SC
  ------------------------------------------------------- */

  if (category === "SC") {

    scholarships.push({
      name: "Government of India Post-Matric Scholarship (SC)",
      description:
        "Post-matric scholarship opportunities for eligible SC students.",
      note:
        "Eligibility, income limit and benefits should be verified on MahaDBT."
    });

    scholarships.push({
      name: "Post-Matric Tuition Fee and Examination Fee (SC)",
      description:
        "Tuition and examination fee related support for eligible students.",
      note:
        "Final eligibility depends on current government rules."
    });
  }


  /* -------------------------------------------------------
     ST
  ------------------------------------------------------- */

  if (category === "ST") {

    scholarships.push({
      name: "Post Matric Scholarship Scheme for ST Students",
      description:
        "Post-matric financial assistance for eligible ST students.",
      note:
        "Check current eligibility and income conditions on MahaDBT."
    });

    scholarships.push({
      name: "Tuition Fees & Examination Fees to Tribal Students",
      description:
        "Tuition and examination fee support for eligible tribal students.",
      note:
        "Verify current scheme conditions before applying."
    });
  }


  /* -------------------------------------------------------
     OBC
  ------------------------------------------------------- */

  if (category === "OBC") {

    scholarships.push({
      name: "Post Matric Scholarship to OBC Students",
      description:
        "Post-matric scholarship support for eligible OBC students.",
      note:
        "Current income and course conditions may apply."
    });

    scholarships.push({
      name: "Post-Matric Scholarship to OBC Girls in Professional Courses",
      description:
        "Scholarship opportunity for eligible OBC girls studying professional courses.",
      note:
        "Verify current course and eligibility requirements."
    });
  }


  /* -------------------------------------------------------
     VJNT
  ------------------------------------------------------- */

  if (category === "VJNT") {

    scholarships.push({
      name: "Post Matric Scholarship to VJNT Students",
      description:
        "Post-matric scholarship support for eligible VJNT students.",
      note:
        "Check current MahaDBT conditions."
    });

    scholarships.push({
      name: "Tuition Fees and Examination Fees to VJNT Students",
      description:
        "Tuition and examination fee assistance for eligible students.",
      note:
        "Final eligibility depends on current rules."
    });
  }


  /* -------------------------------------------------------
     SBC
  ------------------------------------------------------- */

  if (category === "SBC") {

    scholarships.push({
      name: "Post Matric Scholarship to SBC Students",
      description:
        "Post-matric scholarship support for eligible SBC students.",
      note:
        "Verify current eligibility on MahaDBT."
    });

    scholarships.push({
      name: "Tuition Fees and Examination Fees to SBC Students",
      description:
        "Tuition and examination fee assistance for eligible SBC students.",
      note:
        "Current rules and course conditions apply."
    });
  }


  /* -------------------------------------------------------
     OPEN / EWS
  ------------------------------------------------------- */

  if (category === "OPEN" || category === "EWS") {

    scholarships.push({
      name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Scheme",
      description:
        "Fee-related scholarship opportunity for eligible students.",
      note:
        "Income, course, domicile and other conditions may apply."
    });
  }


  /* -------------------------------------------------------
     MINORITY
  ------------------------------------------------------- */

  if (category === "MINORITY") {

    scholarships.push({
      name: "Minority Scholarship Opportunities",
      description:
        "Scholarship opportunities available for eligible minority students.",
      note:
        "Check current MahaDBT scheme details and eligibility."
    });
  }


  /* -------------------------------------------------------
     DISABILITY
  ------------------------------------------------------- */

  if (disability === "yes") {

    scholarships.push({
      name: "Post-Matric Scholarship for Persons with Disability",
      description:
        "Scholarship support for eligible students with disabilities.",
      note:
        "Disability percentage and other conditions may apply."
    });
  }


  /* -------------------------------------------------------
     RESULT
  ------------------------------------------------------- */

  if (scholarships.length === 0) {

    resultBox.innerHTML = `
      <div class="no-result">
        <div class="no-result-icon">🔎</div>

        <h3>No matching scheme found</h3>

        <p>
          Please check your details or verify the latest scholarship
          information on the official MahaDBT portal.
        </p>

        <a
          href="https://mahadbt.maharashtra.gov.in/"
          target="_blank"
          rel="noopener noreferrer"
          class="secondary-btn"
        >
          Visit MahaDBT
        </a>
      </div>
    `;

    return;
  }


  let html = `
    <div class="scholarship-result-header">
      <h3>🎓 Scholarship Opportunities</h3>
      <p>
        Based on the information entered, these schemes may be relevant.
      </p>
    </div>

    <div class="scholarship-list">
  `;


  scholarships.forEach((scheme, index) => {

    html += `
      <div class="scholarship-card">

        <div class="scholarship-number">
          ${index + 1}
        </div>

        <div class="scholarship-content">

          <h4>${scheme.name}</h4>

          <p>
            ${scheme.description}
          </p>

          <small>
            ℹ️ ${scheme.note}
          </small>

        </div>

      </div>
    `;
  });


  html += `
    </div>

    <div class="scholarship-disclaimer">

      <strong>Important:</strong>

      This is a preliminary information tool.
      Scholarship eligibility, income limits, benefits and required
      documents can change. Always verify the current scheme details
      on the official MahaDBT portal before applying.

      <br><br>

      <a
        href="https://mahadbt.maharashtra.gov.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        🔗 Open Official MahaDBT Portal
      </a>

    </div>
  `;

  resultBox.innerHTML = html;
}


/* =========================================================
   APPLICATION GENERATOR
========================================================= */

function showApplicationGenerator() {

  const area = document.getElementById("toolArea");

  if (!area) return;

  area.innerHTML = `
    <div class="tool-box application-tool">

      <div class="tool-header">
        <span>📝</span>

        <div>
          <h2>Application Generator</h2>
          <p>
            Create a professional student application instantly.
          </p>
        </div>
      </div>


      <div class="form-grid">

        <div class="form-group">

          <label>Application Type</label>

          <select id="applicationType">

            <option value="bonafide">
              Bonafide Certificate
            </option>

            <option value="scholarship">
              Scholarship Application
            </option>

            <option value="fee">
              Fee Concession / Fee Request
            </option>

            <option value="exam">
              University Exam Form
            </option>

            <option value="leave">
              Leave Application
            </option>

            <option value="general">
              General Application to Principal
            </option>

          </select>

        </div>


        <div class="form-group">

          <label>Student Name</label>

          <input
            type="text"
            id="studentName"
            placeholder="Enter student name"
          >

        </div>


        <div class="form-group">

          <label>College / Institute</label>

          <input
            type="text"
            id="collegeName"
            placeholder="Enter college name"
          >

        </div>


        <div class="form-group">

          <label>Course / Class</label>

          <input
            type="text"
            id="courseName"
            placeholder="Example: BHMS 2nd Year"
          >

        </div>


        <div class="form-group">

          <label>Roll No. / PRN</label>

          <input
            type="text"
            id="rollNumber"
            placeholder="Optional"
          >

        </div>


        <div class="form-group full-width">

          <label>Reason / Details</label>

          <textarea
            id="applicationReason"
            rows="5"
            placeholder="Enter reason or additional details"
          ></textarea>

        </div>

      </div>


      <div class="button-row">

        <button
          class="primary-btn"
          onclick="generateApplication()"
        >
          Generate Application
        </button>

        <button
          class="secondary-btn"
          onclick="clearApplication()"
        >
          Clear
        </button>

      </div>


      <div id="applicationOutput"></div>

    </div>
  `;
}


/* =========================================================
   GENERATE APPLICATION
========================================================= */

function generateApplication() {

  const type =
    document.getElementById("applicationType")?.value || "bonafide";

  const name =
    document.getElementById("studentName")?.value.trim() || "";

  const college =
    document.getElementById("collegeName")?.value.trim() || "";

  const course =
    document.getElementById("courseName")?.value.trim() || "";

  const roll =
    document.getElementById("rollNumber")?.value.trim() || "";

  const reason =
    document.getElementById("applicationReason")?.value.trim() || "";


  if (!name || !college || !course) {

    alert(
      "Please enter Student Name, College / Institute and Course / Class."
    );

    return;
  }


  let subject = "";
  let body = "";


  /* -------------------------------------------------------
     BONAFIDE
  ------------------------------------------------------- */

  if (type === "bonafide") {

    subject = "Application for Bonafide Certificate";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, a student of
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I kindly request you to issue me a Bonafide Certificate
        for official / educational purposes.
      </p>

      ${
        reason
          ? `<p><strong>Additional Details:</strong><br>${escapeHTML(reason)}</p>`
          : ""
      }

      <p>
        I shall be grateful for your kind consideration.
      </p>
    `;
  }


  /* -------------------------------------------------------
     SCHOLARSHIP
  ------------------------------------------------------- */

  else if (type === "scholarship") {

    subject = "Application for Scholarship";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, studying in
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I request you to kindly provide the necessary documents
        and assistance required for my scholarship application.
      </p>

      ${
        reason
          ? `<p><strong>Details:</strong><br>${escapeHTML(reason)}</p>`
          : ""
      }

      <p>
        I kindly request you to consider my application.
      </p>
    `;
  }


  /* -------------------------------------------------------
     FEE
  ------------------------------------------------------- */

  else if (type === "fee") {

    subject = "Application Regarding College Fees";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, studying in
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I respectfully request you to consider my application
        regarding the college fee requirement.
      </p>

      ${
        reason
          ? `<p><strong>Details:</strong><br>${escapeHTML(reason)}</p>`
          : ""
      }

      <p>
        I request you to kindly consider my situation and
        provide the necessary assistance.
      </p>
    `;
  }


  /* -------------------------------------------------------
     EXAM
  ------------------------------------------------------- */

  else if (type === "exam") {

    subject = "Application Regarding University Examination";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, a student of
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I request you to kindly consider my application
        regarding the university examination.
      </p>

      ${
        reason
          ? `<p><strong>Details:</strong><br>${escapeHTML(reason)}</p>`
          : ""
      }

      <p>
        Kindly provide the necessary guidance and assistance.
      </p>
    `;
  }


  /* -------------------------------------------------------
     LEAVE
  ------------------------------------------------------- */

  else if (type === "leave") {

    subject = "Application for Leave";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, studying in
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I kindly request leave due to the following reason:
      </p>

      <p>
        <strong>${escapeHTML(reason || "Personal reasons")}</strong>
      </p>

      <p>
        I request you to kindly grant me leave for the required period.
      </p>
    `;
  }


  /* -------------------------------------------------------
     GENERAL
  ------------------------------------------------------- */

  else {

    subject = "Application to the Principal";

    body = `
      <p>
        I am <strong>${escapeHTML(name)}</strong>, studying in
        <strong>${escapeHTML(course)}</strong> at
        <strong>${escapeHTML(college)}</strong>.
      </p>

      ${
        roll
          ? `<p>My Roll No. / PRN is <strong>${escapeHTML(roll)}</strong>.</p>`
          : ""
      }

      <p>
        I respectfully submit the following request for your
        kind consideration.
      </p>

      <p>
        ${escapeHTML(reason || "I request you to kindly consider my application.")}
      </p>

      <p>
        I shall be grateful for your kind consideration.
      </p>
    `;
  }


  const output =
    document.getElementById("applicationOutput");

  if (!output) return;


  output.innerHTML = `

    <div class="application-preview" id="printableApplication">

      <div class="application-paper">

        <div class="application-date">
          Date: ${getCurrentDate()}
        </div>


        <div class="application-address">

          <strong>To,</strong><br>
          The Principal,<br>
          ${escapeHTML(college)}

        </div>


        <div class="application-subject">

          <strong>
            Subject: ${subject}
          </strong>

        </div>


        <div class="application-content">

          ${body}

        </div>


        <div class="application-closing">

          Thanking You,<br><br>

          Yours faithfully,<br>

          <strong>${escapeHTML(name)}</strong><br>

          ${escapeHTML(course)}

          ${
            roll
              ? `<br>Roll No. / PRN: ${escapeHTML(roll)}`
              : ""
          }

        </div>

      </div>

    </div>


    <div class="application-actions">

      <button
        class="primary-btn"
        onclick="printApplication()"
      >
        🖨️ Print / Save PDF
      </button>

      <button
        class="secondary-btn"
        onclick="copyApplication()"
      >
        📋 Copy Application
      </button>

    </div>

  `;
}


/* =========================================================
   CURRENT DATE
========================================================= */

function getCurrentDate() {

  const date = new Date();

  const day =
    String(date.getDate()).padStart(2, "0");

  const month =
    String(date.getMonth() + 1).padStart(2, "0");

  const year =
    date.getFullYear();

  return `${day}/${month}/${year}`;
}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


/* =========================================================
   PRINT APPLICATION
   A4 ONE PAGE
========================================================= */

function printApplication() {

  const application =
    document.getElementById("printableApplication");

  if (!application) {
    alert("Please generate the application first.");
    return;
  }


  const printWindow =
    window.open("", "_blank");


  if (!printWindow) {

    alert(
      "Please allow pop-ups in your browser to print the application."
    );

    return;
  }


  printWindow.document.write(`

    <!DOCTYPE html>

    <html>

    <head>

      <meta charset="UTF-8">

      <title>Student Application</title>

      <style>

        @page {
          size: A4 portrait;
          margin: 12mm;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          background: white;
        }

        body {
          font-family:
            Arial,
            Helvetica,
            sans-serif;

          color: #111827;

          font-size: 12.5px;

          line-height: 1.55;
        }

        .application-paper {
          width: 186mm;
          max-width: 186mm;
          margin: 0 auto;
        }

        .application-date {
          text-align: right;
          margin-bottom: 18px;
        }

        .application-address {
          margin-bottom: 18px;
        }

        .application-subject {
          margin-bottom: 18px;
        }

        .application-content p {
          margin: 0 0 12px 0;
        }

        .application-closing {
          margin-top: 25px;
        }

        @media print {

          html,
          body {
            width: 210mm;
            min-height: 297mm;
          }

          .application-paper {
            width: 186mm;
          }

        }

      </style>

    </head>

    <body>

      ${application.innerHTML}

    </body>

    </html>

  `);


  printWindow.document.close();


  setTimeout(() => {

    printWindow.focus();

    printWindow.print();

    setTimeout(() => {
      printWindow.close();
    }, 500);

  }, 300);
}


/* =========================================================
   COPY APPLICATION
========================================================= */

function copyApplication() {

  const application =
    document.getElementById("printableApplication");

  if (!application) {

    alert(
      "Please generate the application first."
    );

    return;
  }


  const text =
    application.innerText.trim();


  if (navigator.clipboard) {

    navigator.clipboard
      .writeText(text)
      .then(() => {

        alert(
          "Application copied successfully! ✅"
        );

      })
      .catch(() => {

        fallbackCopy(text);

      });

  } else {

    fallbackCopy(text);
  }
}


function fallbackCopy(text) {

  const textarea =
    document.createElement("textarea");

  textarea.value = text;

  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";

  document.body.appendChild(textarea);

  textarea.select();

  try {

    document.execCommand("copy");

    alert(
      "Application copied successfully! ✅"
    );

  } catch (error) {

    alert(
      "Copy failed. Please select and copy manually."
    );

  }

  document.body.removeChild(textarea);
}


/* =========================================================
   CLEAR APPLICATION
========================================================= */

function clearApplication() {

  const fields = [
    "studentName",
    "collegeName",
    "courseName",
    "rollNumber",
    "applicationReason"
  ];


  fields.forEach(id => {

    const field =
      document.getElementById(id);

    if (field) {
      field.value = "";
    }

  });


  const output =
    document.getElementById("applicationOutput");

  if (output) {
    output.innerHTML = "";
  }
}


/* =========================================================
   DOCUMENT CHECKLIST DATA
========================================================= */

const documentData = {

  scholarship: {

    title: "Scholarship Application",

    icon: "🎓",

    documents: [

      "Aadhaar Card",

      "Bank Account / Passbook Details",

      "Income Certificate",

      "Caste Certificate, if applicable",

      "Caste Validity Certificate, if applicable",

      "Previous Year Marksheet",

      "Maharashtra Domicile / Residence Proof",

      "College Bonafide / Admission Proof",

      "Fee Receipt, where applicable",

      "Disability Certificate, if applicable"

    ]

  },


  admission: {

    title: "College Admission",

    icon: "🏫",

    documents: [

      "Previous Qualification Marksheet",

      "School / College Leaving Certificate",

      "Aadhaar Card",

      "Passport Size Photographs",

      "Domicile / Residence Proof",

      "Caste Certificate, if applicable",

      "Caste Validity Certificate, if applicable",

      "Migration Certificate, if applicable",

      "Other admission-related documents"

    ]

  },


  exam: {

    title: "University Exam Form",

    icon: "📝",

    documents: [

      "College ID Card",

      "PRN / Enrollment Number",

      "Previous Marksheet",

      "Current Course / Semester Details",

      "Passport Size Photograph, if required",

      "Exam Fee Payment Details",

      "Required academic documents"

    ]

  },


  caste: {

    title: "Caste Certificate",

    icon: "📜",

    documents: [

      "Aadhaar Card",

      "Address / Residence Proof",

      "School Leaving Certificate",

      "Birth Certificate, where applicable",

      "Father / Parent Caste Proof",

      "Relative's caste-related document, where applicable",

      "Other supporting caste documents"

    ]

  },


  validity: {

    title: "Caste Validity",

    icon: "✅",

    documents: [

      "Valid Caste Certificate",

      "Aadhaar Card",

      "School Leaving Certificate",

      "Parent / Relative Caste Documents",

      "Educational Records",

      "Supporting family documents",

      "Other documents requested by scrutiny committee"

    ]

  },


  domicile: {

    title: "Domicile Certificate",

    icon: "🏠",

    documents: [

      "Aadhaar Card",

      "Address Proof",

      "School Leaving / Birth Certificate",

      "Residence-related proof",

      "Parent documents, if applicable",

      "Other supporting residence documents"

    ]

  },


  renewal: {

    title: "Scholarship Renewal",

    icon: "🔄",

    documents: [

      "Previous Scholarship Application Details",

      "Previous Year Marksheet",

      "Current College Admission / Bonafide Proof",

      "Income Certificate, if required",

      "Bank Account Details",

      "Aadhaar Details",

      "Caste / Validity Documents, if applicable",

      "Fee Receipt, where applicable"

    ]

  },


  professional: {

    title: "Professional Course Admission",

    icon: "🎓",

    documents: [

      "Entrance / Admission Result",

      "Previous Qualification Marksheet",

      "Leaving Certificate",

      "Aadhaar Card",

      "Domicile Certificate",

      "Caste Certificate, if applicable",

      "Caste Validity, if applicable",

      "Income Certificate, if applicable",

      "Passport Photographs",

      "Other admission authority documents"

    ]

  }

};


/* =========================================================
   DOCUMENT CHECKLIST STATE
========================================================= */

let activeDocumentCategory = "all";


/* =========================================================
   SHOW DOCUMENT CHECKLIST
========================================================= */

function showDocumentChecklist() {

  const area =
    document.getElementById("toolArea");

  if (!area) return;


  activeDocumentCategory = "all";


  area.innerHTML = `

    <div class="tool-box document-tool">

      <div class="tool-header">

        <span>📄</span>

        <div>

          <h2>Document Checklist</h2>

          <p>
            Find commonly required documents for student services.
          </p>

        </div>

      </div>


      <div class="document-search">

        <input
          type="text"
          id="documentSearch"
          placeholder="🔍 Search document..."
          oninput="filterDocuments()"
        >

      </div>


      <div class="document-tabs">

        <button
          class="document-tab active"
          onclick="selectDocumentCategory('all', this)"
        >
          All
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('scholarship', this)"
        >
          Scholarship
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('admission', this)"
        >
          Admission
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('exam', this)"
        >
          University Exam
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('caste', this)"
        >
          Caste Certificate
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('validity', this)"
        >
          Caste Validity
        </button>

        <button
          class="document-tab"
          onclick="selectDocumentCategory('domicile', this)"
        >
          Domicile
        </button>

      </div>


      <div
        id="documentList"
        class="document-list"
      ></div>


      <div class="document-disclaimer">

        <strong>Important:</strong>

        Document requirements can vary depending on the
        department, university, college, scheme or authority.
        Please verify the latest official requirements before submission.

      </div>

    </div>

  `;


  renderDocuments();
}


/* =========================================================
   SELECT DOCUMENT CATEGORY
========================================================= */

function selectDocumentCategory(category, button) {

  activeDocumentCategory = category;


  document
    .querySelectorAll(".document-tab")
    .forEach(tab => {

      tab.classList.remove("active");

    });


  if (button) {
    button.classList.add("active");
  }


  renderDocuments();
}


/* =========================================================
   FILTER DOCUMENTS
========================================================= */

function filterDocuments() {

  renderDocuments();
}


/* =========================================================
   RENDER DOCUMENTS
========================================================= */

function renderDocuments() {

  const list =
    document.getElementById("documentList");

  if (!list) return;


  const search =
    document
      .getElementById("documentSearch")
      ?.value
      .toLowerCase()
      .trim() || "";


  let categories = [];


  if (activeDocumentCategory === "all") {

    categories =
      Object.keys(documentData);

  } else {

    categories =
      [activeDocumentCategory];

  }


  let html = "";


  categories.forEach(category => {

    const data =
      documentData[category];

    if (!data) return;


    let documents =
      data.documents.filter(document =>

        document
          .toLowerCase()
          .includes(search)

      );


    if (documents.length === 0) {
      return;
    }


    html += `

      <div class="document-category-section">

        <div class="document-category-title">

          <span>
            ${data.icon}
          </span>

          <h3>
            ${data.title}
          </h3>

        </div>


        <div class="document-grid">

    `;


    documents.forEach((document, index) => {

      html += `

        <div class="document-card">

          <div class="document-check">
            ✓
          </div>

          <div class="document-info">

            <strong>
              ${escapeHTML(document)}
            </strong>

            <span>
              Document ${index + 1}
            </span>

          </div>

        </div>

      `;

    });


    html += `

        </div>

      </div>

    `;

  });


  if (!html) {

    html = `

      <div class="no-result">

        <div class="no-result-icon">
          🔎
        </div>

        <h3>
          No document found
        </h3>

        <p>
          Try another search term or select another category.
        </p>

      </div>

    `;

  }


  list.innerHTML = html;
}


/* =========================================================
   WHATSAPP
========================================================= */

function openWhatsApp(event) {

  if (event) {
    event.preventDefault();
  }


  const whatsappNumber =
    "918799989899";


  const message =
    "Hello Student Seva Maharashtra, मला student service बद्दल माहिती हवी आहे.";


  const url =
    "https://wa.me/" +
    whatsappNumber +
    "?text=" +
    encodeURIComponent(message);


  window.open(
    url,
    "_blank",
    "noopener,noreferrer"
  );
}


/* =========================================================
   NAVIGATION
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const navLinks =
      document.querySelectorAll(
        ".nav-links a"
      );


    navLinks.forEach(link => {

      link.addEventListener(
        "click",
        function () {

          const nav =
            document.querySelector(
              ".nav-links"
            );


          if (nav) {
            nav.classList.remove("active");
          }

        }
      );

    });


    /* Smooth scrolling */

    document
      .querySelectorAll(
        'a[href^="#"]'
      )
      .forEach(anchor => {

        anchor.addEventListener(
          "click",
          function (event) {

            const targetId =
              this.getAttribute("href");

            if (
              !targetId ||
              targetId === "#"
            ) {
              return;
            }


            const target =
              document.querySelector(
                targetId
              );


            if (target) {

              event.preventDefault();

              target.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });

            }

          }
        );

      });

  }
);
function openScholarshipWhatsApp(event) {
  if (event) {
    event.preventDefault();
  }

  const phone = "918799989899";

  const message =
    "Hello, मला Scholarship Form भरायचा आहे. कृपया ₹100 service charge आणि form filling बद्दल माहिती द्या.";

  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}
function openServiceWhatsApp(serviceName) {
  const phone = "918799989899";

  const message =
    "Hello, मला " +
    serviceName +
    " ची सेवा हवी आहे. कृपया ₹100 service charge आणि process बद्दल माहिती द्या.";

  const url =
    "https://wa.me/" +
    phone +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}

/* =========================================================
   END OF SCRIPT
========================================================= */
