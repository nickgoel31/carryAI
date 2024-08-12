'use client';

import { useState } from 'react';
import { roadmapGenerator } from '@/actions/ai-models/roadmap';
import { readStreamableValue } from 'ai/rsc';
import { monthGenerator } from '@/actions/ai-models/month';
import { moduleGenerator } from '@/actions/ai-models/module';
import { learningSubpathGenerator, learningSubpathGeneratorWithTools } from '@/actions/ai-models/learningSubpath';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('');

  return (
    <div>
      <button
        onClick={async () => {
          // const { object } = await roadmapGenerator({userId: 'ghfjebghberg49t54g-54t4rg-g45g45', prompt: 'I want to learn how to code'});

          // const { object } = await monthGenerator({
          //   roadmap: {
          //   id: 'eab8e6fb-300d-46db-85d2-683068206c1f',
          //    userId: '4a8d39da-77f4-40c3-b541-fe1b9f20fe84',
          //   prompt: 'I want to become a frontend engineer',
          //   userGoal: 'Frontend Engineer',
          //   currentMonth: 1,
          //   duration : '3 months'
          //   },
          //   previousMonths: [{
          //     "isCurrentMonth": true,
          //     "isMonthCompleted": false,
          //     "title": "Foundations of Web Development",
          //     "roadmapId": "eab8e6fb-300d-46db-85d2-683068206c1f",
          //     "month": 1
          //   },{
          //     "isMonthCompleted": false,
          //     "roadmapId": "eab8e6fb-300d-46db-85d2-683068206c1f",
          //     "month": 2,
          //     "title": "Intermediate React Development",
          //     "isCurrentMonth": false
          //   }],
          //   });

          // const { object } = await moduleGenerator({
          //   monthContext: {
          //     id: 'ygh91hg06-bghbe-45ggf-8en0f-jkhg53kea5c4',
          //     roadmapId: 'eh6fb-3g0d-4hdb-dd2-6830fg06c1f',
          //     month: 1,
          //     title: 'Foundations of Web Development',
          //     isCurrentMonth: true,
          //     isMonthCompleted: false,
          //   },
          //   previousModules: [{
          //     "moduleNumber": 1,
          //     "monthId": "ygh91hg06-bghbe-45ggf-8en0f-jkhg53kea5c4",
          //     "title": "HTML, CSS, JavaScript"
          //   },{
          //     "moduleNumber": 2,
          //     "title": "Bootstrap and SCSS",
          //     "monthId": "ygh91hg06-bghbe-45ggf-8en0f-jkhg53kea5c4"
          //   }],
          // })

          const { object } = await learningSubpathGeneratorWithTools({
            monthContext:{
              roadmapId:  'eabgfdge6fb-30fg0d-4gb-85d2-683068fds06c1f',
              month: 1,
              title: 'Foundations of Programming',
              isCurrentMonth: true,
              isMonthCompleted: false,
            },
            moduleContext: {
              id:'d0f2ffdecf-90a9-ggfdcfe-afgfd-543bca082',
              monthId: 'a2f9gfc06-b7bgf-4hgbf-8f-53438hga5c4',
              moduleNumber: 1,
              title: 'C Programming Language',
            },
            learningPathId:'9e8bgdfg0-cjj1f-4ekb-8jh8d-576cbfgdg4942',
            previousSubPaths:[],
          });

          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject) {
              setGeneration(
                JSON.stringify(partialObject, null, 2),
              );
            }
          }
        }}
      >
        Ask
      </button>

      <pre>{generation}</pre>
    </div>
  );
}