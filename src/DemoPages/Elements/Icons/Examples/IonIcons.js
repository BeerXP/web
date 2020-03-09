import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Row, Col, Card, CardBody, Container } from "reactstrap";

// import Ionicon from 'react-ionicons'

const iconData = [
	"ios-add",
	"ios-alert",
	"ios-american-football-outline",
	"ios-analytics-outline",
	"ios-analytics",
	"ios-apps-outline",
	"ios-arrow-forward",
	"ios-arrow-round-back",
	"ios-arrow-round-down",
	"ios-arrow-round-forward",
	"ios-arrow-up",
	"ios-backspace",
	"ios-basket-outline",
	"ios-basket",
	"ios-battery-dead",
	"ios-battery-full",
	"ios-beaker-outline",
	"ios-beaker",
	"ios-beer",
	"ios-bonfire-outline",
	"ios-bookmark",
	"ios-bowtie-outline",
	"ios-brush",
	"ios-bug-outline",
	"ios-bulb-outline",
	"ios-bulb",
	"ios-bus",
	"ios-cafe-outline",
	"ios-calendar-outline",
	"ios-car-outline",
	"ios-car",
	"ios-card-outline",
	"ios-card",
	"ios-cash",
	"ios-chatbubbles-outline",
	"ios-clipboard-outline",
	"ios-clock-outline",
	"ios-closed-captioning-outline",
	"ios-cloud-done",
	"ios-cloud-outline",
	"ios-cloud",
	"ios-code-download",
	"ios-code",
	"ios-cog-outline",
	"ios-color-fill-outline",
	"ios-color-fill",
	"ios-color-palette-outline",
	"ios-color-palette",
	"ios-construct-outline",
	"ios-construct",
	"ios-contact",
	"ios-contacts-outline",
	"ios-contrast",
	"ios-create-outline",
	"ios-create",
	"ios-crop-outline",
	"ios-cube",
	"ios-cut-outline",
	"ios-done-all",
	"ios-easel-outline",
	"ios-easel",
	"ios-exit",
	"ios-expand",
	"ios-off-outline",
	"ios-eye-off",
	"ios-filing",
	"ios-finger-print",
	"ios-flash",
	"ios-flask-outline",
	"ios-flask",
	"ios-flower-outline",
	"ios-flower",
	"ios-folder-open-outline",
	"ios-funnel",
	"ios-git-branch",
	"ios-git-commit",
	"ios-git-network",
	"ios-git-pull-request",
	"ios-grid",
	"ios-hammer",
	"ios-headset",
	"ios-help-buoy",
	"ios-help-circle-outline",
	"ios-help",
	"ios-ice-cream-outline",
	"ios-ice-cream",
	"ios-image",
	"ios-images-outline",
	"ios-images",
	"ios-information",
	"ios-ionic",
	"ios-ionitron-outline",
	"ios-ionitron",
	"ios-jet",
	"ios-laptop",
	"ios-leaf",
	"ios-link",
	"ios-list-box",
	"ios-list",
	"ios-locate-outline",
	"ios-locate",
	"ios-lock-outline",
	"ios-lock",
	"ios-log-in",
	"ios-log-out",
	"ios-male",
	"ios-map-outline",
	"ios-map",
	"ios-medal-outline",
	"ios-megaphone-outline",
	"ios-mic-off-outline",
	"ios-mic-off",
	"ios-mic-outline",
	"ios-mic",
	"ios-microphone-outline",
	"ios-microphone",
	"ios-move",
	"ios-musical-note",
	"ios-no-smoking-outline",
	"ios-notifications-off-outline",
	"ios-notifications-off",
	"ios-notifications",
	"ios-nuclear-outline",
	"ios-open",
	"ios-options-outline",
	"ios-options",
	"ios-outlet",
	"ios-paper",
	"ios-partly-sunny-outline",
	"ios-paw-outline",
	"ios-person-add-outline",
	"ios-person-add",
	"ios-phone-landscape",
	"ios-phone-portrait",
	"ios-pin",
	"ios-pint",
	"ios-podium",
	"ios-power-outline",
	"ios-print-outline",
	"ios-print",
	"ios-pulse-outline",
	"ios-pulse",
	"ios-qr-scanner",
	"ios-quote-outline",
	"ios-radio-button-on",
	"ios-radio-outline",
	"ios-rainy",
	"ios-reorder",
	"ios-resize",
	"ios-return-right",
	"ios-rose",
	"ios-send",
	"ios-settings-outline",
	"ios-share",
	"ios-shirt",
	"ios-skip-forward",
	"ios-square",
	"ios-stats-outline",
	"ios-stats",
	"ios-tablet-portrait",
	"ios-thermometer-outline",
	"ios-thermometer",
	"ios-thumbs-down-outline",
	"ios-thumbs-down",
	"ios-thumbs-up-outline",
	"ios-thumbs-up",
	"ios-thunderstorm-outline",
	"ios-time",
	"ios-trophy-outline",
	"ios-trophy",
	"ios-umbrella-outline",
	"ios-umbrella",
	"ios-unlock-outline",
	"ios-volume-mute",
	"ios-volume-off",
	"ios-volume-up",
	"ios-warning",
	"ios-watch",
	"ios-water",
	"ios-wifi-outline",
	"ios-wifi",
	"ios-wine",
	"ios-woman",
	"logo-bitcoin",
	"logo-chrome",
	"logo-css3",
	"logo-designernews",
	"logo-dribbble",
	"logo-dropbox",
	"logo-facebook",
	"logo-github",
	"logo-google",
	"logo-html5",
	"logo-instagram",
	"logo-javascript",
	"logo-linkedin",
	"logo-markdown",
	"logo-nodejs",
	"logo-octocat",
	"logo-pinterest",
	"logo-playstation",
	"logo-rss",
	"logo-sass",
	"logo-snapchat",
	"logo-tumblr",
	"logo-twitch",
	"logo-twitter",
	"logo-usd",
	"logo-vimeo",
	"md-alert",
	"md-american-football",
	"md-analytics",
	"md-backspace",
	"md-barcode",
	"md-basket",
	"md-beer",
	"md-body",
	"md-bookmarks",
	"md-build",
	"md-bulb",
	"md-calendar",
	"md-camera",
	"md-card",
	"md-cash",
	"md-clipboard",
	"md-cloud-download",
	"md-cloud",
	"md-cloudy-night",
	"md-code",
	"md-color-palette",
	"md-contact",
	"md-cube",
	"md-download",
	"md-exit",
	"md-expand",
	"md-film",
	"md-flag",
	"md-flask",
	"md-folder",
	"md-funnel",
	"md-game-controller-a",
	"md-game-controller-b",
	"md-git-commit",
	"md-git-compare",
	"md-git-merge",
	"md-git-network",
	"md-glasses",
	"md-globe",
	"md-grid",
	"md-hammer",
	"md-heart",
	"md-home",
	"md-image",
	"md-images",
	"md-information",
	"md-ionic",
	"md-key",
	"md-keypad",
	"md-list-box",
	"md-list",
	"md-lock",
	"md-log-in",
	"md-log-out",
	"md-man",
	"md-map",
	"md-medkit",
	"md-menu",
	"md-navigate",
	"md-no-smoking",
	"md-notifications-off",
	"md-open",
	"md-paper-plane",
	"md-phone-portrait",
	"md-pint",
	"md-plane",
	"md-pricetag",
	"md-print",
	"md-pulse",
	"md-radio",
	"md-rainy",
	"md-remove",
	"md-resize",
	"md-rewind",
	"md-ribbon",
	"md-rose",
	"md-school",
	"md-send",
	"md-skip-forward",
	"md-snow",
	"md-star",
	"md-stats",
	"md-stopwatch",
	"md-subway",
	"md-swap",
	"md-tablet-portrait",
	"md-thumbs-up",
	"md-thunderstorm",
	"md-train",
	"md-trending-up",
	"md-trophy",
	"md-volume-mute",
	"md-water",
	"md-woman",
	"ios-arrow-back",
	"ios-barcode",
	"ios-baseball-outline",
	"ios-baseball",
	"ios-basketball-outline",
	"ios-body-outline",
	"ios-body",
	"ios-book-outline",
	"ios-book",
	"ios-bookmarks-outline",
	"ios-briefcase-outline",
	"ios-browsers",
	"ios-calculator",
	"ios-calendar",
	"ios-color-filter-outline",
	"ios-download",
	"ios-eye-outline",
	"ios-film",
	"ios-flag",
	"ios-folder",
	"ios-football",
	"ios-game-controller-a-outline",
	"ios-game-controller-b-outline",
	"e-controller-b",
	"ios-glasses-outline",
	"ios-glasses",
	"ios-keypad-outline",
	"ios-medkit",
	"ios-more",
	"ios-navigate",
	"ios-nutrition-outline",
	"ios-people-outline",
	"ios-people",
	"ios-photos",
	"ios-play",
	"ios-pricetags-outline",
	"ios-pricetags",
	"ios-redo",
	"ios-rewind",
	"ios-speedometer-outline",
	"ios-star",
	"ios-stopwatch-outline",
	"ios-stopwatch",
	"ios-tennisball",
	"ios-timer-outline",
	"ios-timer",
	"ios-videocam"
];

