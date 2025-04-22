//Accordion for Emergency and Life Procedure
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Header -->
      <header>
        <div class="wrapper">
          <div class="header_con">
            <div class="main_logo">
              <a href="./"><figure><img src="images/logo.png" alt=""/></figure></a>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </header>
    <!-- End Header -->

    <!-- Navigation -->
      <div id="nav_area">
        <div class="nav_toggle_button">
          <div class="logo_wrap"></div>
          <div class="toggle_holder">
            <div class="hamburger hamburger--spin-r">
              <div class="hamburger-box">
              <div class="hamburger-inner"></div>
              </div>
            </div>
            <small>Menu</small>
          </div>
          <div class="clearfix"></div>
        </div>

        <div class="toggle_right_nav">
          <nav class="page_nav">
            <div class="menu_slide_right">
              <a href="<?php //echo get_home_url(); ?>" class="logo_slide_right"><figure><img src="images/logo.png" alt="<?php //echo get_bloginfo('name');?>"/></figure></a>
              <div class="toggle_holder">
                <div class="hamburger hamburger--spin-r">
                  <div class="hamburger-box">
                  <div class="hamburger-inner"></div>
                  </div>
                </div>
                <small>Close</small>
              </div>
              <div class="clearfix"></div>
            </div>

            <div class="wrapper">
              <!--?php wp_nav_menu( array( 'container_class' => 'nav-menu', 'theme_location' => 'primary', 'after' => '<span><i class="fa fa-2x">&nbsp;&nbsp;&nbsp;&nbsp;</i></span>') ); ?-->
              <ul>
                <li class="current_page_item"><a href="./">Home</a></li>
                <li><a href="procedure">Procedures</a></li>
                <li><a href="clinicalresult">Clinical Calculator</a></li>
              </ul>
            </div>
          </nav>
          <div class="toggle_nav_close"></div>
        </div>
      </div>
    <!-- End Navigation -->
    `
  }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!--Footer -->
      <footer>
        <div class="footer_top">
          <div class="wrapper">
            <div class="footer_top_con">

              <div class="footer_left">
              <section>
                <figure>
                  <img src="images/logo.png" alt="">
                </figure>
                <p>A digital guide designed to help nursing students
                and professionals learn, review, and master
                essential nursing procedure anytime, and anywhere!</p>
              </section>
            </div>

            <div  class="footer_right">
              <section>
                <form action="mailto:daiztam21@gmail.com" method="post" enctype="text/plain">
                <fieldset>
                    <label>
                      First Name*
                      <input type="text" name="first_name">
                    </label>
                    <label>
                      Last Name*
                      <input type="text" name="last_name">
                    </label>
                    <label>
                    Email
                    <input type="email" name="email">
                    </label>
                    <label>
                    Phone
                    <input type="number" name="phone_number">
                    </label>
                    <input type="submit" value="Send">
                </fieldset>
                </form>
              </section>
            </div>

              <!-- <div class="footer_logo">
                <a href="<?php //echo get_home_url(); ?>"><figure><img src="images/footer-logo.png" alt="<?php //echo get_bloginfo('name');?>"></figure></a>
              </div> -->
            </div>

            <div class="footer_btm">

            </div>

          </div>
        </div>
      </footer>
    `
  }
}

customElements.define('my-footer', MyFooter)

