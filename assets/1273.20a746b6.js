const a=[.01,0,0,.78,0,.02,0,.13,0,.69,0,.94,.3,0,0,.95,.02,.49,.03,.55,.83,0,.29,.01,0,0,0,.45,.01,0,0,0,0,.24,.06,.03,0,0,0,0,.48,0,0,.96,.29,.01,.95,.44,.07,0,.02,.37,.14,0,0,0,0,.01,0,0,0,0,0,.28,.72,0,0,0,.65,.75,.73,.01,0,0,0,.8,.14,0,0,.03,0,0,.9,0,.07,0,0,.29,0,0,.01,.62,0,0,.75,.23,0,.07,.45,0,.16,0,0,.14,0,.43,.23,.98,0,0,.88,0,.18,0,.47,0,.06,0,.01,0,.74,.01,.06,.45,.3,0,0,.83,0,0,.12,.02,.75,.01,.15,.45,.05,0,0,.95,0,.19,0,0,.24,.67,.83,.39,0,.29,0,.11,.28,.57,.16,.02,.17,.96,.03,0,.57,0,.75,0,0,0,0,0,.03,0,.24,0,.2,.04,0,.03,.38,.02,0,0,.98,.36,.68,0,0,.47,.33,.23,.14,.04,.37,0,.43,0,0,0,0,0,.85,0,0,0,0,.58,0,0,.07,0,0,.47,.34,0,.27,0,.02,0,.44,.06,0,.01,0,0,0,0,0,0,.03,0,0,.09,.46,.53,0,0,.91,.16,0,.83,.29,.55,0,0,.58,.74,0,.66,.18,.05,.37,.36,.03,0,0,.02,0,.4,.53,0,.15,0,.56,.19,0,0,.14,0,.01,0,.7,0,.41,.02,0,0,0,.77,.12,0,0,.06,0,0,0,0,0,0,.01,0,0,.14,.45,0,0,.72,0,0,.62,.02,.1,0,.67,0,0,.17,.32,0,.09,0,0,.95,0,.21,.33,.34,0,0,0,.06,0,.01,0,.67,0,0,.09,0,0,.21,.52,0,0,0,.02,.94,0,.83,0,0,.02,.04,0,0,.12,.62,0,0,.61,0,.01,0,0,.37,.03,0,0,0,0,.28,0,0,0,.34,0,.61,.57,0,.01,0,0,.8,1,0,0,.06,0,0,.81,0,.63,0,.45,.3,.44,.64,.34,0,.07,.86,0,0,0,.34,.69,.28,.09,0,0,.12,.41,.29,.04,0,0,0,.01,.42,0,0,0,0,0,0,.25,0,.01,.52,0,0,0,0,.09,0,.03,.42,0,0,0,.91,0,0,.82,.09,0,.15,.01,0,0,0,0,0,0,0,0,.75,.02,0,0,0,.66,0,0,0,0,.06,.66,.36,.03,0,0,0,0,0,0,0,.95,0,0,.04,0,0,.95,0,0,.79,0,0,0,.03,0,0,0,0,0,0,.05,0,0,.1,.01,0,.28,.82,.77,.01,0,0,.02,.11,0,.44,0,1,0,0,0,.29,.4,0,0,0,0,.01,0,.1,.02,.05,.15,0,0,0,.04,0,.07,.79,0,.39,.16,.02,.68,0,0,.03,.16,.69,.38,.03,0,0,.88,.28,.89,.01,.12,.29,.01,.09,.07,.56,0,.55,0,0,0,0,0,.12,0,.09,0,.43,0,.06,0,.11,.38,.12,.45,.53,.04,.05,0,0,.05,0,0,0,.18,0,0,.02,0,.13,0,0,0,0,0,0,.01,0,.18,.5,.78,0,.18,0,0,0,0,.17,0,0,0,0,0,0,.09,.04,.37,.79,.25,0,.1,0,.25,.97,0,.76,.27,.83,.19,.19,0,.77,0,.09,.44,0,0,.33,.35,0,0,0,0,0,0,.42,.6,0,.01,0,0,.64,0,0,.91,0,.13,0,.54,0,.14,0,0,.35,0,.15,.09,.76,0,0,0,.01,.01,.03,.52,0,0,0,0,.85,.15,0,0,.15,0,0,0,.3,.96,.48,0,0,0,0,0,0,0,.39,.23,.02,.28,.08,.56,.94,.02,0,0,0,0,.02,0,0,.45,.09,.04,0,.8,0,0,.62,.05,.05,.55,.12,.14,.09,.01,.43,.03,0,0,.4,0,0,0,0,.08,0,0,0,0,.71,0,.06,0,.31,.33,.57,0,0,0,.12,.49,0,0,0,.16,0,.55,.57,.06,0,0,.35,.29,.22,0,.4,.01,0,0,0,.09,0,0,.14,.03,.02,.55,0,0,.22,0,0,0,.26,0,0,0,.34,.66,0,0,0,0,0,.02,.01,0,.08,0,0,0,0,0,0,0,0,.83,0,0,0,0,0,0,.01,.02,.55,.53,.09,0,.01,0,.15,0,0,.77,0,.95,.02,.22,0,.27,0,.19,0,.08,.38,.14,0,0,.27,.72,.26,.13,0,.01,0,0,0,.32,.33,.01,0,.71,0,0,.36,.95,0,0,.27,.9,.01,.02,.11,0,1,0,0,.6,0,.4,.52,0,.03,.47,.76,.08,.46,.7,0,.05,.03,.14,.01,.14,.07,0,0,.52,0,0,.34,0,0,0,.57,0,0,0,0,0,.73,0,0,0,0,0,.13,.55,.2,.7,0,.38,.01,.38,.17,.77,.11,.14,0,0,0,.43,.29,.98,.39,.05,.12,0,0,0,0,.18,0,0,.02,0,0,0,0,0,0,0,.59,0,0,.83,0,.02,0,.27,.42,.3,0,.48,.42,.51,.59,0,.32,.13,.46,0,.58,0,.02,0,.34,.31,.5,0,.39,.75,.07,0,.38,.02,.84,0,0,0,.52,0,0,0,0,0,.75,0,.03,.02,.55,.03,.21,.35,0,0,.91,0,.67,.17,0,.41,.44,.41,.15,.6,.87,.38,.83,.29,.93,.25,.33,.13,.78,.22,0,0,.13,.01,.01,0,.07,.67,.21,0,.97,0,0,.81,0,0,.46,.11,.09,.5,.4,.02,0,.54,0,0,.39,0,.96,.77,0,.02,.3,.87,0,.43,.01,0,0,.03,0,0,.02,0,.45,0,.09,.05,0,.02,.82,.25,0,.01,0,0,0,0,.39,0,0,0,0,.21,0,0,.14,0,0,.15,.02,.77,.64,0,.52,.31,0,0,0,.86,.06,0,.02,0,0,.21,0,0,0,.76,0,.31,0,0,0,0,.12,0,.11,.04,0,0,.51,.02,.02,.12,0,0,0,.02,0,.11,.11,0,.63,.97,0,.04,.37,.55,0,0,0,.06,0,0,.48,.06,.32,0,.57,.3,0,0,.3,0,.04,0,0,.37,.52,0,0,.67,0,.37,.01,.17,.7,0,0,.92,0,0,.04,0,0,0,0,.03,.4,0,0,0,.74,0,.37,0,.67,.37,.28,.39,.98,0,.07,0,0,.16,0,.46,.91,.04,.11,0,.78,.02,0,0,0,0,0,.88,0,0,0,.33,0,0,.03,0,.59,.02,.08,0,0,.34,0,0,.21,.95,0,0,.28,.18,.01,.77,0,0,.14,0,.16,0,.07,0,0,0,.77,.85,.4,0,0,0,.32,.21,.23,.62,.04,0,.34,0,.44,.38,.04,.25,.45,0,0,.74,0,0,0,.71,.57,.12,0,0,0,0,.72,0,.39,0,.16,0,.65,0,.02,.49,.23,0,.06,0,.01,.05,.92,0,.37,.9,.21,.88,0,0,0,.39,0,.25,0,0,0,0,0,.82,.07,.54,0,0,.78,0,.24,0,0,0,0,.38,.55,0,0,0,.25,0,.06,0,0,.01,.09,0,0,0,0,.32,0,.2,0,.97,.79,.97,.79,.96,0,0,0,.22,0,0,.31,.59,0,.46,.04,0,0,0,0,.11,0,0,0,.16,0,0,0,.29,.34,.01,.03,0,0,.02,.41,0,0,0,0,0,.45,.12,.01,0,.01,.66,.6,.57,.77,.07,0,.26,.91,0,0,0,0,0,0,0,.01,.22,.43,0,0,.06,.08,.14,0,0,0,.02,0,0,.57,0,0,0,.02,.88,0,.19,.09,0,.84,0,.25,.96,.01,.01,.25,0,.07,.12,0,.34,.08,0,0,0,0,.76,.28,0,.52,0,0,.2,0,.15,.04,.35,.3,.43,0,0,0,.19,0,0,0,0,.02,.72,.71,.47,.03,0,.04,0,0,.01,.59,0,0,0,.03,.01,.01,0,.09,0,0,0,.33,0,0,.83,0,.09,0,0,.45,.83,0,.64,0,0,.02,.48,0,.81,.89,.16,0,.04,.53,0,0,0,0,0,0,.76,0,0,.14,.08,0,.82,.77,0,.12,0,0,.07,0,0,0,.25,.01,0,.92,.08,0,.23,0,0,0,0,.23,.01,0,0,0,0,0,0,0,0,0,.71,0,0,.98,0,.12,0,0,.32,0,0,.02,0,0,.05,.22,0,0,0,.01,0,0,0,.95,0,0,0,0,.14,0,0,0,0,0,.17,.42,0,0,0,0,0,.74,0,0,0,.47,.03,0,.18,.18,0,0,.05,0,.42,0,0,0,0,0,.12,.99,0,0,0,0,.33,.57,0,0,0,0,0,0,.18,0,.01,0,.39,0,.4,.86,.34,0,0,.02,0,.5,0,.15,.03,0,0,0,0,0,.06,.4,.5,0,0,.26,.02,0,0,0,.23,0,.11,.26,0,0,0,.05,.44,0,0,0,0,.87,0,0,0,0,0,0,.17,.01,0,.08,0,.61,0,0,.86,0,.03,.07,0,0,.03,0,0,.17,.13,0,0,.03,.98,0,0,0,.45,0,0,0,0,0,0,.39,.75,.61,0,.54,0,.75,.01,.01,0,0,0,.02,.07,0,0,0,0,.85,0,0,0,.05,.41,.82,.04,0,0,0,0,0,.52,0,0,0,.27,.07,.02,.98,0,.05,0,0,0,0,.38,0,0,0,0,.14,.38,0,0,.05,.4,0,.16,.08,.57,.43,.35,.3,0,0,.45,0,0,0,0,.48,0,0,.64,0,0,0,0,.15,0,0,0,0,0,.08,0,0,0,0,0,0,.64,0,0,0,.04,.01,.86,.09,0,0,0,.34,0,0,0,0,0,0,0,.92,0,.77,.02,0,.01,.07,.04,0,0,0,0,.01,0,0,0,.26,.99,.1,1,.3,.31,0,.01,.02,.4,0,.11,0,.87,.86,.39,.91,.02,.12,0,.85,.01,0,.01,.03,0,.45,.01,.2,.64,0,.33,.3,0,0,0,.5,0,.45,0,.31,0,0,0,0,.59,0,0,.21,.85,0,0,.2,0,0,0,0,.01,.3,0,0,.02,.06,.3,.55,0,0,.59,0,0,.01,0,0,0,0,0,.88,0,0,0,.53,0,0,.28,.16,.6,0,.08,.19,0,0,.8,0,.16,.37,.24,0,0,0,.02,.84,.19,.99,0,.05,.96,.79,0,.23,0,0,0,.03,0,0,0,0,0,.98,.3,0,0,.03,.07,.6,.21,.11,0,0,.1,0,.66,0,0,.67,0,.26,.22,0,.47,.61,.98,0,0,0,0,0,.51,0,0,.34,.01,.96,.13,0,0,0,0,0,0,0,.01,0,0,0,0,.56,0,0,0,0,0,.13,0,.02,0,0,.03,0,0,0,0,0,0,0,.02,0,.08,0,.09,0,0,0,0,0,.88,0,0,.04,0,0,.12,0,.02,.73,0,0,0,0,.02,.56,.39,.55,0,.01,0,0,0,.8,0,.24,.59,0,.28,0,.04,.34,0,.09,.2,0];export{a as pvalData};