const IonIconsExample = () => (
	<Fragment>
		<ReactCSSTransitionGroup
			component="div"
			transitionName="TabsAnimation"
			transitionAppear={true}
			transitionAppearTimeout={0}
			transitionEnter={false}
			transitionLeave={false}
		>
			<Container fluid>
				<Row>
					<Col md="12">
						<Card className="main-card mb-3">
							<CardBody>
								<Row>
									<Col md="2">
										<div className="font-icon-wrapper">
											{/* <Ionicon icon="ios-refresh" fontSize="60px" color="#347eff" rotate={true}/> */}
											<p>rotate=true</p>
										</div>
									</Col>
									<Col md="2">
										<div className="font-icon-wrapper">
											{/* <Ionicon icon="md-pizza" shake={true} fontSize="60px" color="orange"/> */}
											<p>shake=true</p>
										</div>
									</Col>
									<Col md="2">
										<div className="font-icon-wrapper">
											{/* <Ionicon icon="md-heart" fontSize="60px" color="red" beat={true}/> */}
											<p>beat=true</p>
										</div>
									</Col>
									<Col md="2">
										<div className="font-icon-wrapper">
											{/* <Ionicon icon="md-infinite" fontSize="60px" color="#333" rotate={true}/> */}
											<p>rotate=true</p>
										</div>
									</Col>
									<Col md="2">
										<div className="font-icon-wrapper">
											{/* <Ionicon icon="logo-nodejs" onClick={() => alert('Hi!')} fontSize="60px" */}
											color="#43853d"/>
											<p>onClick event</p>
										</div>
									</Col>
								</Row>
							</CardBody>
						</Card>
					</Col>
					<Col md="12">
						<Card className="main-card mb-3">
							<CardBody>
								<Row>
									{iconData.map(iconName => (
										<Col md="2" key={iconName}>
											<div className="font-icon-wrapper">
												{/* <Ionicon
													fontSize="35px"
													color="#333"
													icon={iconName}
												/> */}
												<p>{iconName}</p>
											</div>
										</Col>
									))}
								</Row>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</ReactCSSTransitionGroup>
	</Fragment>
);

export default IonIconsExample;
