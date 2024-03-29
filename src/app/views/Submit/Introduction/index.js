// tools
import React from "react"
import { Link } from "react-router"

// components
import { Header, Section, Article } from "../../../components/Article"
import { PageButton } from "../../../components/Buttons"
import { Figure } from "../../../components/Pictures"

// render
export const Introduction = props => {
	return(
		<Article>
			<Header 
				pageTitle="Submit for Review" 
				pageSubtitle="Photos shot on film, photo essays, and stories" 
				pageByline="Edited by dmitrizzle"
			/>
			<Section>
				
				<PageButton to="/submit/compose" red>Submit Now</PageButton>
				<p><Link to="/submit/login"><strong>Log in</strong></Link> to edit your profile and vew your existing submissions.</p>
				
				<hr />
				
				<p>Submitting your work is really easy. Simply drag and drop your scanned photograph(s) and/or write your story. Double-check your spelling and image quality and click &ldquo;Finished&rdquo;.</p>
				<p><strong>Analog.Cafe editor will review your work and get back to you with the decision within a week.</strong></p>
				
				<Figure src="images/poster.jpg">&ldquo;Midnight Jam,&rdquo; shot on Ilford Pan 400 with Canon QL25 and pushed to 1600ISO.</Figure>
								
				<h3>Featured Images Library</h3>
				<p>You can can re-publish any of the images from the &ldquo;Featured Images Library&rdquo; within your work. By doing this you are starting an <strong>instant collaboration</strong> with some of the best film photographers on Analog.Cafe.</p>
				<p>You have the premission from the photographers to use their images within your submission here on Analog.Cafe.</p>
				<p>The image(s) that you upload with your submission are reviewed and selectively given &ldquo;featured&rdquo; status (you can opt out). Your featured images are always re-published with a clear link to your Analog.Cafe portfolio.</p>
				
				<h3>Topics & Submission Types</h3>
				<p>You can write or photograph pretty much anything you like, as long as it&rsquo;s not offensive or stolen. NSFW submissions aren&rsquo;t accepted (yet).</p>
				<p>Submission types typically accepted:</p>
				
				<ul>
					<li><strong>Just the photo</strong> &mdash; one image, a title and perhaps a caption for the photo.</li>
					<li><strong>Photo essay</strong> &mdash; you can have one image with a story, or a few images that make up a story. Your story could be a written word or you could tell it with images only.</li>
					<li><strong>Article</strong> &mdash; while photo essays are considered <em>storytelling through art</em>, articles could be technical, newsworthy or simply fun to read anecdoes.</li>
					<li><strong>Beyond the grain</strong> &mdash; Analog.Cafe focuses on film photography as creative medium. &ldquo;Beyond the grain&rdquo; is <em>everything but film photography</em> that&rsquo;s related to art, creativity or something the editor may find fitting here.</li>
				</ul>
				
				<blockquote>
					<p>The <strong>collaborative publication platform</strong> for the film photography community. Anyone can submit images, photo essays and articles through the beautiful, easy to use web app. No more complicated, ugly forms.</p>
				</blockquote>

				
			</Section>
		</Article>
	)
}