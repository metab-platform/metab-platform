const a=[.99,.26,0,.64,0,0,.17,0,.01,.08,.51,.66,.16,0,.43,.55,.57,.29,0,.28,.77,0,.06,.21,.01,0,0,.89,.38,0,0,0,0,0,.95,.04,0,.67,.04,.01,.91,0,.04,.84,.16,.81,.04,.16,0,0,.13,.38,.64,0,0,.28,.19,0,.15,0,0,0,0,.77,.06,0,0,.53,.12,.91,.87,.22,0,0,0,.83,.02,0,.01,0,.02,0,.94,0,0,0,0,.87,0,0,0,.96,0,.02,.4,.34,0,.3,.17,0,.83,0,0,.63,0,.59,0,0,0,0,.58,0,.38,.01,.03,.04,.68,0,.01,0,.84,0,.04,.56,.43,0,0,.69,0,.01,0,.8,.99,0,.76,.44,0,0,0,.38,0,.04,0,0,.03,.38,.63,.6,0,.94,0,0,.4,.15,0,0,.01,.89,.21,.74,0,0,.41,0,0,0,0,0,0,0,.09,0,0,.03,0,0,.26,0,0,0,.27,.49,.23,.33,0,.47,.52,.05,0,.25,.69,0,.62,0,0,0,0,0,.69,0,.13,0,0,.38,.03,0,.8,0,0,.38,0,.5,.42,.03,0,0,.89,0,0,0,0,0,0,0,0,0,0,0,0,.01,.92,.44,.79,0,.06,.04,.84,.09,.19,.98,0,.81,0,0,0,0,.78,0,.89,.89,0,0,0,.01,0,.16,.7,0,.01,.14,.96,.01,0,0,0,0,0,0,.3,0,0,.8,0,0,0,.26,0,0,0,0,0,0,.06,0,0,0,0,.02,0,0,0,0,0,.01,0,.01,.66,.04,0,0,.17,.03,0,.56,.26,.02,.86,0,0,.81,0,.89,.04,.06,.07,0,0,0,0,0,0,.22,.65,0,0,0,0,.71,.32,0,0,0,.06,.3,0,.55,0,0,.96,0,0,.1,.03,.35,.02,0,.53,0,.14,0,0,0,.01,0,0,.05,0,.15,0,.03,.02,.06,0,0,.97,.05,.01,0,0,.82,0,.05,.07,0,0,0,.19,0,.8,0,.75,.84,.88,.36,.53,0,.2,.57,0,0,0,.21,.4,.04,.35,.02,0,.67,.81,.88,0,.01,0,0,0,.97,.68,0,0,0,0,0,.3,0,.02,.45,0,.39,0,0,0,.02,0,.54,.4,.01,0,.64,0,.22,0,.01,0,.02,0,.01,.27,0,0,0,0,0,0,.4,0,0,.01,0,.54,0,0,0,0,.06,.56,.03,0,0,0,0,0,0,.01,0,.39,.05,.1,.13,0,0,0,.01,0,.78,0,0,0,0,0,0,0,.12,0,0,0,0,0,.07,.68,0,.66,.63,.48,.66,0,0,0,.09,0,0,0,.28,0,.03,0,.6,.48,0,.06,0,0,0,0,0,0,0,0,0,0,0,.01,0,.12,.3,0,.24,.13,.02,.19,0,0,0,.78,0,.12,0,0,.3,.09,.8,.75,0,.01,0,0,.05,0,0,0,.58,0,0,0,0,0,.02,0,.14,0,.66,0,0,.01,0,.58,.45,.77,.41,0,.08,0,0,.09,.93,0,.01,.41,0,0,.74,0,.08,0,0,0,.89,.01,0,0,.02,.56,.82,.44,0,0,0,0,.01,0,0,0,0,0,0,.11,0,0,0,.34,.32,.58,.05,.42,0,.57,.91,.01,0,.04,.18,.01,.22,0,.75,0,.17,.17,0,0,.01,.13,0,0,0,.01,0,0,0,0,0,0,0,0,.88,.85,0,.04,0,.81,0,.44,0,0,0,0,.14,.96,.11,.4,.95,.02,.03,0,0,.43,.03,.33,0,0,0,0,.82,.3,0,0,0,0,0,.01,.1,.52,.29,.07,0,0,0,0,0,0,0,.54,.12,.1,.05,.04,.95,0,0,0,.01,0,0,0,.03,.08,.01,.44,.29,.39,0,0,0,0,0,.98,.72,.45,.2,.14,.84,0,0,.01,.62,0,.82,.02,0,.49,0,0,0,0,.33,0,0,.04,.96,.47,.59,.4,0,0,0,.38,.43,0,.06,.16,0,.72,.01,0,.01,0,.38,.39,0,0,.3,.39,0,0,0,0,.08,0,.14,0,.01,0,0,0,.07,0,.02,0,0,0,0,0,0,.5,0,0,0,0,0,.4,0,0,.03,0,.4,0,0,0,0,.17,0,.98,.03,0,0,0,0,0,.03,0,.35,.78,.92,0,0,0,0,0,0,.28,.01,.69,.31,0,.04,.24,0,.13,0,.01,.53,.06,0,0,.18,.6,0,.04,0,.01,0,0,0,.32,0,0,0,.01,0,0,.66,.94,0,0,.16,.5,.1,0,0,0,0,0,0,.44,.01,.11,0,0,.01,.04,0,.84,.1,.7,0,0,0,.49,0,.13,0,0,0,.43,0,.17,.02,0,.11,0,.02,0,.01,0,0,0,.3,.01,.12,0,0,0,.03,.96,.34,.3,0,.88,0,.14,0,.05,0,0,.48,0,0,.03,0,0,.99,0,0,.18,.01,0,0,.02,.01,0,0,0,.01,.16,0,0,0,0,.56,0,0,.56,.22,0,0,0,.85,0,0,.9,.21,0,.35,.06,.45,0,.76,0,.88,0,0,0,.43,.11,.23,0,.63,.27,0,0,.31,0,.22,.27,0,0,.79,.01,0,0,0,0,0,0,0,0,0,.06,.06,.14,0,0,0,0,0,.55,0,.61,.2,.1,.97,.81,.89,.51,.14,.53,0,.75,.66,.06,.42,.01,0,0,0,0,.26,0,.55,.14,.92,0,.43,.01,0,.99,.01,0,.92,.06,.01,0,.5,.23,0,.92,0,.05,0,.67,.69,0,.01,0,.27,.44,0,.63,.18,0,.01,0,0,.08,0,.66,.8,.02,.12,0,0,0,.75,.07,.06,0,0,0,0,.01,.52,0,0,0,0,.85,0,0,0,0,0,.03,0,.63,.61,0,0,.38,.06,0,0,.14,.78,0,0,0,0,0,.02,0,0,0,0,0,.04,0,0,.09,.43,0,.21,0,0,0,.56,0,0,.09,.05,0,0,.09,.95,.21,.05,0,.32,.84,.89,0,.08,0,0,0,.07,.62,0,0,0,.01,.05,0,.45,.48,0,0,.04,.01,.47,0,.45,.08,.62,0,0,.85,0,.07,0,.01,.18,0,0,.74,0,0,0,0,0,0,0,0,.27,0,0,0,.62,.19,.67,0,.31,0,.46,.38,0,.03,.02,.01,.1,.01,0,.27,0,.68,.97,0,.66,.04,0,0,0,0,0,.25,0,0,0,.04,0,.02,0,0,.45,.1,.02,.02,0,.13,0,.03,0,.38,0,0,.04,.02,0,.43,0,0,0,0,.23,0,.45,0,0,.01,.43,.83,.06,.07,0,0,.92,.03,.99,.92,.6,0,.02,0,.97,.21,0,.37,.71,0,0,0,0,0,.01,.49,0,0,0,0,0,0,.36,0,.78,0,.03,0,0,.13,.16,0,.86,0,0,0,0,.36,.32,.01,.71,.77,.03,.22,0,0,0,.07,0,.7,0,0,0,0,0,.5,.32,.15,.61,0,0,0,.01,0,.01,0,0,.74,.91,0,0,.03,.04,0,.06,0,.73,0,.01,.03,0,0,0,.01,0,.01,0,.21,.9,0,.41,.94,0,0,.3,.01,.41,0,.04,.08,0,.87,.2,0,0,0,0,.16,0,0,0,0,0,0,0,.14,.15,.7,0,0,0,.03,.04,.03,0,0,.06,0,.95,.6,.36,0,.99,.08,.07,.02,.27,0,0,.72,.67,0,0,0,0,0,0,.01,.99,0,.78,0,.02,0,.46,.02,0,0,.53,.28,0,0,.85,0,0,0,.05,.37,.15,.01,0,.01,.75,.59,.29,.95,0,.3,.87,0,.12,.01,.02,.74,0,0,0,0,0,.38,.83,0,.84,0,.39,.01,0,.04,0,.46,.02,.77,0,.4,.84,.92,0,0,0,0,0,.01,.75,.41,0,.09,0,0,0,0,.79,.01,0,0,.02,.98,0,0,.95,0,0,0,.56,0,0,.85,0,0,0,0,.21,.55,0,.01,0,0,0,.54,.01,.89,.44,.49,0,.22,0,0,0,0,0,0,0,.12,.26,0,.8,.01,0,.4,.75,0,.83,0,.37,0,0,0,0,.06,.03,0,.19,.46,0,.03,0,0,0,0,.4,0,0,0,0,0,0,0,0,0,0,.04,0,0,.31,0,.53,0,0,.13,0,0,.91,0,0,.26,.06,0,0,0,0,0,0,.53,.88,0,0,0,0,.02,0,0,0,0,.86,0,.52,0,0,0,0,0,.03,0,0,0,0,0,0,.11,0,.42,0,.05,.03,.06,0,.06,0,0,0,.45,0,0,0,0,0,.83,.81,0,0,0,0,0,0,.03,0,.11,0,.35,0,.52,.54,.61,0,0,.04,0,.08,0,.5,0,0,0,0,0,0,.02,.44,0,0,0,.71,.34,0,0,0,.38,0,.03,.07,0,0,0,0,.8,.01,.02,0,0,0,.06,0,0,0,.29,0,.87,.1,0,.05,0,.15,0,0,.72,0,.01,0,.55,0,.07,.62,0,0,.07,0,0,.03,.6,0,0,.97,0,0,.55,.21,0,0,.01,.19,.2,.49,0,.61,0,.77,0,0,0,0,0,.46,.01,.01,0,0,0,0,0,0,0,.27,.01,.6,.27,0,0,0,0,0,0,0,0,0,.05,.13,.83,.65,0,.15,.01,.01,0,0,.86,0,0,0,0,.82,.33,.02,.01,.62,0,0,.01,.07,.18,.2,.95,.98,0,0,.85,.01,.02,.28,0,.03,0,0,.27,0,.01,0,.05,.11,0,0,0,0,0,.12,0,0,0,0,0,0,.09,0,0,0,0,0,.01,.35,0,.01,0,.19,0,0,0,0,.02,.04,0,.72,0,.48,.02,0,0,.97,0,0,0,0,0,0,.01,0,0,.66,.45,.29,.13,.03,.01,.03,.05,0,.02,0,.14,.14,.41,0,.02,.18,.03,.13,0,.8,0,.02,0,.37,0,.1,.06,.98,.91,0,.44,0,0,0,0,.06,0,.65,0,.13,0,0,0,0,.94,.16,.02,0,.29,.08,0,.38,0,0,0,0,.13,0,0,0,.07,.01,.34,.24,0,.02,.57,0,0,.92,0,.12,0,0,0,0,0,0,0,.38,0,.05,.41,.87,.6,0,.68,.75,0,0,.74,0,.35,.3,.97,0,0,.35,0,.88,.8,.58,.02,.05,.45,.55,0,.09,0,0,0,0,0,.02,0,0,0,.82,0,0,0,0,.66,.09,.26,.16,0,0,.03,.07,.13,0,.06,.01,0,.02,.34,0,.97,0,.99,0,0,.01,0,0,.78,0,.02,0,.01,.07,.31,0,.03,0,.7,0,0,.14,.25,0,0,0,0,.51,0,0,0,0,0,.46,0,0,0,.02,0,0,0,0,0,0,0,.09,0,0,.11,0,.09,0,0,0,0,0,0,0,.08,0,0,0,.02,.01,.67,.64,0,0,0,0,0,.59,0,0,0,0,0,0,0,.58,0,.39,.07,0,.09,0,.85,.05,0,.01,.74,0];export{a as pvalData};
