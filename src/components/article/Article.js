import React from 'react'
import img3 from "../../image/per.png"
import "./style.css"
const Article = () => {
  return (
    <div className='article-main'>
<div className='left-side-sec'>
  <h3>Global Report on the Impact and Response to COVID-19</h3>
  <p>
  Introduction
The global report provides a comprehensive analysis of the impact and response to the COVID-19 pandemic on a global scale. It examines the multifaceted challenges and explores
 the collective efforts undertaken by countries, organizations, and communities to mitigate the spread of the virus, address its consequences, and facilitate recovery.

Global Health Impact
This section presents an overview of the health impact of COVID-19 worldwide. It includes an analysis of infection rates, mortality rates, and the burden on healthcare systems.\
 The report examines the disparities in healthcare access, vulnerability of certain populations, and the strain on medical resources.

<div className='text-inner'>
Socioeconomic Consequences
The report delves into the socioeconomic repercussions of the pandemic. It analyzes the disruption of global supply chains, the decline in economic activity, and the impact
 on employment and livelihoods. The report also explores the unequal economic impact on various sectors and vulnerable communities, as well as the measures taken by governments
  and international institutions to mitigate these effects.
</div>

Global Policy Response
This section focuses on the global policy response to COVID-19. It examines the strategies employed by governments and international organizations to control the spread of the vi
rus,
<div className='text-inner'>
including lockdown measures, testing and contact tracing, vaccination campaigns, and international travel restrictions. The report also evaluates the effectiveness of these me
 asures and highlights successful approaches and lessons learned.
The global report provides a comprehensive analysis and overview of the current state of affairs on a global scale.
 It presents an in-depth examination of various sectors, including economics, politics, social issues, and environmental concerns. 
 The report delves into the intricate interplay between countries, highlighting geopolitical dynamics, trade relationships, and regional cooperation efforts. 
 It offers insightful perspectives on emerging trends, challenges, and opportunities that shape the global landscape. Additionally, the report assesses the progress
  made towards achieving sustainable development goals and addresses pressing issues such as climate change, inequality, and technological advancements. With meticulous
   research, accurate data, and expert insights, the global report serves as an indispensable
 resource for policymakers, businesses, researchers, and individuals seeking a comprehensive understanding of the world's current situation.
</div>
  </p>
</div>
<div className='right-side-sec'>
<img src={img3}/>
</div>
    </div>
  )
}

export default Article