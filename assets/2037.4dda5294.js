const a=[0,0,0,.7,0,.04,0,.33,.01,.17,.07,.54,.41,0,0,.71,.02,.76,.05,.89,.63,0,.55,.36,0,0,0,.12,0,0,0,0,0,.02,.46,.08,0,.03,0,0,.22,0,0,.95,.21,.53,.6,.1,.01,0,.26,.32,.07,0,0,.17,.01,0,0,0,0,0,0,.56,.66,0,0,.03,.31,.57,.53,.01,0,0,0,.72,.02,0,0,.04,0,0,.49,0,.22,0,0,.62,0,0,0,.28,.01,0,.72,.15,0,.01,.75,0,.75,0,0,.35,0,.99,.02,.09,0,0,.56,0,.38,0,.43,0,.3,0,0,0,.6,0,.03,.6,.54,0,0,.98,0,0,.32,.01,.53,.02,.11,.3,.01,0,0,1,0,.18,0,0,.42,.5,.77,.05,0,.22,0,.87,.76,.45,.41,0,.85,.97,0,.01,.06,0,.41,0,0,0,0,0,.03,0,.34,0,.21,.32,0,0,.4,0,0,0,.54,.58,.36,0,0,.78,.58,.12,.03,.2,.34,0,.65,0,0,0,0,0,.56,0,.28,0,0,.92,0,0,.17,0,0,.64,.8,0,.37,0,0,.01,.29,.29,0,0,0,0,0,0,0,0,.12,0,0,0,.89,.98,0,0,.54,.16,.01,.12,.04,.61,0,0,.95,.23,.13,.12,.09,.14,.25,.91,0,.01,0,.01,0,.14,.36,0,.05,0,.84,0,0,0,.03,0,0,0,.94,0,.26,.03,0,0,0,.81,.11,0,0,.01,0,0,.05,0,0,0,0,0,0,.05,.99,0,0,.1,.04,0,.35,.01,.27,0,.7,0,0,.12,.11,0,.58,0,0,.2,0,.48,.08,.6,0,0,0,0,0,0,0,.94,0,0,.1,0,0,.92,.73,0,0,0,.04,.76,0,.34,0,0,0,0,0,0,.28,.5,0,0,.24,0,0,0,0,.82,.02,0,0,.02,0,.1,0,0,0,.45,0,.03,.57,0,0,0,0,.58,.99,.01,.1,.12,0,0,.02,0,.39,0,.49,.68,.72,.54,.47,0,.08,.87,0,0,0,.53,.6,.04,0,0,0,.07,.36,.74,.28,0,0,0,0,.59,0,0,0,0,0,0,.64,0,0,.92,0,0,0,0,.19,0,.07,.25,.03,0,0,.9,0,.11,.65,.21,0,.31,0,0,0,0,0,0,0,0,0,.25,.04,0,0,0,.63,0,.01,0,0,.01,.21,.04,0,0,0,0,0,0,0,0,.6,0,0,.06,0,0,.11,0,0,.74,0,0,0,.66,0,0,0,0,0,0,.02,0,0,.06,.01,0,.38,.55,.14,.18,0,0,.02,.04,0,.37,0,.2,0,0,0,.6,.01,0,0,0,0,0,0,.44,.02,.01,.01,.02,0,0,.13,0,.05,.81,0,.51,.56,0,.95,0,0,.02,.26,.86,.38,.08,0,.01,.35,.37,.89,0,.18,.07,.02,.24,.19,.13,0,.04,0,0,0,0,0,.22,0,.33,0,.21,0,.02,0,.84,.21,.05,.85,.3,0,.05,0,0,.78,.02,0,0,.17,0,0,.09,.01,.06,0,0,0,0,0,0,.02,0,.14,.48,.94,0,.89,0,0,0,0,.91,0,0,0,0,0,0,0,.03,.38,.09,.63,0,.21,0,.16,.57,0,.17,.17,.54,.5,.46,0,.79,0,.13,.19,0,0,.01,.2,0,0,0,0,0,0,.24,.51,0,0,0,0,.28,0,0,.34,0,.59,0,.8,0,.16,0,0,.34,0,.06,.2,.93,0,0,0,0,0,.05,.62,0,0,0,0,.76,.07,0,0,.71,0,0,0,.32,.46,.1,0,0,0,.01,0,0,0,.81,.24,.03,.01,.03,.31,.08,.01,0,0,0,0,.26,0,0,.22,.33,.31,0,.63,0,0,.97,.02,.34,.87,.6,.83,.11,.01,.55,.26,0,0,.06,0,0,0,0,.03,0,0,0,0,.96,0,0,0,.48,.09,.22,.01,0,0,.03,.43,0,0,0,.1,0,.29,.49,.19,0,0,.99,.81,.05,0,.68,0,0,0,0,.01,0,0,.13,.01,.02,.08,0,0,.18,0,0,0,.73,0,0,0,.32,.44,0,0,0,0,0,.01,0,0,0,0,.14,0,0,0,0,.01,0,.26,.01,0,0,0,0,.02,.03,0,.36,.58,.25,0,.02,0,.18,0,0,.64,0,.76,.15,1,0,.23,0,.06,0,.15,.54,.02,0,0,.58,.81,.05,.15,.01,.01,0,0,0,.14,.45,0,0,.2,0,0,.29,.74,0,0,.19,.99,0,0,0,0,.36,0,0,.59,0,.03,.01,0,.05,.26,.52,.14,.57,.92,0,0,0,.03,.18,.08,.05,0,0,.75,0,0,.53,0,0,0,.13,0,0,0,0,0,.74,0,0,0,0,0,.06,.66,.4,.73,0,.51,0,.42,.05,.66,.02,.01,.21,0,0,.42,.04,.83,.3,.01,.12,0,0,0,0,.26,0,0,0,0,0,0,0,0,0,0,.99,0,0,.9,.04,0,0,.26,.14,.65,0,.69,.66,.86,.68,0,.94,.14,.2,0,.03,0,.11,0,.6,.21,.94,0,.56,.75,.42,0,.06,.02,.5,.06,0,0,.01,.06,0,0,0,0,.8,0,.41,.2,.83,.5,.3,.37,0,0,.41,0,.23,.15,0,.56,.72,.11,.16,.71,.65,.3,.55,.2,.76,.46,.14,.24,.5,.02,0,0,.01,.05,.09,0,.04,.06,.47,0,.64,0,0,.83,0,0,.66,.27,.2,.22,.21,.02,0,.49,0,0,.85,.01,.52,.76,0,0,.71,.43,0,.35,.01,0,0,.02,0,0,.13,0,.04,0,.22,0,0,0,.97,.02,0,0,0,0,0,0,.63,0,0,0,0,.44,0,0,.19,0,0,.31,0,.88,.75,0,.23,.46,.01,0,0,.63,.52,0,.01,0,0,.99,0,0,0,.62,0,.75,.02,0,0,0,.4,0,.41,.07,0,0,.24,0,0,.15,0,0,0,.03,0,.02,.24,0,.81,.24,0,0,.34,.23,0,0,0,.19,0,0,.06,.11,.24,0,.89,.36,0,0,.44,0,.01,0,0,.65,.54,0,0,.76,0,.58,.02,.02,.72,0,0,.87,0,0,.01,0,0,0,0,.01,.18,0,0,0,.55,0,.41,0,.41,.24,.39,.74,.57,0,.14,0,0,.83,0,.13,.38,0,.51,0,.64,.05,0,0,0,.01,0,.98,0,0,0,.25,0,0,.12,0,.29,0,.36,0,0,.05,0,0,.05,.98,0,0,.45,.25,0,.87,0,0,0,0,.65,0,.07,0,0,0,.63,.89,.47,0,0,0,.57,.33,.16,.71,.05,0,.19,0,.42,.3,0,.35,.91,0,0,.63,0,0,0,.72,.64,.1,0,0,0,0,.69,0,.62,0,.98,0,.12,0,.04,.39,.49,0,.15,0,.01,.39,.57,0,.52,.82,.19,.65,0,0,0,.44,0,.81,0,0,0,0,0,.43,.2,.71,0,0,.06,0,.08,0,0,0,0,.05,.2,0,0,0,.17,0,.01,.02,0,0,.03,0,0,0,0,.25,0,.88,0,.14,.26,.73,.76,.64,0,.02,.01,.05,.05,.08,.72,.82,0,.26,.11,0,0,0,0,.08,0,0,0,.01,0,0,0,.29,.92,.03,.18,0,0,.93,0,0,.2,.02,0,0,.12,.05,.04,0,0,.38,.19,.87,.28,.72,.04,.79,.7,0,0,0,0,0,0,0,.24,.26,.71,0,0,.01,.1,.25,0,0,.04,.09,0,0,.83,0,0,0,.01,.59,0,.1,.19,0,.93,.01,.19,.49,.01,0,.35,0,.07,.05,0,.1,.03,0,0,0,0,.54,.19,0,.32,0,.01,.13,0,.45,.22,.74,.75,.77,0,0,0,.22,0,0,0,0,.01,.18,.76,.7,0,0,.01,0,0,0,.71,.01,0,0,.09,0,.01,0,.04,0,0,0,.09,0,0,.35,0,.13,0,0,.13,.52,0,.75,0,0,.05,.02,0,.8,.45,.25,0,.08,.93,0,0,0,0,0,0,.01,.01,0,.25,.3,0,.99,.49,0,.23,0,.02,0,0,0,0,.04,0,0,.81,.08,0,0,0,0,0,0,.11,0,0,0,0,0,0,0,0,0,0,.09,0,0,.99,0,.51,0,0,.31,0,0,.02,0,0,.13,.05,0,0,0,.04,0,0,.01,.47,0,0,0,0,.19,0,0,0,0,0,.45,.57,0,0,0,0,0,.06,0,0,0,.4,0,0,.32,.16,0,.03,.19,0,.04,0,0,0,0,0,.12,.99,0,0,0,0,.14,.21,0,0,0,0,0,0,.33,0,.01,0,.15,0,.35,.8,.76,0,0,.04,0,.32,0,.15,.04,0,0,0,0,0,0,.94,.39,0,0,.82,.01,0,0,0,0,0,0,.14,0,.01,0,.01,.3,0,0,0,0,.46,0,0,0,0,.02,0,.34,.01,0,.04,0,.14,0,0,.75,0,.04,.3,.07,0,.02,.05,0,.96,.15,.02,0,.16,.9,0,0,.03,.03,0,.02,0,0,0,0,.31,.67,.06,0,.23,0,.6,.01,0,.02,0,0,0,.04,0,0,.01,0,.29,0,0,.02,.04,.15,.47,.04,0,0,0,0,0,.3,0,0,0,.36,.07,.15,.9,0,.05,0,0,0,0,.47,0,0,0,0,.05,.32,0,0,.28,.99,0,.17,.07,.28,.85,.14,.23,0,0,.18,0,0,.01,0,.1,0,0,.36,0,0,0,0,0,0,0,0,0,0,.01,0,0,0,0,0,0,.02,0,0,0,0,0,.13,0,0,.04,0,.37,0,0,0,0,0,0,0,.17,0,.8,.02,0,0,.27,0,0,0,0,0,0,0,0,0,.09,.43,.2,.52,.38,.58,0,.21,.22,.6,0,.05,0,.06,.14,.46,.79,.01,.39,0,.92,0,0,0,0,0,.12,.19,.09,.44,0,.19,.03,0,0,0,.27,0,.09,0,.37,0,.1,0,0,.32,.04,.01,.04,.67,0,.01,.14,0,0,0,0,.01,.34,0,0,0,.07,.13,.33,0,0,.74,0,0,0,0,.04,0,0,0,.62,0,0,0,.74,0,0,.56,.36,.32,0,.01,.82,0,0,.44,0,0,.35,.68,0,0,0,0,.41,.5,.49,0,.08,.9,.95,0,.51,0,0,0,.02,0,0,0,0,0,.76,.05,0,0,0,.35,.55,.22,.13,0,0,.06,0,.58,0,0,.41,.03,.07,.14,0,.09,.14,.91,0,0,0,0,0,.81,0,0,.35,.82,.3,.16,0,0,0,0,0,0,0,.02,0,0,0,0,.64,0,0,0,0,0,.25,0,0,0,0,.34,0,0,0,0,0,0,0,.03,0,.47,0,.03,0,0,0,0,0,.82,0,0,.06,0,0,.15,0,.01,.93,0,0,0,0,.01,.77,.29,.29,0,0,0,0,0,.53,0,.28,.41,.01,.33,0,.09,.02,0,.06,.62,0];export{a as pvalData};
