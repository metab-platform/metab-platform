const a=[0,0,0,.94,0,.06,0,.28,.01,.03,.01,.45,.26,0,0,.48,.01,.59,.1,.88,.19,0,.3,.29,0,0,0,0,0,0,0,0,0,.04,.65,.04,0,.02,0,0,.09,0,0,.95,.35,.35,.69,.1,.01,0,.31,.3,.01,0,0,.1,.01,0,0,0,0,0,0,.92,.89,0,0,.02,.2,.54,.55,0,0,.01,0,.73,.05,0,0,.11,0,0,.45,0,.22,0,0,.37,0,0,0,.28,0,0,.68,.31,0,.01,.69,0,.56,0,0,.39,0,.7,.03,.03,0,0,.62,0,.39,0,.5,0,.45,0,0,0,.5,.01,0,.44,.77,0,0,.38,.02,0,.23,.01,.66,.01,.09,.81,0,0,0,.75,0,.3,0,0,.42,.52,.52,.1,0,.12,0,.82,.93,.79,.19,0,.87,.96,.01,.01,.02,0,.71,0,0,0,0,0,.05,0,.32,.02,.13,.29,0,0,.72,0,0,0,.38,.5,.32,0,0,.67,.29,.05,0,.16,.29,0,.64,0,0,0,0,0,.91,0,.43,0,0,.8,0,0,.5,0,0,.61,.75,0,.54,0,0,0,.28,.13,0,0,0,0,0,0,0,0,.08,0,0,0,1,.68,0,0,.22,.13,0,.14,.04,.59,0,0,.64,.15,.03,.19,.1,.15,.16,.9,0,.03,0,0,0,.22,.28,0,.01,0,.73,0,0,0,.17,0,.01,0,.94,0,.31,.01,0,0,0,.68,.15,0,0,.01,0,0,.08,0,0,0,0,0,0,.03,.9,0,0,.38,.03,0,.91,0,.34,0,.76,0,.01,.16,.07,0,.95,0,0,.42,0,.52,.06,.63,0,0,.01,0,0,0,0,.93,0,0,.12,0,0,.44,.98,0,0,0,.04,.35,0,.28,.01,0,.01,0,0,0,.13,.5,0,0,.13,0,0,0,0,.87,.02,0,0,.03,0,.28,0,0,0,.32,0,.01,.63,0,0,0,0,.58,.96,.03,.14,.19,0,0,.01,0,.45,0,.54,.21,.52,.27,.3,0,.11,.6,0,0,0,.51,.41,.17,.03,0,0,.04,.83,.51,.22,0,0,0,0,.53,0,0,0,0,0,0,.88,0,0,.95,0,0,0,0,.11,0,.13,.36,.05,0,0,.47,0,.35,.94,.38,0,.29,.01,0,0,0,0,0,0,0,0,.36,.01,0,0,0,.69,0,0,0,0,.01,.14,.19,0,0,0,0,0,0,0,0,.78,.03,.01,.16,0,0,.07,0,0,.71,0,0,0,.43,0,0,0,0,0,0,.01,.01,0,.08,0,0,.44,.4,.04,.36,0,0,.03,.05,0,.32,0,.84,0,0,0,.71,0,0,0,0,0,.02,0,.48,.01,0,0,.01,0,0,.27,0,.15,.98,0,.51,.39,0,.99,0,0,.05,.21,.88,.39,.04,0,0,.62,.23,.64,0,.18,.04,.22,.6,.12,.05,0,.01,0,0,0,0,0,.37,0,.84,0,.29,0,.01,0,.88,.19,.09,1,.41,0,.11,0,0,.64,.12,0,0,.11,0,0,.06,.1,.07,0,0,0,0,0,0,.02,0,.17,.42,.89,0,.76,0,0,0,0,.26,0,0,0,0,0,0,0,.03,.39,.04,.8,0,.41,0,.17,.69,0,.27,.12,.55,.39,.85,0,.63,0,.11,.03,0,0,.01,.1,0,0,0,0,0,0,.14,.52,0,.01,0,0,.02,0,0,.68,0,.78,0,.43,0,.04,0,0,.47,.01,.13,.06,.87,0,0,0,0,.01,.14,.44,0,0,0,0,.6,.09,0,0,.43,0,0,0,.32,.53,.26,0,0,0,0,0,0,0,.66,.6,.09,.02,.03,.47,.05,0,.01,0,0,0,.13,0,0,.47,.82,.23,0,.61,0,0,.68,.01,.14,.93,.51,.99,.03,.01,.28,.14,0,0,.16,0,0,.01,0,.01,0,0,0,0,.87,0,0,0,.33,0,.25,.02,0,0,.01,.38,0,0,0,.12,0,.19,.25,.21,0,0,.47,.65,.03,0,.86,0,0,0,0,0,0,0,.24,.01,.02,.22,0,0,.16,0,0,0,.97,0,0,0,.4,.54,0,0,0,0,0,.07,0,0,.02,0,.14,0,0,0,0,.01,0,.25,0,0,0,0,0,0,.05,0,.35,.64,.27,0,0,0,.23,0,0,.28,0,.67,.12,.98,0,.23,0,.13,0,.35,.67,.08,0,.01,.58,.48,.03,.29,.01,.01,0,0,0,.18,.35,0,0,.13,.01,0,.27,.92,.01,0,.25,.92,0,0,0,0,.28,0,0,.41,0,.08,.02,0,.08,.07,.7,.16,.56,1,0,.01,0,0,.08,.09,.05,0,0,.42,0,0,.51,0,0,0,.36,0,0,0,0,0,.99,0,.02,0,0,0,.18,.59,.56,.77,0,.38,0,.76,.02,.86,.01,.01,.33,0,0,.73,.02,.95,.23,.02,.27,0,0,0,0,.3,0,0,0,0,0,0,0,0,0,0,.85,0,0,.88,.21,0,0,.33,.01,.97,0,.55,.53,.86,.69,.01,.59,.02,.06,0,.02,0,.21,0,.81,.51,.79,0,.38,.94,.39,0,.07,.02,.85,.04,0,0,.01,.23,0,0,0,0,.55,0,.18,.06,.77,.76,.33,.5,0,0,.52,0,.34,.22,0,.96,.65,.26,.15,.55,.8,.25,.37,.16,.87,.37,.02,.37,.75,.04,0,0,0,.17,.18,0,.05,.17,.42,0,.09,0,0,.75,0,0,.94,.24,.64,.09,.17,.01,0,.46,0,0,.71,0,.35,.83,0,0,.76,.24,0,.7,.01,.02,0,.02,0,0,.1,0,.01,0,.24,.01,0,0,.88,.11,0,0,0,0,0,0,.7,0,0,0,0,.92,0,0,.2,0,0,.34,0,.5,.83,0,.26,.29,0,0,0,.53,.42,0,0,0,0,.97,0,0,0,.56,0,.87,.01,0,0,0,.38,0,.96,.09,0,0,.26,0,0,.36,0,0,0,.01,0,.01,.34,0,.86,.1,0,0,.23,.23,0,0,0,.17,0,0,.12,.09,.89,0,.7,.61,0,0,.42,0,0,0,0,.58,.11,0,0,.58,0,.59,.11,.01,.76,0,0,.95,0,0,0,0,0,0,0,.02,.13,0,0,0,.54,0,.5,0,.43,.2,.31,.5,.73,0,.21,0,0,.87,0,.05,.37,0,.6,0,.75,.06,0,0,0,.15,0,1,0,0,0,.71,0,0,.1,0,.5,0,.57,0,0,.06,0,0,.01,.78,0,0,.44,.29,0,.82,0,0,0,0,.45,0,.16,0,0,0,.6,.96,.48,0,0,0,.62,.32,.21,.61,.04,0,.23,0,.19,.29,0,.19,.95,0,0,.86,0,0,0,.82,.94,.06,0,0,0,0,.82,0,.4,0,.98,.02,.12,0,.03,.78,.25,0,.26,0,.01,.24,.37,0,.85,.47,.19,.95,0,0,0,.66,0,.74,0,0,0,0,0,.52,.36,.68,0,0,.08,0,.06,0,0,0,0,.16,.01,0,0,0,.29,0,.09,.02,.02,0,.08,0,0,0,0,.37,0,.95,0,.07,.17,.64,.67,.77,0,0,.01,.02,.04,.19,.96,.94,0,.2,.12,0,0,0,0,.11,0,0,0,.01,0,0,0,.32,.96,.05,.15,0,0,.34,0,0,.14,.01,0,0,.17,.08,.08,0,0,.26,.27,.91,.4,.41,.01,.73,.75,0,0,0,0,0,0,0,.31,.21,.42,0,0,0,.35,.43,0,0,.02,.17,0,0,.86,0,0,0,.01,.34,0,.28,.25,0,.91,.01,.08,.38,.01,0,.3,0,.05,.13,0,.04,.01,0,0,0,0,.29,.08,0,.17,0,.01,.16,0,.56,.2,.94,.97,.53,0,0,.03,.2,0,0,0,0,0,.23,.68,.71,0,0,.02,0,0,0,.62,.03,0,0,.09,0,.01,0,.04,0,0,0,.18,0,0,.49,0,.12,0,0,.13,.39,0,.86,0,0,.07,.02,0,.33,.98,.1,0,.43,.47,0,0,0,0,0,0,0,0,0,.09,.64,0,.58,.36,0,.2,0,.02,0,0,0,0,.12,0,0,.61,.04,0,.01,0,0,0,0,.15,0,0,0,0,0,0,0,0,0,0,.2,0,0,.96,0,.69,0,0,.48,0,0,.01,0,0,.21,.03,0,0,0,.01,0,0,0,.3,0,0,0,0,.16,0,0,0,0,0,.36,.63,0,0,0,0,0,0,0,0,0,.24,0,0,.32,.08,0,.01,.13,0,.09,0,0,0,0,0,.1,.97,0,0,0,0,.13,.15,0,0,0,0,0,0,.28,0,.01,0,.16,.01,.68,.43,.78,0,0,.05,0,.35,0,.33,.03,0,0,0,0,0,0,.8,.3,0,0,.96,.02,0,0,0,0,0,0,.17,0,0,0,.03,.23,0,0,0,0,.21,0,0,0,0,.01,0,.43,.01,0,.06,0,.17,0,0,.78,0,.02,.08,.06,0,.01,.03,0,.99,.16,.01,0,.18,.91,0,0,.04,.01,0,.02,0,0,0,0,.59,.55,.04,0,.4,0,.26,0,0,.03,0,0,0,.02,0,0,.02,0,.54,0,0,0,.02,.1,.71,.1,0,0,0,0,0,.53,0,0,0,.32,.05,.15,.56,0,.06,0,0,0,0,.62,0,0,0,0,.03,.4,0,0,.29,.44,0,.11,.05,.3,.77,.07,.22,0,0,.2,0,0,.04,0,.07,0,0,.39,0,0,0,0,.01,0,0,0,0,0,.01,0,0,0,0,0,0,.01,0,0,0,0,0,.09,0,0,.06,0,.35,0,0,0,0,0,0,0,.16,0,.42,.02,0,0,.31,0,0,0,0,0,0,0,0,0,.04,.54,.12,.53,.4,.61,0,.27,.06,.89,0,.12,0,.06,.14,.14,.65,.02,.14,0,.88,0,0,0,0,0,.16,.11,.1,.85,0,.21,.04,0,0,0,.31,0,.15,0,.6,0,.07,0,0,.24,.04,.02,.01,.81,0,.01,.22,0,0,0,0,.01,.51,0,0,0,.04,.12,.24,0,0,.61,0,0,0,0,.06,0,0,0,.48,0,0,0,.84,0,0,.5,.51,.36,0,.01,.49,0,0,.3,0,0,.52,.4,0,0,0,0,.47,.7,.95,0,.01,.91,.49,0,.31,0,0,0,.18,0,0,0,0,0,.53,.07,0,0,0,.45,.55,.23,.1,0,0,.09,0,.31,0,0,.52,.02,.18,.22,0,.13,.18,1,0,0,0,0,0,1,0,.01,.26,.99,.22,.15,0,0,0,0,0,0,0,.03,0,0,0,0,.38,0,0,0,0,0,.25,0,0,0,0,.13,0,0,0,0,0,0,0,.3,0,.43,0,.03,0,0,0,0,0,.59,0,0,.02,0,0,.15,0,.01,.86,0,0,0,0,.01,.93,.22,.24,0,.01,0,0,0,.65,0,.28,.13,.18,.5,0,.45,.01,0,.05,.76,0];export{a as pvalData};
