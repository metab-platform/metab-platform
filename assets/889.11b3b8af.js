const a=[0,0,0,.63,0,.22,.03,.74,.25,0,0,.31,.47,0,0,.59,.02,.43,.03,.68,.5,0,.15,.04,0,0,0,.05,0,0,0,0,0,.03,.4,.14,0,0,0,0,.33,0,0,1,.36,.09,.6,.15,.42,.02,.18,.36,0,0,0,.03,0,.03,0,0,0,0,0,.82,.09,.17,0,0,.36,.52,.45,0,0,.08,0,.91,.03,0,0,.83,0,0,.15,0,.34,0,0,.5,0,0,0,.25,.09,0,.47,.85,0,.06,.77,0,.43,0,0,.17,0,.95,0,0,0,0,.3,0,.54,0,.98,0,.34,.06,0,0,.15,.05,0,.13,.08,0,0,.21,.25,0,.86,0,.19,.05,0,.48,.03,.03,.06,.96,0,.25,0,0,.46,.46,.8,.17,0,.07,0,.68,.94,.91,.9,0,.72,.47,.02,0,.03,0,.9,.01,.03,0,0,.03,.32,0,.46,.37,.17,.25,0,.11,.96,.05,0,0,.07,.69,.14,0,0,.83,.27,.01,0,.28,.24,.03,.44,0,0,0,0,0,.97,.01,.6,0,0,.71,0,0,.44,0,0,.27,.93,0,.97,0,.04,0,.69,.31,.08,0,0,0,0,0,0,0,.35,.14,0,0,.3,.53,0,0,.17,.18,0,.61,.33,.72,0,0,.49,.56,.1,.14,.17,.16,.03,.63,.13,.07,0,.02,0,.14,.04,0,.23,0,.76,.01,0,0,.21,0,.04,0,.4,0,.86,0,0,0,0,.74,.76,0,0,.33,0,0,.07,0,0,0,.01,0,.04,.26,.83,0,0,.26,.5,0,.3,0,.48,0,.83,0,.04,.03,.15,0,.86,0,0,.47,0,.4,.02,.57,0,0,.16,0,0,0,0,.93,0,0,.51,0,0,.82,.25,0,0,0,.02,.66,0,.48,.42,0,.17,.01,0,0,.04,.32,0,0,.17,0,0,.02,0,.21,.02,0,0,.02,0,.7,0,0,.02,.22,0,0,.57,0,.01,0,0,.62,.18,0,.87,.91,0,0,0,0,.74,0,.36,.57,.53,.28,.85,0,.36,.67,0,0,0,.25,.45,.97,.62,0,0,.05,.79,.08,.46,.04,0,.01,0,.32,0,0,0,0,0,0,.36,0,.01,.84,0,0,0,0,.12,0,.87,.22,.33,0,0,.8,0,.08,.2,.59,0,.15,.06,0,.01,0,0,0,0,0,0,.24,.04,0,0,0,.14,0,.01,0,0,.24,.04,.15,0,0,.05,0,0,0,0,0,.32,.11,0,.58,0,0,.02,0,0,.38,0,0,0,.82,0,0,0,0,0,.02,.03,.08,0,.09,0,0,.85,.32,0,.42,0,0,.31,.04,0,1,0,.8,0,0,0,.26,.01,0,0,0,0,.29,0,.25,.03,.14,0,.52,0,0,.63,0,.22,.43,0,.58,.02,0,.99,0,.02,.41,.08,.8,.59,.2,0,0,.81,.08,.49,0,.11,.39,.6,.15,.08,.53,0,.24,0,0,0,0,0,.23,0,.69,0,.22,0,.14,.02,.48,.12,.02,.36,.91,0,.52,0,0,.83,.03,0,0,.04,0,0,.09,.46,.01,0,.01,0,0,0,0,.39,0,.03,.56,.85,0,.71,0,0,0,0,.09,0,0,0,.01,0,0,0,.04,.08,.61,.46,0,.72,.02,.07,.61,0,.2,.43,.32,.93,.96,0,.45,.06,.53,.08,0,0,.01,.06,0,0,0,0,0,0,.71,.2,0,.04,0,0,.11,0,0,.7,0,.53,0,.57,0,.08,0,0,.31,0,.19,.04,.51,0,0,0,0,.01,.15,.68,.03,0,0,.04,.21,.16,0,0,.96,0,0,0,.12,.34,.99,0,0,.12,0,0,0,0,.17,.48,.07,.17,.01,.67,0,0,.01,0,0,0,.52,0,0,.29,.3,.13,0,.97,0,0,.86,0,.15,.41,.15,.21,.03,0,.09,.62,0,0,.4,0,0,0,0,.03,0,0,0,0,.6,0,.03,0,.26,.03,.21,0,0,0,.14,.23,0,.05,0,.33,0,.37,.7,.34,0,0,.18,.75,0,0,.82,0,.01,0,0,0,0,0,.12,.06,.19,.42,.01,0,.22,0,0,.04,.52,0,0,0,.96,.91,0,0,0,0,0,.02,.02,0,.25,0,.02,0,.03,0,0,0,0,.03,.01,0,0,0,0,.01,.15,0,.56,.62,.47,0,.02,0,.65,0,.1,.56,0,.65,.7,.44,0,.14,0,.13,0,.17,.47,.13,0,.16,.38,.64,.06,.14,.05,.01,0,0,0,.13,.79,0,0,.03,.07,0,.67,.6,.13,0,.38,.56,.01,0,0,.11,.41,0,0,.34,0,.72,.07,0,.09,.32,.18,.01,.15,.4,0,.29,0,.03,.1,.14,.1,.03,0,.23,0,0,.92,.01,0,0,.35,0,0,0,0,0,.81,0,.04,0,0,0,.11,.4,.4,.81,0,.26,0,.44,.28,.94,.11,.18,.73,0,0,.54,.29,.35,.77,.37,.18,0,0,0,0,.33,0,0,0,.02,0,0,0,0,0,0,.89,0,0,.69,.09,.06,0,.19,.08,.47,0,.55,.91,.43,.53,.17,.76,.11,.15,0,.08,0,.15,0,.59,.64,.66,0,.19,.94,.05,0,.02,.15,.56,0,0,0,0,.67,0,0,0,0,.89,0,.38,.06,.45,.22,.15,.28,0,0,.4,0,.33,.04,.01,.88,.6,.4,.23,.99,.78,.1,.53,.14,.95,.54,.02,.13,.32,.06,0,.04,.04,.82,.06,0,0,.94,.37,0,.35,0,0,.3,.01,0,.5,.08,.75,.44,.1,0,0,.92,0,0,.54,0,.16,.68,0,0,.28,.31,0,.26,0,.18,0,.28,0,0,.15,.01,.02,0,.57,.13,0,.01,.77,.96,0,0,0,.07,.13,0,.35,0,0,0,0,.81,0,0,.79,0,0,.41,.03,.62,.84,0,1,.48,.01,.01,0,.64,.08,0,.07,0,0,.45,.06,0,0,.11,0,.17,.18,0,.01,0,.55,0,.52,.06,0,0,.42,.08,.01,.08,0,0,0,.02,0,.05,.15,0,.73,.09,0,0,.09,.7,0,0,0,.79,0,0,.28,.18,.36,0,.77,.77,0,0,.58,0,0,0,.01,.38,.09,0,0,.49,0,.62,.51,.02,.74,0,0,.85,.02,0,0,0,0,0,0,.25,.01,0,0,0,.38,0,.53,0,.21,.83,.13,.61,.84,0,.25,0,0,.47,0,.49,.31,0,.64,0,.93,.09,0,0,0,.55,0,.7,0,0,0,.42,0,0,.32,0,.42,0,.21,0,.01,.02,0,0,.03,.89,0,0,.59,.43,0,.84,0,0,0,.08,.24,0,.03,0,0,0,.38,.94,.52,0,0,0,.56,.45,.37,.91,0,0,.17,0,.29,.68,0,.12,.25,0,0,.17,0,0,0,.18,.55,.37,0,0,.02,0,.63,0,.59,0,.81,0,.07,0,.03,.3,.19,0,.38,0,.39,.39,.77,0,.86,.62,.19,.91,0,0,0,.59,.03,.8,0,0,0,0,0,.22,.59,.54,0,0,.19,0,.33,0,0,0,0,.78,.1,0,0,0,.23,.02,.75,0,.01,.03,.48,0,0,0,0,.32,0,.74,0,.77,.16,.2,.66,.37,0,.01,0,0,0,.08,.87,.99,0,.49,.27,0,.01,0,0,.35,0,.09,0,.08,.18,0,0,.25,.56,.01,.52,0,0,.63,0,0,.23,.05,0,.01,.32,.1,.13,0,0,.07,.22,.91,.74,.33,0,.5,.38,0,0,.01,0,0,0,0,.11,1,.47,0,0,.06,.46,.7,0,0,0,.36,0,0,.71,0,0,.01,.06,.65,0,.39,.2,0,.92,0,.16,.44,.01,.04,.61,0,.05,.09,0,.18,.01,0,0,0,0,.37,.16,0,.33,0,0,.11,0,.67,.63,.69,.44,.99,0,0,.08,.12,0,0,0,0,.1,.45,.75,.34,.05,0,.12,0,0,0,.47,.01,0,0,.03,0,.18,0,.14,0,0,0,.08,.01,0,.23,0,.8,0,0,.49,.25,0,.35,0,0,.32,.14,0,.47,.61,.24,0,.65,.09,0,0,0,0,0,0,.03,0,0,.19,.48,0,.21,.45,0,.08,0,.02,0,0,0,0,.06,0,0,.62,.06,.05,.23,0,.03,0,0,.15,0,0,0,0,0,.01,0,0,0,0,.89,.12,0,.63,0,.88,0,0,.41,0,0,0,0,0,.42,.07,0,0,0,.05,0,0,0,.22,0,0,0,0,.27,0,.25,.02,0,0,.24,.78,0,0,0,0,0,0,0,0,0,.3,.03,.04,.93,.34,0,.1,.37,0,.97,0,0,.01,0,0,.01,.99,0,.03,0,0,.05,.02,0,0,0,0,0,0,.12,0,0,0,.03,.13,.76,.5,.73,0,0,.05,0,.11,0,.74,.16,0,0,0,0,0,.09,.75,.87,0,0,.76,.02,0,0,0,.01,0,.09,.41,0,.05,0,.48,.35,0,0,0,0,.36,0,0,0,0,0,0,.25,0,0,.02,0,.1,0,0,.44,0,.04,.19,.03,.01,.08,.01,0,.48,.37,.3,.01,.56,.63,0,0,0,.06,0,0,0,0,0,0,.74,.14,.08,0,.87,0,.02,.01,.01,.09,0,0,0,.01,0,0,.04,.01,.7,0,0,.01,0,.14,.31,.24,.23,0,0,0,0,.88,0,0,0,.44,.15,.09,.61,0,.24,0,0,0,0,.73,0,0,0,.01,.06,.09,0,0,.14,.76,0,.17,.02,.2,.75,.01,.22,0,0,.1,0,0,0,0,.02,0,0,.18,0,0,0,0,.28,0,0,0,0,0,.03,0,0,0,0,0,0,.18,0,0,0,0,.06,.02,.08,0,.06,0,.8,0,0,0,0,0,0,0,.59,0,.3,.02,0,0,.08,.02,0,0,0,0,0,0,0,0,.12,.89,.33,.75,.44,.72,0,.21,.24,.8,0,.02,0,.19,.12,.03,1,.03,.27,0,.56,0,0,0,0,0,.17,.06,.21,.96,0,.13,.16,0,0,0,.56,0,.88,0,.98,0,.18,0,0,.93,0,.05,0,.94,0,0,.11,0,0,0,0,.01,.83,0,0,0,.08,.05,.3,0,0,.81,0,0,0,0,.03,0,0,.05,.8,.01,0,0,.95,0,0,.14,.27,.62,0,0,.49,0,0,.48,0,.01,.5,.23,0,0,0,0,.82,.25,.91,0,0,.54,.34,0,.92,0,0,0,.76,0,0,0,0,0,.98,.13,0,0,.01,.13,.71,.1,.3,0,0,.07,0,.42,0,0,.39,.03,.05,.11,0,.15,.11,.88,0,0,0,0,0,.82,0,.02,.03,.78,.1,.07,0,0,.05,.01,0,0,0,0,0,0,0,0,.86,0,0,0,0,0,.03,0,0,0,0,.41,0,0,0,0,0,0,0,.93,0,.03,0,.06,0,0,0,0,0,.21,0,0,0,0,0,.28,0,0,.82,0,0,0,0,.11,.91,.91,.77,0,.15,0,0,0,.89,0,.38,.33,.32,.19,.03,.99,0,0,.1,.98,0];export{a as pvalData};
