import Link from 'next/link'
import React from 'react'

const Leftbar = () => {
    return (
        <div><ul className="menu w-1/4 text-secondary rounded-r-xl pt-10 pl-5 min-w-[20vw]">
            <li className='focus'><Link href="/Tutorial">Introduction</Link></li>
            <li>
                <details open>
                    <summary>Steps</summary>
                    <ul>
                        <li><Link href="/Tutorial/Data-Upload">Data Upload</Link></li>
                        <li><Link href="/Tutorial/Data-Preview">Data Preview</Link></li>
                        <li>
                            <details open>
                                <summary>Data Vizualisation</summary>
                                <ul>
                                    <li><Link href="/Tutorial/Data-Visualization/Main-Dashboard">Main Dashboard</Link></li>
                                    <li><Link href="/Tutorial/Data-Visualization/Visualizations">Visualizations</Link></li>
                                    <li><Link href="/Tutorial/Data-Visualization/Best-Dashboards">Best Dashboards</Link></li>
                                    <li><Link href="/Tutorial/Data-Visualization/Personalized-Dashboards">Personalized Dashboards</Link></li>
                                    <li><Link href="/Tutorial/Data-Visualization/Additional-Help">Additional Help</Link></li>
                                    <li><Link href="/Tutorial/Data-Visualization/Parameters-Settings">Parameters Settings</Link></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </details>
            </li>
            <li><Link href={""}>Publication and Presentation</Link></li>
            <li><Link href={""}>Categorization</Link></li>
        </ul></div>
    )
}

export default Leftbar