class MyBanner extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <!-- Banner -->
      <div id="banner">
        <div class="wrapper">
          <div class="bnr_con">

            <div class="slider_wrapper">
              <div class="slider">
                <ul class="rslides">
                  <li><figure><img src="images/nursing-images/main-background-picture.jpg" alt="nurses smiling"/></figure></li>
                </ul>
              </div>
            </div>

            <div class="mobi_ban">
              <figure><img src="images/nursing-images/main-background-picture.jpg" alt="nurses"></figure>
            </div>

            <div class="bnr_info">
              <h2>Learn, Review, and Master!</h2>
              <a href="procedure.html">STUDY</a>
            </div>
          </div>
        </div>
      </div>
    <!-- End Banner -->
    `
  }
}

customElements.define('my-banner', MyBanner)

// ADULT DRUG DOSAGE CALCULATION
function calcAdult() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let Dosage;
    // Calculate DOSAGE
        Dosage = num1 / num2 * num3;

    console.log(Dosage);
    document.getElementById("output").textContent = Dosage;
    return false;
}

// PEDIATRIC FORMULAS CALCULATION
function calcPedia() {
    let age = document.getElementById("age").value;
    let p1 = parseInt(document.getElementById("P1").value);
    let p2 = parseInt(document.getElementById("P2").value);
    let PediaDosage;
    // Calculate PEDIATRIC FORMULAS
    if (age === 'infants') {
        PediaDosage = p1 / 150 * p2;
    } else {
        PediaDosage = (p1 / (p1 + 12 )) * p2;
    }
    console.log(PediaDosage);
    document.getElementById("output_pedia").textContent = Math.round(PediaDosage);
    return false;
}

// PEDIATRIC FORMULAS CALCULATION (Clark’s Rule (Weight-Based Dosing))
function calcPediaClark() {
    let pc1 = parseInt(document.getElementById("PC1").value);
    let pc2 = parseInt(document.getElementById("PC2").value);
    let PediaClark;
    // Calculate Clark’s Rule (Weight-Based Dosing)
        PediaClark = pc1 / 150 * pc2;

    console.log(PediaClark);
    document.getElementById("output_pediaClark").textContent = Math.round(PediaClark);
    return false;
}

//INTRAVENOUS (IV) CALCULATIONS - Flow Rate (gtt/min)
function calcIntra1() {
    let flowrate1 = parseInt(document.getElementById("FlowRate1").value);
    let flowrate2 = parseInt(document.getElementById("FlowRate2").value);
    let flowrate3 = parseInt(document.getElementById("FlowRate3").value);
    let FlowRate;
    let Convert_Hr;
    // Calculate Clark’s Rule (Weight-Based Dosing)
        Convert_Hr = flowrate3 * 60;
        FlowRate = (flowrate1 * flowrate2) / Convert_Hr;

    console.log(FlowRate);
    document.getElementById("output_FlowRate").textContent = Math.round(FlowRate);
    return false;
}

//INTRAVENOUS (IV) CALCULATIONS - mL/hr Calculation (for IV Infusion Pumps)
function calcIntra2() {
    let infus1 = parseInt(document.getElementById("Infus1").value);
    let infus2 = parseInt(document.getElementById("Infus2").value);
    let CalcInfuse;
    // Calculate Clark’s Rule (Weight-Based Dosing)
        CalcInfuse = infus1 / infus2;

    console.log(CalcInfuse);
    document.getElementById("output_InfusePumps").textContent = Math.round(CalcInfuse);
    return false;
}

//INTRAVENOUS (IV) CALCULATIONS - Gtts/min
function calcIntra3() {
  let gtt1 = parseInt(document.getElementById("Gtts1").value);
  let gtt2 = parseInt(document.getElementById("Gtts2").value);
  let gtt3 = parseInt(document.getElementById("Gtts3").value);
  let CalcGtts;
  let Min = 60;
  // Calculate Gtts/min
      CalcGtts = (gtt1 * gtt2) / (gtt3 * 60);

  console.log(CalcGtts);
  document.getElementById("output_Gtts").textContent = Math.round(CalcGtts);
  return false;
}

//INTRAVENOUS (IV) CALCULATIONS - Time to Last (Hrs)
function calcIntra4() {
  let time1 = parseInt(document.getElementById("TL1").value);
  let time2 = parseInt(document.getElementById("TL2").value);
  let time3 = parseInt(document.getElementById("TL3").value);
  let CalcTimeLast;
  let t = 60;
  // Calculate Gtts/min
      CalcTimeLast = (time1 * time2) / (time3 * t);

  console.log(CalcTimeLast);
  document.getElementById("output_TimeLast").textContent = CalcTimeLast;
  return false;
}


//mySlides
let slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  //}
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}
