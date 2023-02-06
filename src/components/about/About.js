import styles from './About.module.scss'
import useDocumentTitle from '../../utils/setDocumentTitle'
import { ReactComponent as HtmlLogo } from '../../assets/images/svg/logo-html.svg'
import { ReactComponent as CssLogo } from '../../assets/images/svg/logo-css.svg'
import { ReactComponent as JsLogo } from '../../assets/images/svg/logo-javascript.svg'
import { ReactComponent as ReactLogo } from '../../assets/images/svg/logo-react.svg'

const About = () => {
  useDocumentTitle('About me')

  return (
    <article className={styles.about}>
      <h1 className={styles.aboutHeading}>Hey folks &#128075;&nbsp;</h1>
      <div className={styles.aboutDescription}>
        <div className={styles.aboutDescriptionInner}>
          <p>
            My name is Oleksand and I'm well-qualified frontend developer and
            web accessibility engineer from Ukraine &#x1F1FA;&#x1F1E6;
          </p>
          <p>
            I'm experienced in design systems development and its implementation
            into product.
          </p>
          <p>
            I have extensive implementation experience of web accessibility
            specifications and into commercial products, especialy into e-shops.
          </p>
          <p>
            My love is HTML semantic and using native elements features instead
            of JS overhead.
          </p>
          <p>
            I have a rich experience of close cooperation with UI/UX engineers.
          </p>
          <p>
            I've worked on creating architecture of Angular based web
            application and migrating from outsource to inhouse development
            within Rozetka company.
          </p>
          <p>In short I have 10 years experience in interfaces development.</p>
          <p>Since January 2022 I work on React-based projects.</p>
        </div>

        <div className={styles.aboutDescriptionLogos}>
          <JsLogo className={styles.aboutDescriptionLogosJs} />
          <ReactLogo className={styles.aboutDescriptionLogosReact} />
          <HtmlLogo className={styles.aboutDescriptionLogosHtml} />
          <CssLogo className={styles.aboutDescriptionLogosCss} />
        </div>
      </div>
    </article>
  )
}

export default About
