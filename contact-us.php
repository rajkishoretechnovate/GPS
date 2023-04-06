<?php
 include('header.php');
?>
  <!-- Start breadcumb section -->
<section class="page-breadcrumb">
	<div class="page-section">
		<div class="breadcumb-overlay"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12 col-sm-12 col-xs-12">
					<div class="breadcrumb text-center">
						<div class="section-titleBar white-headline text-center">
							<h3>contact us</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="nav-path">
		<div class="container">
			<div class="row">
				<ul>
					<li class="home-bread">Home</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	</div>
</section>
<!-- End breadcumb section -->



<!-- Start map section -->


<section class="our-location sec-padding">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="map">
					<iframe src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=Envato+Pty+Ltd,+Elizabeth+Street,+Melbourne,+Victoria,+Australia&amp;aq=0&amp;oq=envato+&amp;sll=37.0625,-95.677068&amp;sspn=39.235538,86.572266&amp;ie=UTF8&amp;hq=Envato+Pty+Ltd,&amp;hnear=Elizabeth+St,+Melbourne+Victoria+3000,+Australia&amp;ll=-37.817942,144.964977&amp;spn=0.01918,0.008866&amp;t=m&amp;output=embed"></iframe>
				</div>
				<div class="get-directions">
					<form action="http://maps.google.com/maps" method="get" target="_blank">
						<input type="text" name="saddr" placeholder="Enter Your Address">
						<input type="hidden" name="daddr" value="Envato Pty Ltd, Elizabeth Street, Melbourne, Victoria, Australia">
						<input type="submit" value="Get directions" class="direction-btn">
					</form>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="leave-msg bg-color sec-padding">
			<div class="container">

				<div class="rox">
					<div class="col-md-7">
						<div class="row">
							<div class="col-md-12 col-sm-12 col-xs-12">
								<div class="section-titleBar text-left">
									<h3>We'd Love to Hear From You</h3>
									<p>Business analytics (BA) is the practice of iterative, methodical exploration of an
										organization's data with emphasis on statistical analysis.</p>
								</div>
							</div>
						</div>
						<div class="form">
							<div class="row">
								<p class="success" id="success" style="display:none;"></p>
								<p class="error" id="error" style="display:none;"></p>
								<form name="contact_form" id="contact_form" method="post" action="#" onsubmit="return false">
									<div class="col-md-4"><input id="name" type="text" data-delay="300" placeholder="Your full name" name="contact_name" class="input"></div>
									<div class="col-md-4"><input id="email" type="text" data-delay="300" placeholder="E-mail Address" name="contact_email" class="input"></div>
									<div class="col-md-4"><input type="text" data-delay="300" placeholder="Subject" name="contact_subject" id="contact_subject" class="input"></div>
									<div class="col-md-12"><textarea data-delay="500" class="required valid" placeholder="Message" name="message" id="inputComments"></textarea></div>
									<div class="col-md-3"><input name=" " type="submit" value="submit" onclick="validateContact();"></div>
								</form>
							</div>
						</div>
					</div>
					<div class="col-md-5">
						<div class="row">
							<div class="col-md-12 col-sm-12 col-xs-12">
								<div class="section-titleBar text-left">
									<h3>GET IN Touch</h3>
									<p>Business analytics (BA) is the practice of iterative, methodical exploration.</p>
								</div>
							</div>
						</div>
						<div class="contact-get">
							<div class="get-in-touch">
								<div class="detail">
									<span><b>Phone:</b>+971-54-445-6994</span>
									<span><b>Email:</b> <a href="#">INFO@GPS-FZC.AE</a></span>
									<span><b>Web:</b> <a href="#">www.gps-fzc.ae</a></span>
									<span><b>Address:</b> Block B, B13-011 SRTIP, Sarjah, UAE.</span>
								</div>
								<div class="social-icons">
									<a href="#" class="fb"><i class="icon-euro"></i></a>
									<a href="#" class="tw"><i class="icon-yen"></i></a>
									<a href="#" class="gp"><i class="icon-google-plus"></i></a>
									<a href="#" class="vimeo"><i class="icon-vimeo4"></i></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
<!-- End map section -->


<?php
 include('footer.php');
?>