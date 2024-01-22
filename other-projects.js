const projects = [
	`<a href="https://rdrop.link" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-bg-63f1dbcebfbe542230fabe6e-500.png" alt="rDrop.link — A free P2P file transfer service that works on all devices" />
		<strong>rDrop.link</strong>
		<span>A free P2P file transfer service that works on all devices</span>
	</a>`,
	`<a href="https://re-gpt.email" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/icon-65259f71dd5d069b72f0ed47-500.png" alt="Re:GPT — Chrome Extension that integrates ChatGPT into Gmail and Outlook" />
		<strong>Re:GPT</strong>
		<span>Chrome Extension that integrates ChatGPT into Gmail and Outlook</span>
	</a>`,

	`<a href="https://quickcall.cc" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-square-bg-64947cfdfc9976d7144ed8c1-500.png" alt="QuickCall.cc — Time-limited video conferencing for efficient meetings" />
		<strong>QuickCall.cc</strong>
		<span>Time-limited video conferencing for efficient meetings</span>
	</a>`,

	`<a href="https://pomoplanner.app" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-63f1db9bbfbe542d01fabe6d-500.png" alt="Pomoplanner.app — A pomodoro-based daily planner to boost your productivity" />
		<strong>PomoPlanner</strong>
		<span>A pomodoro-based daily planner to boost your productivity</span>
	</a>`,

	`<a href="https://alpac.app" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-square-64156b8b3dc5e9515dfdd94f-500.png" alt="Alpac.app — An Extendable and Highly Customizable Website Builder" />
		<strong>Alpac.app</strong>
		<span>An Extendable and Highly Customizable Website Builder</span>
	</a>`,

	`<a href="https://ybouane.com/ffmpeg-ui" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/icon-648a0b9e532929030b292c5b-500.png" alt="FFMPEG UI — A user interface to quickly and easily convert media files using FFMPEG behind the scenes." />
		<strong>FFMPEG UI</strong>
		<span>Fast tool to convert media file formats</span>
	</a>`,

	`<a href="https://profiler.ybouane.com/" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-656789c7993bb375730cadd3-500.png" alt="Profiler — A Free Google Chrome Extension that integrates into Twitter (X) and Reddit that leverages the power of AI to craft an insightful analysis of a person based on their tweets or posts." />
		<strong>Profiler</strong>
		<span>Crafts Insightful Profiles by Analyzing Social Feeds</span>
	</a>`,

	`<a href="https://fablerr.app/" target="_blank">
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/logo-6579ced07f399f5fd65a257a-500.png" alt="Fabler — A Free Google Chrome Extension that integrates into Twitter (X), Reddit, Gmail and any website that leverages the power of AI to craft engaging posts and replies to increase your social presence." />
		<strong>Fablerr</strong>
		<span>AI Writer to Boost Social Media Engagement</span>
	</a>`,
].filter(p=>!p.includes(window.location.hostname.replace('www.', '')));
const pick = (arr, n) => {
	arr = arr.slice(0);
	var out = [];
	for(let k=0;k<n;k++) {
		out.push(arr.splice(Math.floor(Math.random()*arr.length), 1));
	}
	return out.flat();
};
var html = `<h2>Check out my other projects</h2>
<div>
	<div>
		<img src="https://yawb-user-images.s3.amazonaws.com/user-images/63a561aa29d4c55d38870f6a/dsc09410-edited2-63f1c7d5ee0d964d69188dbb.jpg" alt="@ybouane — Indie Developper" />
		<div id="ybouane-links">
			<a href="https://ybouane.com/" target="_blank" title="@ybouane — Indie Developper"><svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/></svg></a>
			<a href="https://twitter.com/ybouane" target="_blank" title="@ybouane — Indie Developper"><svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
			<a href="https://instagram.com/ybouane" target="_blank" title="@ybouane — Travel Content"><svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
			<a href="https://youtube.com/ybouane" target="_blank" title="@ybouane — Travel Cinematic Videos"><svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
		</div>
	</div>
	${pick(projects, 3).map(pro=>pro.replaceAll('" target="_blank">', '?utm_source='+window.location.host.replace('www.', '')+'" target="_blank">')).join('')}
</div>
<style>
#my-other-projects {
	text-align:center;
	margin-top:15px;
}
#my-other-projects>div {
	display:flex;
	flex-flow:row wrap;
	align-items:flex-start;
	justify-content:center;
	gap:15px;
	margin-top:10px;
}
#my-other-projects img {
	border-radius:50%;
	aspect-ratio:1 / 1;
	object-fit:cover;
	width:120px;
	margin-bottom:12px;
}
#my-other-projects a {
	color:inherit;
	text-decoration:none;
}
#my-other-projects>div>a, #my-other-projects>div>div {
	display:flex;
	flex-flow:column nowrap;
	align-items:center;
	width:200px;
	transition:transform 0.25s;
}
#my-other-projects>div>a:hover, #my-other-projects>div>div:hover {
	transform:scale(1.1);
}
#my-other-projects a span {
	font-size:0.8em;
}
#ybouane-links {
	display:flex;
	flex-flow:row nowrap;
	align-items:center;
	gap:10px;
}
#my-other-projects svg {
	width:0.9em;
}
</style>
`;
if(document.querySelector('#my-other-projects'))
	document.querySelector('#my-other-projects').innerHTML = html;
else
	document.write('<div id="my-other-projects">'+html+'</div>');