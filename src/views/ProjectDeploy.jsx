import styles from "./ProjectDeploy.module.css";

export default function ProjectDeploy() {
    return <div className={styles["project-bg"]}>
        <h1>Let&apos;s deploy this application to Vercel!</h1>
        <p>
            <ul>
                <li>First things first: Let&apos;s clone this repo to our local <a href="https://github.com/">Github</a>.</li>
                <li>
                    let&apos;s clone it locally, and add the following package to the global packages in our machines:<br />
                    <pre>
                        npm i -g vercel
                    </pre>
                </li>
                <li>Now we need to log in to Vercel. Type in the following command:<br/>
                    <pre>vercel</pre><br/>
                    then choose the login method you used to set up your vercel account.
                </li>
                <li>
                    What? We didn't set it up yet? Let's go <a href="https://vercel.com">there</a> then:<br />
                </li>
                <li>
                    Success? Then let's deploy our code. The <pre>vercel</pre> command should now ask if we want to deploy our code.
                    <ul>
                        <li>Choose <pre>Y</pre>.</li>
                        <li>Now choose the scope you want to set it up in.</li>
                        <li>Do we want to link it to an existing project? Usually no, so we choose <pre>N</pre>.</li>
                        <li>Type now the name of the project we want to publish.</li>
                        <li>Choose the path of the code in the project - by default it picks the usual location of <pre>./</pre>.</li>
                        <li>It will usually auto-detect settings.</li>
                        <li>After that, it will build the project. Take a sip of coffee/tea and relax <pre>☕</pre></li>
                    </ul> 
                </li>
                <li>Soon the app will be built and deployed, if there were no errors - if there were, let&apos;s try to fix them!</li>
            </ul>
            
        </p>
    </div>
}