const a=[0,0,0,.84,0,.2,0,.19,0,.77,.14,.48,.96,0,.01,.85,.02,.86,.28,.79,.51,0,.38,.16,0,0,0,.38,0,0,0,0,0,.39,.4,.04,0,0,0,0,.27,0,.01,.5,.18,.1,.68,.04,.01,0,.04,.96,.45,0,0,.05,.02,.06,0,0,0,0,0,.11,.59,0,0,.01,.34,.97,.74,.04,0,.01,0,.58,.09,0,0,0,0,0,.77,0,.13,0,0,.41,0,0,.01,.34,0,0,.62,.09,0,0,.42,0,.36,0,0,.18,0,.27,.58,.6,0,0,.86,0,.07,0,.08,0,.04,0,0,0,.69,.01,.34,.82,.11,0,0,.57,0,0,.08,0,1,0,.62,.56,.05,0,0,.7,0,.32,0,0,.77,.17,.73,.47,0,.25,0,.16,.34,.81,.14,.02,.28,.16,.01,.01,.55,0,.99,0,0,0,0,0,.05,0,.88,0,.1,.03,0,0,.34,.01,0,0,.82,.43,.59,0,0,.06,.89,.54,.05,0,.58,0,.29,0,0,0,0,0,.5,0,.01,0,0,.71,0,0,.04,0,0,.82,.28,0,.06,0,.08,0,.18,.04,0,0,0,0,0,0,0,0,.03,0,0,.07,.63,.68,0,0,.31,.71,.01,.48,.12,.54,0,0,.41,.57,0,.58,.38,.16,.61,.25,.01,0,0,.03,0,.82,.57,0,.13,0,.84,.09,0,0,.13,0,.01,0,.49,0,.05,0,0,0,0,.26,.02,0,0,.01,0,0,0,0,0,0,0,0,0,.02,.52,0,0,.68,0,0,.6,0,.12,0,.83,0,0,.41,.6,0,.25,0,0,.33,0,.43,.68,.75,0,0,0,.01,0,.01,0,.24,0,0,.05,0,0,.23,.93,0,0,0,.14,.25,0,.61,0,0,0,0,0,0,.26,.7,0,0,.66,0,.03,0,0,.49,.38,0,0,0,0,.22,0,0,0,.33,0,.83,.34,0,.03,0,0,.37,.48,0,0,.09,0,0,.65,0,.24,0,.93,.11,.46,.57,.73,0,.03,.78,0,0,0,.53,.69,.16,.06,0,0,.13,.5,.2,.11,0,0,0,0,.42,0,0,0,0,0,0,.3,0,.03,.82,0,0,0,.01,.39,0,.01,.63,0,0,0,.37,0,.01,.5,.09,0,.44,0,0,0,0,0,0,0,0,0,.32,0,0,0,0,.77,0,0,0,0,.02,.94,.49,.01,0,0,0,0,0,0,0,.53,0,.01,.04,0,0,.57,0,.01,.37,0,0,0,.05,0,0,0,0,0,0,.01,.01,0,.27,.04,0,.51,.65,.48,.01,0,0,0,.35,0,.32,0,.76,0,0,0,.72,.37,0,0,0,0,.02,0,.07,.02,.01,.57,0,0,0,.03,0,.27,.81,0,.93,.6,.07,.6,0,0,0,.65,.64,.96,.15,0,.01,.39,.96,.85,0,.74,.17,0,.09,.25,.21,0,.16,0,0,0,0,0,.45,0,.24,.01,.64,0,.01,0,.12,.64,.49,.78,.63,.14,.13,0,0,.04,0,0,0,.62,0,0,.02,0,.76,0,0,0,0,0,0,.01,0,.47,.74,.8,0,.15,0,0,0,0,.57,0,0,0,0,0,0,.1,.01,.95,.25,.15,0,0,0,.99,.96,0,.63,.36,.31,.09,.29,0,.5,0,.01,.33,0,0,.46,.86,0,0,0,0,0,0,.36,.83,0,.03,0,0,.81,.01,0,.43,0,.1,0,.09,0,.08,0,0,.79,0,.14,.57,.82,0,0,0,.05,0,.17,.68,0,0,0,0,.49,.17,0,0,.3,0,0,0,.31,.93,.2,.04,0,0,.03,0,0,0,.67,.19,.02,.08,.62,.69,.66,.37,.04,0,0,0,.02,0,0,.66,.28,.03,0,.4,0,0,.82,.13,.29,.81,.22,.11,.17,.03,.38,.04,0,0,.37,0,0,0,0,0,0,0,0,0,.8,0,.03,0,.14,.36,.86,0,0,0,.04,.92,0,0,0,.1,0,.06,.92,.12,.01,0,.53,.62,.4,0,.33,0,0,0,0,.12,0,0,.72,.02,.07,.21,0,0,.73,0,0,0,.37,0,0,0,.06,.09,0,0,0,0,0,.2,0,0,.05,0,.03,0,0,0,0,.01,0,.63,0,0,0,0,0,0,0,.06,.42,.92,.07,0,0,0,.11,0,0,.51,0,.27,.07,.19,0,.99,0,.02,0,.11,.17,.09,0,0,.37,.5,.07,.22,0,.17,0,0,0,.59,.16,0,0,.41,0,0,.04,.78,0,0,.41,.53,.01,.05,.05,0,.25,0,0,.78,0,.15,.29,0,.46,.22,.83,.12,.54,.82,0,0,.03,.04,0,.1,.32,0,0,.52,0,0,.31,0,0,0,.7,0,0,0,0,0,.51,0,.16,0,0,0,.1,.52,.56,.63,0,.97,0,.94,.13,.88,.04,.03,.02,0,0,.76,.34,.82,.6,.01,.39,0,0,0,0,.54,0,0,.01,0,0,0,0,0,0,0,.55,0,0,.11,.02,.02,0,.42,.29,.36,0,.66,.21,.42,.54,0,.56,.08,.33,0,.33,0,.08,0,.48,.35,.33,0,.57,.77,.36,0,.34,.08,.92,.06,0,0,.45,0,0,0,0,0,.85,0,.02,.13,.42,.11,.98,.56,0,0,.97,0,.83,.43,0,.81,.74,.46,.18,.67,.86,.44,.4,.71,.66,.03,.38,.35,.57,.12,0,0,.11,.01,.01,0,.07,.26,.57,0,.57,.02,0,.75,0,0,.63,.67,.16,.23,.63,.13,0,.37,0,0,.23,.01,.98,.75,0,.1,.97,.41,0,.98,.01,0,0,.02,0,0,.11,0,.07,0,.2,.01,0,.01,.13,.19,0,0,0,0,0,0,.97,0,0,0,0,.33,0,0,.2,0,0,.54,0,.8,.56,0,.74,.07,.02,0,0,.4,.16,0,0,0,0,.17,0,0,0,.99,0,.5,0,0,0,.01,.06,0,.34,.27,0,0,.49,0,.03,.18,0,0,0,.01,0,0,.46,.02,.95,.74,0,.04,.25,.3,0,0,.03,.1,0,0,.18,.24,.19,0,.38,.58,0,0,.81,0,.19,0,0,.46,.25,0,0,.51,0,.86,.01,.77,.63,0,0,.63,0,0,.04,0,0,0,0,.01,.55,0,0,0,.6,0,.81,0,.84,.26,.14,.71,.57,0,.33,0,0,.17,0,.1,.64,.07,.2,0,.11,.15,0,0,0,0,0,.14,0,0,0,.22,0,0,.03,0,.86,.2,.07,0,0,.16,0,0,.15,.8,0,0,.73,.52,.02,.68,0,0,.16,0,.47,0,.16,0,0,0,.88,.24,.9,0,0,0,.42,.66,.32,.07,.04,0,.76,0,.43,.45,.06,.77,.66,0,0,.82,0,0,0,.82,.89,.17,0,0,0,0,.35,0,.37,0,.33,0,.69,0,0,.4,.63,0,.51,0,0,.17,.45,0,.23,.56,.94,.56,0,0,0,.53,0,.49,0,0,0,0,0,.6,.04,.4,0,0,.4,0,.06,0,0,0,0,.22,.38,0,0,0,.37,0,.05,.05,.01,.02,0,0,0,0,0,.36,0,.4,.01,.29,.5,.95,.54,.35,0,0,.1,.48,.02,0,.13,.76,0,.16,.09,0,0,0,0,.01,0,0,0,.2,0,0,0,.83,.82,.02,.22,0,0,.02,.57,0,.07,0,0,0,.06,.03,.01,.02,0,.8,.3,.95,.71,.17,.03,.13,1,0,0,.02,0,0,0,0,.1,.15,1,0,0,.04,.1,.02,0,0,.01,.02,0,0,.22,0,0,.02,.03,.7,0,.12,.13,0,.67,.04,.87,.86,.01,0,.22,0,.1,.35,0,.2,.27,0,0,0,0,.79,.01,0,.35,0,0,.17,0,.55,.05,.33,.65,.22,0,0,0,.35,0,0,0,0,.01,.37,.64,.17,0,.03,.01,0,0,.01,.97,.01,0,0,.01,0,0,0,0,0,0,0,.93,0,0,.28,0,.1,0,0,.98,.95,0,.75,0,0,0,.14,0,.47,.89,.12,0,0,.69,0,0,0,0,0,0,.33,.01,0,.08,.03,0,.44,.26,0,.25,0,0,.02,0,0,0,.68,.01,0,.51,.25,0,.06,0,0,0,0,.46,.01,0,0,0,0,0,0,0,0,0,.25,0,0,.97,0,.14,0,0,.62,0,0,.04,0,0,.09,.17,0,0,0,0,0,0,0,.34,0,0,0,0,.58,0,0,0,0,0,.19,.27,0,0,0,0,0,.58,0,0,0,.07,.01,0,.1,.11,0,0,.08,0,.45,0,0,0,0,0,.2,.66,0,0,0,0,.95,.81,0,0,0,0,0,0,.74,0,.05,0,.51,0,.42,.98,.21,0,0,.08,0,.91,0,.15,0,0,0,0,0,0,.01,.79,.67,0,0,.42,.04,0,0,0,.2,0,.02,.43,0,0,0,.02,.29,0,0,0,0,.94,0,0,0,0,0,0,.11,.01,0,.43,0,.7,0,0,.22,0,.27,.1,.06,0,.04,.01,0,.16,.54,0,.01,.02,.83,0,0,.01,.43,0,.04,.01,0,0,0,.33,.64,.26,0,.57,0,.44,0,0,0,0,0,.04,.03,0,0,0,0,.68,0,0,0,.02,.59,.85,.05,0,0,0,0,0,.58,0,0,0,.99,.07,.03,.94,0,.02,0,0,0,0,.68,0,0,0,0,.03,.66,0,0,.19,.31,0,.45,.41,.94,.49,.24,.98,0,0,.75,0,0,.01,0,.29,0,0,.9,0,0,0,0,.04,0,0,0,0,0,.04,0,0,0,0,0,0,.43,0,0,0,.04,0,.53,.06,0,.07,0,.95,0,0,0,0,0,0,0,.71,0,.68,.02,0,.02,.18,.07,0,0,0,0,0,0,0,0,.14,.48,.24,.5,.73,.94,0,.01,.14,.96,0,.62,0,.27,.89,.17,.45,.05,.09,0,.69,0,0,0,.02,0,.14,.01,0,.47,0,.87,.22,0,0,0,.81,0,.24,0,.23,0,0,0,0,.91,0,0,.37,.92,0,.03,.1,0,0,0,0,.02,.23,0,0,.01,.4,.51,.68,0,0,.55,0,0,.01,0,.02,0,0,0,.7,0,0,0,.51,.01,0,.47,.29,.56,0,.39,.27,0,0,.62,0,.03,.62,.43,0,0,0,.02,.74,.09,.61,0,.07,.49,.53,0,.02,0,0,0,0,0,0,0,0,0,.2,.38,0,0,0,.56,.75,.53,.31,0,0,.07,0,.67,0,0,.46,0,.89,.06,0,.05,.81,.35,0,0,0,0,0,.63,0,.01,.96,.04,.69,.16,0,0,.02,0,0,0,0,.15,0,0,0,0,.44,0,0,0,0,0,.65,0,.09,0,0,.02,0,0,0,0,0,0,0,0,0,.36,0,.1,0,0,0,0,0,.79,0,0,.17,0,0,.54,0,0,.55,0,0,0,0,.01,.47,.14,.42,0,.01,0,0,0,.78,0,.42,.06,.02,.94,0,.3,.63,0,.53,.11,0];export{a as pvalData};
