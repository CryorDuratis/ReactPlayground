import React from "react"

const autoresize = textarea => {
  textarea.style.height = "0"
  textarea.style.height = `${textarea.scrollHeight}px`
}

const items = [
  {
    cardTitle: "Dunkirk",
    url: "http://google.com",
    cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    timelineContent: (
      <div className="comment-section">
        <div className="comment">
          <div className="user">John Doe</div>
          <div className="timestamp">Posted on January 1, 2022</div>
          <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="comment">
          <div className="user">Jane Smith</div>
          <div className="timestamp">Posted on January 2, 2022</div>
          <p>Another comment here. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="comment">
          <div className="user">Your Name</div>
          <textarea placeholder="reply" rows={1} onInput={e => autoresize(e.target)}></textarea>
          <button>Reply</button>
        </div>
      </div>
    )
  },
  {
    cardTitle: "The Battle of Britain",
    cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
    timelineContent: (
      <div className="comment-section">
        <div className="comment">
          <div className="user">John Doe</div>
          <div className="timestamp">Posted on January 1, 2022</div>
          <p>This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="comment">
          <div className="user">Jane Smith</div>
          <div className="timestamp">Posted on January 2, 2022</div>
          <p>Another comment here. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="comment">
          <div className="user">Your Name</div>
          <textarea placeholder="reply"></textarea>
          <button>Reply</button>
        </div>
      </div>
    )
  },
  {
    cardTitle: "Operation Barbarossa",
    cardSubtitle: `A column of Red Army prisoners taken during the first days of the German invasion`,
    cardDetailedText: `Since the 1920s, Hitler had seen Russia, with its immense natural resources, as the principal target for conquest and expansion. It would provide, he believed, the necessary ‘Lebensraum’, or living space, for the German people. And by conquering Russia, Hitler would also destroy the “Jewish pestilential creed of Bolshevism”. His non-aggression pact with Stalin in August 1939 he regarded as a mere temporary expedient.
        Barely a month after the fall of France, and while the Battle of Britain was being fought, Hitler started planning for the Blitzkrieg campaign against Russia, which began on 22 June 1941. Despite repeated warnings, Stalin was taken by surprise, and for the first few months the Germans achieved spectacular victories, capturing huge swathes of land and hundreds of thousands of prisoners. But they failed to take Moscow or Leningrad before winter set in.
        On 5/6 December, the Red Army launched a counter-offensive which removed the immediate threat to the Soviet capital. It also brought the German high command to the brink of a catastrophic military crisis. Hitler stepped in and took personal command. His intervention was decisive and he later boasted, “That we overcame this winter and are today in a position again to proceed victoriously… is solely attributable to the bravery of the soldiers at the front and my firm will to hold out…”`
  },
  {
    cardTitle: "Pearl Harbor",
    cardSubtitle: `The destroyer USS Shaw explodes in dry dock after being hit by Japanese aircraft`,
    cardDetailedText: `After Japan’s occupation of French Indo-China in July 1941, US President Franklin D Roosevelt, followed by Britain and the Netherlands, ordered the freezing of Japanese assets.
        Many Japanese now believed that there was no alternative between economic ruin and going to war with the United States and the European colonial powers. In October 1941, a hardline government under General Hideki Tojo came to power, and preparations were made to deliver a devastating blow against the Americans.`
  },
  {
    cardTitle: "Stalingrad",
    cardSubtitle: `Red Army soldiers hoist the Soviet flag over a recaptured Stalingrad factory following the German surrender`,
    cardDetailedText: `Throughout September and October, under General Vassili Chuikov, the city’s defenders contested every yard of ground of the devastated city.
        The Red Army’s stubborn defence allowed General Georgi Zhukov time to prepare a counterattack that was launched on 19 November 1942, and which soon trapped the Sixth Army commanded by General Friederich Paulus.
        Hitler, wrongly assured by Göring that the Luftwaffe could supply Stalingrad by air, ordered Paulus to hold out. He also ordered Field Marshal Erich Manstein to break through and relieve the beleaguered Sixth Army. Manstein was unsuccessful, and on 31 January 1943 Paulus capitulated. Of the 91,000 German troops who went into captivity, less than 6,000 returned home after the war. Stalingrad was one of Germany’s greatest defeats, and it effectively marked the end of Hitler’s dreams of an empire in the east.
        `
  },
  {
    cardTitle: "D-Day, Operation Overlord",
    cardSubtitle: `British commandos of the First Special Service Brigade land on Sword Beach`,
    cardDetailedText: `Operation Overlord, the invasion and liberation of north-west Europe, began on D-Day, 6 June 1944.
        That day, under the overall command of US General Dwight Eisenhower, British, Canadian and American troops, supported by the Allied navies and air forces, came ashore on the coast of Normandy. By the end of the day, 158,000 men, including airborne troops, had landed. Initially, except on the American Omaha beach, German resistance was unexpectedly light. But it soon stiffened and the Allied breakout from the beachhead area was painfully slow.
        The fierceness of the fighting can be gauged by the fact that in Normandy British infantry battalions were suffering the same percentage casualty rates as they had on the Western Front in 1914–1918. Eventually the breakout was achieved, and on 25 August, Paris was liberated. Brussels followed on 3 September. Hopes that the war might be won in 1944 were dashed by the Allied failure at Arnhem and the unexpected German offensive in the Ardennes in December.
        It was not until 4 May 1945 that the German forces in north-west Europe surrendered to Montgomery at his HQ on Lüneburg Heath.`
  }
]

export default items
