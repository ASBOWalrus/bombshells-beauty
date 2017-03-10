<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Contact</title>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'></script>
    <script src='https://getbootstrap.com/2.0.4/assets/js/bootstrap-dropdown.js'></script>
    <script src='../js/dropdown.js'></script>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
    <link href="https://fonts.googleapis.com/css?family=Gudea|Old+Standard+TT:400i" rel="stylesheet">
    <link rel='stylesheet' type='text/css' href='../css/main.css'>
    <link rel='stylesheet' type='text/css' href='../css/contact.css'>
  </head>
  <body>
    <header class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-xs-4">
            <a href="../index.html"><img id="logo" src="../images/logo.jpg" alt="Bombshells Beauty Logo"></a>
          </div>
          <nav class="col-xs-8">
            <a class="btn btn-link nav-btn" href="../index.html">Home</a>
            <a class="btn btn-link nav-btn" href="../html/beauty.html">Beauty</a>
            <a class="btn btn-link nav-btn" href="../html/skin-body-care.html">Skin & Body Care</a>
            <a class="btn btn-link nav-btn" href="../html/holistic.html">Holistic</a>
            <a class="btn btn-link nav-btn" href="../html/wedding-pamper.html">Wedding & Pamper</a>
            <div class="btn-group">
              <a class="btn btn-link dropdown-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More 
                <svg class="arrow" viewBox = "0 0 64 64" width="12" height="12">
                  <svg>
                    <polygon points="0 18 4 14 32 42 60 14 64 18 32 50"></polygon>
                  </svg>
                </svg>
              </a>
              <ul class="dropdown-menu">
                <li><a href="../html/price-list.html">Price List</a></li>
                <li><a href="../html/beauty-at-your-own-home.html">Beauty at Your Own Home</a></li>
                <li><a href="../html/contact.php">Contact</a></li>
                <li><a href="../html/photo-gallery.html">Photo Gallery</a></li>
              </ul>
            </div>            
          </nav>
        </div>
      </div>
    </header>
    <main class="container-fluid">
      <div id="contact">
        <div class="container">
          <h1>Contact Us</h1>
          <hr>
          <div class="col-xs-12">
            <div id="contact-form" class="col-xs-6">
              <?php
								$nameErr = $emailErr = "";
								$name = $email = $message = $msg_body = "";
								$email_to = "joemarvin95@gmail.com";
								$subject = "Message from Bombshells Beauty Contact Form";
								$sent = "Send";

								if ($_SERVER["REQUEST_METHOD"] == "POST")
								{
									if(empty($_POST["name"]))
									{
										$name = "";
									}
									else
									{
										$name = test_input($_POST["name"]);
									}
  
									if (empty($_POST["email"]))
									{
										$emailErr = "* Email is required";
									}
									else
									{
										$email = test_input($_POST["email"]);
										if (!filter_var($email, FILTER_VALIDATE_EMAIL))
										{
											$emailErr = "* Invalid email format";
											$email = "";
											$sent = "Send";
										}
									}

									if (empty($_POST["message"]))
									{
										$message = "";
									}
									else
									{
										$message = test_input($_POST["message"]);
									}

									if(filter_var($email, FILTER_VALIDATE_EMAIL))
									{
										$sent = "Message sent";
									}
									else
									{
										$sent = "Send";
									}
								}

								function test_input($data) {
									$data = trim($data);
									$data = stripslashes($data);
									$data = htmlspecialchars($data);
									return $data;
								}
							?>

              <h2>Drop us a line!</h2>
              <p>* = required</p>
              <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
                <div class="form-group">
                  <input type="text" id="contact-form-input-email" name="email" placeholder="Email*" value="<?php echo $email;?>">
									<span class="error"><?php echo $emailErr;?></span>
                </div>
                <div class="form-group">
                  <input type="text" id="contact-form-input-name" name="name" placeholder="Name" value="<?php echo $name;?>">
									<span class="error"><?php echo $nameErr;?></span>
                </div>
                <div class="form-group">
                  <textarea id="contact-form-input-message" rows="8" name="message" placeholder="Message"><?php echo $message;?></textarea>
                </div>
                <input type="submit" class="btn btn-default" id="contact-form-input-submit" name="submit" value="<?php echo $sent;?>">
              </form>

              <?php
								if($email != "")
								{
									echo "<p class=\"sent\">Your message has been sent. Thank you for contacting us!</p>";

									$msg_body = $message . "\n\n";
									$msg_body .= "From:\n";
									$msg_body .= $name;
									$msg_body = wordwrap($msg_body, 70);
									$msg_body = str_replace("\n.", "\n..", $msg_body);

									mail($email_to, $subject, $msg_body, "From:" . $email);
								}                
              ?>
							<script>
								if("<?php echo $sent;?>" == "Message sent")
								{
									$("#contact-form-input-submit").prop("disabled", "disabled")
								}
							</script>
            </div>
            <div id="contact-details" class="col-xs-6">
              <h2>Better yet, see us in person!</h2>
              <p>
                We love our customers, so feel free to visit during normal business hours
              </p>
              <h2>Address</h2>
              <p>
                27 Bridge Street, Horncastle, Lincolnshire, LN9 5JB <br>
                07983 131325
              </p>
              <h2>Hours</h2>
              <p>
                Monday - On request <br>
                Tuesday - 10am - 4pm <br>
                Wednesday - On request <br>
                Thursday - 10am - 4pm <br>
                Friday - 9am - 7pm <br>
                Saturday - 9am - 2pm <br>
                Sunday - Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="map-container">
        <div class="container">
          <div class="dir-btn">
            <button class="btn">Get Directions</button>
          </div>
          <div id="map"></div>
          <script src='../js/map.js'></script>
          <script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyA2LUsBY1Y79s8sQkwr-flUC2xydreX6I8&callback=initMap' async defer></script>
        </div>
      </div>
    </main>
    <footer class="container-fluid">
      <div class="container">
        <div class="row">
          <ul class="col-xs-12" id="social-list">
            <li>
              <a target="_blank" href="https://www.facebook.com/bombshellshorncastle">
                <img src="../images/facebook/FB-f-Logo__white_50.png" alt="Facebook">
              </a>
            </li>
          </ul> 
        </div>
      </div>
    </footer>
  </body>
</html>