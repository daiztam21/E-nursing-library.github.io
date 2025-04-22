class extends{MyHeader} extends HTMLElement {
  container_Callback() {
    this.innerHTML = '
    <!-- Header -->
      <header>
        <div class="wrapper">
    			<div class="header_con">
            <div class="main_logo">
              <a href="<?php //echo get_home_url(); ?>"><figure><img src="images/logo.png" alt="<?php //echo get_bloginfo('name');?>"/></figure></a>
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
    						<li class="current_page_item"><a href="index.html">Home</a></li>
    						<li><a href="procedure.html">Procedures</a></li>
    						<li><a href="clinicalresult.html">Clinical Calculator</a></li>
    					</ul>
    				</div>
    		  </nav>
    			<div class="toggle_nav_close"></div>
    		</div>
    	</div>
    <!-- End Navigation -->
    '
  }
}

customElements.define('my-header', MyHeader)
