const a=[.44,.11,.03,.35,0,.08,.04,0,0,.06,.28,.94,.11,0,.72,.78,.44,.38,.68,.15,.15,0,.07,.15,.02,0,0,0,.49,0,0,0,0,.25,.34,.05,.01,.5,0,0,.12,0,0,.63,.04,.86,.47,.04,0,0,.61,.95,.51,0,0,.25,.08,0,.17,0,0,0,0,.67,0,0,0,.79,.07,.74,.59,.12,0,0,0,.41,.04,0,.25,0,0,.04,.87,0,.05,0,0,.89,0,.01,0,.27,0,.28,.86,.05,0,.01,.33,0,.6,0,0,.85,0,.24,.02,.01,0,0,.93,0,.02,.01,.16,.02,.17,0,0,0,.61,0,.07,.67,.68,0,.01,0,0,0,0,.43,.55,0,.5,.27,0,0,0,.26,0,.94,0,0,.44,.25,.65,.9,0,.61,0,0,.53,.31,0,0,.05,.58,.13,.58,0,0,.36,0,0,0,0,0,.01,0,.5,0,0,.11,0,0,.26,0,0,0,.27,.72,.09,.26,0,.2,.9,.17,0,.23,.79,0,.91,0,0,0,0,.04,.37,0,.33,0,0,.89,.01,0,.54,0,0,.69,0,.5,.79,.02,0,0,.15,0,0,0,0,0,0,0,0,0,0,0,0,0,.34,.68,.13,.01,.82,.28,.96,.26,0,.95,0,.81,0,0,0,.01,.53,0,.4,.85,0,0,0,0,0,.69,.79,0,.01,.22,.94,0,0,0,.59,0,0,0,.89,0,.03,.84,0,0,.01,.62,0,0,0,0,0,0,.38,.03,0,0,0,.02,0,0,.03,0,0,0,0,.01,.55,.03,.01,.01,.39,.02,0,.65,.02,.06,.28,0,0,.77,0,.99,.19,.85,.51,.01,0,0,0,0,0,.91,.68,0,0,0,0,.01,.95,0,0,0,.05,.86,0,.2,0,0,.95,0,0,.03,.25,.81,.02,0,.6,0,0,0,0,0,.1,0,.05,.4,0,.02,0,.08,.01,.26,0,0,.68,.02,.08,0,0,.6,0,.26,.02,.11,0,0,.51,0,.62,0,.97,.18,.69,.29,.12,0,.1,.89,0,0,0,.69,.8,.6,.88,.02,0,.31,.02,.38,.01,0,0,0,0,.93,.49,0,0,0,0,0,.48,0,0,.75,0,.58,0,.07,.09,.01,0,.74,.93,.01,.01,.46,0,0,0,.18,0,.56,0,.01,.47,0,0,0,0,0,0,.57,0,0,.02,0,.36,0,0,0,0,.02,.3,.92,0,0,0,0,0,0,0,0,.95,.09,.32,.39,0,.01,.02,.01,.03,.57,0,0,0,0,0,0,0,.13,0,0,0,.03,0,.24,.42,.02,.47,.87,.47,.47,0,0,0,.46,.01,0,0,.12,0,.04,0,.36,.9,0,.01,0,0,0,0,.08,0,0,0,0,0,0,.01,0,.18,.55,0,.81,.3,.02,.12,0,0,0,.6,0,.26,.01,0,.37,.97,.94,.13,0,.34,0,.08,.76,.02,0,0,.14,0,0,0,.01,0,.81,0,0,.02,.86,0,0,.02,0,.98,.66,.43,.61,0,.16,0,.01,.12,.02,0,.03,.14,0,0,.87,.02,.36,0,0,0,.6,.01,0,0,.04,.61,.76,.69,0,0,0,0,.04,0,0,.01,0,.01,0,.2,0,0,0,.93,.36,.63,.16,.49,0,.89,.2,.01,0,.06,.45,.01,.15,0,.68,0,.04,0,0,0,.11,.26,0,.04,0,.06,0,0,0,0,0,0,0,0,0,.72,0,.64,0,.44,0,.02,0,0,0,0,.1,.95,.24,.39,.27,.02,0,0,0,.09,.11,.29,0,0,0,0,.61,.25,0,0,0,0,0,.01,.5,.61,.79,.05,0,0,0,0,0,0,.01,.5,.18,.19,.38,.83,.93,.03,.02,0,.01,0,0,0,0,.08,.86,.07,.5,.81,0,0,0,0,0,.28,.54,.31,.06,.14,.76,0,0,.03,.85,.03,.81,.4,0,.09,0,0,0,0,.36,0,0,.02,.4,.02,.45,.64,.01,0,0,.93,.02,0,.1,0,0,.34,0,.01,.09,.01,.24,.13,.01,.01,.42,.57,0,0,.01,.04,.24,0,.84,0,.1,.13,0,0,.37,0,.02,0,0,0,0,.02,.11,.88,0,0,0,0,0,.18,0,0,.01,0,.66,0,0,0,0,.94,0,.3,.13,0,0,.07,0,0,.11,0,.58,.7,.86,0,0,0,0,0,0,.73,0,.51,.22,0,.02,.62,0,.28,0,.3,.12,.41,0,0,.76,.5,.01,.1,0,.1,0,0,0,.45,0,0,0,.03,0,0,.1,.83,0,0,.23,.68,0,0,0,0,0,0,0,.27,.02,.3,0,0,.28,0,0,.13,.18,.72,0,.01,0,.35,.01,.34,.08,0,0,.29,0,.05,.02,0,.29,0,.01,0,.07,0,0,0,.98,.03,.32,0,0,0,.13,.89,.58,.94,0,.69,0,.53,0,.87,0,0,.37,0,0,.29,0,0,.58,.01,.08,.6,.06,0,.01,.17,.01,0,0,0,.03,.15,0,0,0,0,.12,0,0,.28,.77,.03,0,.04,0,0,0,.71,.61,0,.41,.05,.15,0,.16,0,.77,0,.22,0,.97,.02,.75,0,.17,.35,.02,0,.46,0,.94,.12,0,0,.62,.14,0,0,0,0,0,0,0,0,0,0,.54,.77,0,0,0,0,0,.71,0,.65,.38,.6,.66,.24,.84,.88,.18,.61,.02,.33,.22,.28,.73,.05,0,0,0,.11,.64,0,.15,.33,.66,0,.01,.02,0,.71,.01,0,.91,.6,.46,0,.64,.22,0,.96,0,.01,0,.12,.95,0,.01,0,.76,.64,0,.5,.74,.01,.01,0,0,.07,0,.12,.19,0,.14,.01,0,0,.5,.77,.23,0,.01,0,0,.07,.79,0,0,0,.02,.08,0,.03,0,0,0,.41,0,.44,.55,0,0,.24,.13,0,0,.06,.33,0,0,.05,0,0,.02,0,0,.02,0,0,.01,.02,0,.01,.43,0,.74,.04,0,0,.72,0,0,.64,.1,0,0,.01,1,.03,.89,0,.64,.19,.75,0,.06,0,0,0,.07,.2,.01,0,.14,.15,.71,0,.1,.97,.04,0,.41,.08,.28,.01,.61,.55,0,0,.02,.84,0,.73,0,.02,.86,.03,0,.6,0,0,.08,0,0,0,0,0,.76,0,0,0,.69,.08,.45,0,.65,0,.88,.54,.02,.02,.15,.01,.04,.1,.01,.53,.05,.73,.64,0,.92,.06,0,0,0,.04,0,.79,0,0,0,.25,.02,0,0,0,.25,.09,0,.01,0,.08,0,.02,0,.2,0,0,.48,.34,0,.8,0,0,0,0,.72,0,.76,.03,0,0,.95,.71,.48,.04,0,0,.91,.37,.45,.32,.58,0,.14,0,.69,.45,0,.98,.43,0,0,0,0,0,.02,.3,0,0,0,0,0,0,.85,.01,.8,0,.01,.95,.01,.46,.05,0,.69,0,.11,.01,0,.6,.33,.01,.77,.68,.24,.95,0,0,0,.35,0,.23,0,0,0,0,0,.33,.44,.88,.71,0,.04,0,0,0,0,.01,0,.16,0,0,0,.01,.87,0,.11,.2,.31,0,.01,.05,0,0,0,.35,0,.01,0,.35,.74,0,.24,.57,0,0,.26,.02,.68,.21,.43,.86,0,.23,.19,0,0,0,0,.03,0,0,0,.01,0,0,0,.77,.1,.16,0,0,0,.23,0,0,.03,0,.08,0,.88,.44,.25,0,.53,.13,.05,.01,.16,0,0,.39,.7,0,0,0,0,0,0,0,.5,0,.88,0,.01,0,.88,.07,0,0,.95,.76,0,0,.6,0,0,0,.05,.06,.07,.01,.05,0,.09,.56,.05,.28,0,.26,.46,0,.25,.79,.02,.76,0,0,0,0,0,.43,.27,0,.43,0,.57,.01,0,.42,0,.56,.08,.78,.02,.06,.13,.53,0,0,0,0,0,0,.61,.53,0,.09,0,0,0,.01,.94,.17,0,0,.08,.56,0,0,.48,0,0,0,.86,0,0,.84,0,0,0,0,.74,.13,0,0,0,0,0,.09,0,.38,.35,.65,0,.41,.01,0,0,0,0,0,0,0,.35,0,.87,.17,0,.88,.34,0,.74,0,.5,0,0,0,0,.48,.03,0,.75,.33,0,.12,0,0,.08,0,.59,0,0,0,0,0,0,0,0,0,.13,.14,0,0,.09,0,.75,0,0,.57,0,0,.82,0,0,.29,0,0,0,0,0,0,0,.59,.3,0,0,0,0,.26,0,0,0,0,.9,0,.5,0,0,0,0,0,.7,0,0,0,0,0,0,.03,0,.31,0,.12,.02,.02,.01,.25,0,.01,0,.28,0,.2,0,0,0,.84,.36,0,0,0,0,0,0,.36,0,.13,0,.69,0,.52,.36,.97,0,.11,.25,0,.38,0,.79,0,0,0,0,0,0,.05,.5,0,0,0,.88,.41,0,0,0,.79,0,.06,.05,0,0,0,0,.61,.02,.02,0,0,0,.03,0,0,0,.81,0,.36,.01,0,.12,0,.64,0,0,.66,0,.01,0,.41,0,.01,.57,0,0,.07,0,.03,.17,.43,0,0,.9,0,0,.3,.05,0,0,.01,.05,.31,.56,0,.42,0,.58,0,0,0,.01,.02,.47,.04,.01,0,0,0,0,0,0,0,.33,.02,.99,.19,0,0,0,0,0,0,0,0,0,.32,.02,.97,.46,0,.07,.01,0,0,0,.77,0,0,0,0,.83,.94,.28,.56,.67,0,0,.05,.35,.31,.86,.85,.69,0,0,.44,0,.08,.98,0,.13,0,0,.67,0,.02,0,.15,.2,0,.06,0,0,0,.73,0,0,0,0,0,0,0,0,0,0,0,0,.03,.4,0,.21,0,.4,0,.01,0,.02,.04,.05,0,.85,0,.99,0,0,0,.92,0,0,0,0,0,0,.63,0,.01,.03,.08,.86,.24,.52,.44,.09,.05,0,.03,0,.8,.03,.91,0,.02,.33,.02,.05,.01,.73,0,0,0,.01,0,.09,.54,.83,.54,0,.96,0,0,0,.04,.22,0,.62,0,.04,0,0,0,0,.63,.43,.07,0,.87,.25,.13,.93,0,0,0,0,.14,0,0,0,0,.08,.69,.89,0,.06,.06,0,0,.94,0,.77,0,0,0,0,0,0,0,.28,0,.01,.26,.97,.42,0,.94,.23,0,0,.58,0,.55,.8,.42,0,0,.64,0,.48,.64,.74,.04,.18,.79,.48,0,.28,.01,0,.01,.01,.02,.07,0,0,0,.08,.01,0,0,0,.14,.46,.37,.84,0,0,.02,.03,.02,.04,.07,.08,0,.87,.97,0,.47,.02,.47,0,.01,0,0,0,.86,0,.05,0,.28,.31,.91,0,.04,0,.56,0,0,.11,.53,0,0,0,0,0,0,0,0,0,0,.86,0,.02,0,.03,0,0,.02,0,0,0,0,.12,.03,0,.07,0,.02,.01,0,0,0,0,0,0,.26,0,0,.01,.27,.02,.17,.72,0,.01,0,0,0,.81,0,0,0,0,0,0,0,.14,0,.25,0,.09,.45,0,.76,.09,.01,.14,.32,0];export{a as pvalData};
