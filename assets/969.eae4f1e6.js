const a=[.12,.01,0,.76,0,.35,0,.26,.17,.19,.01,.4,.27,0,0,.6,.02,.71,0,.45,.62,0,.58,.01,0,0,.03,.17,.16,.12,0,0,0,0,.39,.25,0,0,0,0,.82,0,0,.69,.98,.05,.91,.21,.02,.1,.62,.2,0,0,0,.01,.12,0,.39,0,0,0,0,.18,.95,.04,0,0,.54,.93,.85,0,0,.01,0,.46,.28,0,0,.18,0,0,.53,0,.68,0,0,.74,0,0,.02,.98,.73,0,.77,.13,0,.8,.03,0,1,0,0,.7,0,.39,.92,.79,0,0,.42,.01,.94,0,.08,0,.15,0,0,0,.14,.02,.02,.01,.3,0,0,.01,.11,0,.04,0,.19,.09,.01,.48,.61,.05,.01,.16,0,0,0,0,.05,.02,.13,.62,0,.15,0,.71,.92,.3,.07,.28,.05,.06,.04,0,.46,0,.05,.1,.73,0,0,.01,.81,0,.06,.04,.22,.04,0,0,1,.08,0,0,.73,.07,.8,0,0,.01,.19,.01,.94,.38,.91,.66,.53,0,0,0,0,0,.2,0,.07,0,0,.93,0,0,.24,.04,0,.31,.06,0,.17,0,0,.02,.5,.11,0,.01,0,0,0,0,.04,0,.28,.01,0,.21,.66,.52,0,0,.25,.01,0,.62,.33,.31,0,0,.04,.49,.39,.01,.27,.26,.16,.89,.67,0,0,.43,0,.23,.57,0,.39,0,.23,.27,0,0,.41,0,.01,0,.36,0,.39,.6,0,0,0,.64,.43,0,0,.01,.1,.01,.01,0,.13,0,.21,0,.11,0,.04,.07,0,.01,.6,0,.36,.37,.85,.02,.13,0,.13,.25,.02,.26,.02,0,.45,.29,0,.72,.03,.15,.07,.02,.15,.3,0,0,0,1,0,0,.92,.15,0,.06,.11,.15,0,0,.16,.72,.01,.81,.03,.02,0,0,0,0,.46,.13,0,0,.21,.02,0,.34,0,.33,.03,.24,0,0,0,.29,0,0,0,.94,.32,.12,.87,0,.03,0,0,.82,.43,.31,.21,.52,0,.08,.92,0,.77,.01,.36,.39,.34,.41,.16,.05,.1,.84,0,0,0,0,0,.11,.05,0,0,.13,.35,.25,.93,.63,0,.02,.23,.47,0,0,0,0,0,0,.08,0,.13,.4,0,0,.08,0,.19,0,.06,.01,.6,0,0,.84,.29,.01,0,.16,0,.14,.39,0,0,0,0,0,0,0,0,.96,.02,.01,0,0,.67,.01,.14,0,0,.68,.61,.51,0,0,.21,.03,0,0,0,0,.28,.87,0,.09,0,0,.89,0,0,.03,.14,0,0,.96,0,.01,0,0,0,.63,0,.77,.03,0,.07,0,.7,.61,0,.1,0,0,.75,.06,0,.39,.33,.56,0,0,0,.33,.46,0,0,0,0,.98,0,.61,0,.01,.05,.99,0,0,.11,0,.96,.2,0,.05,.06,0,.26,0,.45,.99,.94,.47,.06,.01,.1,.03,0,.09,.18,.06,0,.68,.02,.25,.18,.54,0,.72,.21,0,0,0,0,0,0,.04,.04,.72,0,.01,.96,.02,.66,.04,.64,.1,.07,.02,0,0,.33,0,0,0,.15,0,.04,.29,.03,0,0,.36,0,0,0,0,.01,0,.2,.85,.63,0,.02,0,0,0,0,.94,0,0,0,.1,0,.06,.37,0,.23,.57,.83,0,.49,.56,.04,.74,0,.01,.79,.01,.29,.17,.31,.93,.95,.26,.43,.2,0,0,.15,0,0,.05,.08,0,0,.95,.08,0,.09,0,0,.17,.03,0,0,0,.35,0,.07,0,.44,0,0,.68,0,.68,.09,.35,0,0,0,.02,.03,.06,.28,.83,0,0,.01,.55,.97,.05,0,.23,0,0,0,.07,.24,.02,0,0,.67,.01,0,0,0,.01,.56,0,.21,0,.01,0,0,.02,0,0,0,.14,.03,0,.84,.31,.72,0,.24,.02,0,.22,.03,.7,.8,.6,.05,.79,.04,.26,.35,0,0,0,0,.01,.01,0,1,0,0,.04,0,.69,0,.91,0,.02,.11,.05,.01,0,0,.37,.53,0,.08,0,.27,0,.21,.01,.81,.08,0,.95,.01,.19,0,.49,.01,0,0,.05,.24,0,0,0,.08,.06,.23,.32,0,.04,.12,.03,.73,.1,0,.01,0,.03,.85,0,0,0,0,0,.83,.05,0,.67,0,0,0,0,0,0,0,0,.01,0,0,0,0,.01,.27,0,.02,.47,.31,.07,0,.01,0,.41,0,0,.94,0,.01,.14,.01,0,.33,0,.22,0,.28,.83,.26,0,.08,.8,.59,.65,.53,.75,0,0,0,0,.05,.24,.06,0,.72,0,.01,.98,.08,.02,0,.2,.43,.6,.01,.34,.71,.16,0,0,.02,0,.06,.88,0,.03,.66,.01,0,.94,.46,.12,.75,.03,.75,.53,.11,.05,.08,0,.93,0,0,.81,.09,.92,0,0,0,0,0,0,0,.11,0,0,0,0,.19,.48,.92,.64,.11,0,.03,.45,.08,.95,.08,.28,.06,.04,0,.65,.56,.78,.02,.17,.73,.04,0,0,0,0,.04,0,0,.07,.7,0,0,0,0,0,0,.4,0,0,.24,.54,.83,0,.57,.28,.07,0,.35,.71,.02,.94,.68,.02,.33,.14,0,.63,0,.93,0,.62,.01,.22,0,.42,.25,.51,0,.67,.02,.1,0,0,0,.26,.09,.47,.05,0,0,.07,0,.16,.9,0,.06,.02,.03,0,.01,.01,.29,.02,.31,.66,.27,.89,.63,.76,.71,.76,.13,.97,.05,.35,.3,.06,.01,.22,.29,0,.75,.17,.21,.33,.17,.18,.05,.29,0,.76,0,0,.13,.9,0,.03,.01,.18,.18,.03,.21,.14,.98,0,0,.09,.01,.85,.12,0,.03,.35,.84,.14,.05,.01,.01,0,.12,0,0,1,.95,.57,.41,.6,.75,0,.25,.12,.2,0,.01,.01,.01,.01,0,.32,.01,0,0,0,.28,.04,0,.44,0,0,.05,0,.42,.59,0,.35,.3,.01,0,0,.33,.03,0,0,0,0,.01,.91,0,0,0,0,.26,.16,0,.01,0,.43,0,.18,0,.02,0,.45,0,0,.1,0,.17,0,.24,0,.76,.01,.01,.19,.41,0,.05,.52,.11,0,0,0,.08,0,0,.11,.04,.04,0,.88,.42,.03,0,.07,0,0,0,0,.1,.03,0,0,.65,.11,.08,.95,.08,.05,.01,.02,.83,.08,0,.05,0,0,0,0,.35,.01,0,.09,0,.53,0,.81,0,.68,.35,.16,.71,.66,.25,.03,0,0,.43,0,.66,0,0,.11,0,.43,.6,0,0,.04,.02,0,.18,0,.24,0,.15,0,0,.26,0,0,.01,.21,0,.15,.52,0,0,.2,.05,0,0,.09,.04,0,.67,.02,.03,.07,.05,.24,0,.41,0,0,0,.65,.42,.06,0,0,0,.38,.05,.23,.41,.24,0,.03,0,.58,.75,.01,.27,.74,0,0,.02,0,0,0,.68,.03,.26,0,.02,0,.28,.03,0,.3,0,.07,.01,0,.01,.38,.05,.09,0,.78,0,.76,.83,.14,0,.36,.83,.01,.45,0,0,0,.15,.34,.02,0,0,0,0,0,.89,.6,.75,0,0,.15,0,.77,0,0,0,0,.16,.34,.02,0,0,.02,.11,.21,0,0,.66,.05,0,0,0,.01,.37,0,.05,.03,.53,.16,0,.82,.24,0,.48,0,.08,.11,.75,.45,.56,0,.63,.02,0,.27,0,0,.06,.03,.11,.01,.6,.6,0,0,0,.01,.01,.34,0,.06,.54,.34,0,.42,.5,0,.35,0,0,0,.01,0,.06,0,0,.87,.2,.05,.61,.27,0,0,.15,0,.05,0,0,.23,.53,.02,0,.01,.77,.02,.1,0,0,0,.59,.01,0,.58,0,0,0,.23,.61,0,.58,.17,.03,.26,.28,.32,.09,.28,.07,.59,0,.2,.03,0,.06,.55,0,0,0,0,.35,.47,0,.37,0,0,0,0,.16,.19,.91,.1,.28,.01,0,.01,.33,0,0,0,0,.67,.08,.75,.64,.66,.12,.02,0,0,0,.81,0,0,.01,.05,0,.01,0,.76,0,0,0,.04,.45,0,.08,.04,.56,0,0,.03,.38,0,0,0,.03,.9,.78,0,.89,.15,.31,0,.19,.49,0,.01,.02,0,0,.39,.8,.02,0,.77,.63,.01,.1,.68,0,.58,0,.01,.03,0,.1,0,.74,.36,0,.27,.03,.01,.5,0,.3,.46,0,.45,.03,0,0,0,0,.01,0,0,0,.24,.12,0,0,.31,0,.04,0,0,.01,.02,0,0,0,0,.2,.35,0,0,0,.48,0,0,0,.73,0,0,.03,0,.03,0,.45,0,0,0,.16,.13,0,0,0,.47,.02,.01,0,0,0,.1,.05,.28,.57,.33,0,.64,.28,0,.01,0,0,.02,0,0,.43,.05,0,.7,.05,0,.03,.53,0,.04,0,0,.04,0,.21,0,.02,0,.69,.5,.03,.01,.75,.07,0,.49,0,.03,.01,.02,.67,0,0,0,0,0,.56,.31,.3,.01,0,.83,.24,0,0,0,.24,0,.44,.06,0,.94,0,.99,.15,0,0,0,0,.39,0,0,0,0,0,0,.46,0,0,.02,0,.03,0,0,.77,0,.01,.59,.02,0,.02,0,.03,0,.1,.04,.07,.63,.53,0,0,0,.63,0,0,0,0,0,0,.13,.11,.45,0,.2,0,.43,0,0,.41,0,0,0,0,0,0,.02,.02,.34,0,0,.27,.06,.08,.97,.12,.67,.1,0,0,0,.06,.01,.03,0,.06,.37,.06,.1,0,.02,0,0,0,0,.39,0,0,0,.02,.09,.79,.04,0,.83,.03,0,.42,.07,.39,.6,.12,.71,0,0,.04,0,0,0,0,0,0,0,.7,0,0,0,0,.58,0,.01,0,0,0,0,0,0,0,0,0,0,.28,0,0,0,.09,0,.82,.82,0,.63,0,.28,0,0,0,0,0,0,0,.06,0,.34,.22,0,.17,.35,.57,0,0,0,0,.15,0,0,0,.35,.93,.36,.81,.04,.17,0,.05,.68,.03,0,.07,0,0,.93,.58,.59,.06,.03,0,.96,.12,.01,.05,.56,0,0,.01,.25,.42,0,.01,.65,0,0,.07,0,0,.19,0,.13,0,.27,0,.02,.28,.47,.48,0,.15,0,0,.61,0,0,0,0,.04,.28,0,.01,0,.01,.51,.47,0,0,.09,0,0,.04,0,1,0,0,.02,.2,.02,0,0,.1,0,.01,.67,.5,.38,0,0,.86,0,.11,.17,0,.54,.06,.51,0,.04,0,.16,.11,.42,.96,0,.58,.16,.98,.01,.52,0,0,0,.07,0,0,0,0,0,.08,.08,0,0,.78,.4,.07,.35,0,0,0,0,0,.05,0,0,.08,.8,0,.22,0,.47,.3,.99,0,0,0,0,0,.89,.07,.02,.81,.8,0,.2,0,0,.09,.29,0,.06,0,.05,0,0,0,0,.21,0,0,0,0,0,.02,0,.07,0,0,.08,0,0,0,0,0,0,0,.12,0,0,0,.61,0,0,0,0,0,0,0,0,.98,0,0,.04,0,0,.58,0,0,0,0,.01,.5,.29,.72,0,.08,0,0,0,.04,0,.84,.95,0,.03,.1,.55,.58,0,.02,.51,0];export{a as pvalData};
