const a=[.03,.05,0,.39,0,.1,0,0,0,.28,0,.27,.78,0,0,.29,.03,.47,.28,.05,.34,0,.98,0,0,0,0,.03,.19,0,0,0,0,.67,.08,.22,0,0,0,0,.83,0,0,.34,.4,0,.13,.43,.33,0,0,.1,.86,0,0,0,0,.16,.3,0,0,0,0,.82,.59,0,0,0,.98,.46,.56,0,0,.01,0,.43,.4,0,.04,.47,0,0,.94,0,.09,0,0,.26,0,0,.07,.47,0,0,.31,.03,0,.01,.25,0,.59,0,0,.59,0,.11,.07,.43,0,0,.76,0,.32,0,.34,0,.4,0,.92,0,.41,.02,.01,.93,.21,0,0,.07,0,0,.01,.54,.9,0,.44,.39,0,0,0,.07,0,.57,0,0,.97,.57,.74,.41,0,.55,0,0,.72,.1,0,.06,.16,.49,.08,0,.82,0,.67,0,0,0,0,0,.25,0,.99,0,.12,.9,0,0,.11,0,0,0,.45,.25,.52,.09,0,.24,.95,.85,.14,.14,.67,0,.39,0,0,0,0,.14,.32,0,0,0,0,.58,.02,0,.09,0,0,.47,.01,0,.31,0,.2,0,.49,0,0,.01,0,0,0,0,0,0,0,0,0,.73,.64,.51,0,0,.94,.6,0,.06,.76,.94,0,0,0,.04,0,.01,.78,.02,.21,.87,.04,.02,0,0,0,.73,.85,0,.57,.18,.84,.74,0,0,.96,0,.21,0,0,0,.01,.15,0,0,0,.65,.01,0,0,.22,0,0,0,0,0,0,.01,0,.38,0,0,0,0,0,0,0,0,0,.04,.11,.27,0,0,.09,.31,0,.67,0,.31,0,0,.99,.24,.68,.74,.1,.91,.12,.01,.06,0,.45,0,0,.74,0,0,0,.63,0,0,0,0,.64,0,.28,0,0,.54,.02,0,0,.11,.6,0,0,.44,0,0,0,0,.76,.1,0,.02,0,.02,.11,0,.06,0,.36,.01,.33,.89,0,.44,0,0,.91,.02,.02,0,.15,0,0,.52,0,.5,.02,.98,.5,.86,.71,.91,0,.27,.69,0,0,0,.85,.24,.82,.69,0,0,.05,0,.3,.02,.02,0,0,0,.25,0,0,0,0,0,0,.23,0,.14,.52,0,.01,0,.42,.4,0,0,.89,0,0,0,.48,.02,.66,0,.33,0,.69,.27,0,.73,0,0,0,0,0,0,.43,.01,0,0,0,.02,0,0,0,0,.06,.84,.88,0,0,.07,0,0,0,0,0,.11,.02,.01,.79,0,0,.66,0,0,.42,0,0,0,0,0,0,0,0,0,0,.01,.05,.01,.04,.09,.06,.6,.33,.78,0,0,0,.43,.75,0,.01,0,0,0,0,0,.59,.76,0,0,0,0,.03,0,.07,0,0,.25,0,0,0,.08,0,.06,.61,0,.55,.58,.8,.14,0,0,.36,.74,.48,.64,.14,.01,0,.12,.82,.76,.04,.39,0,.67,.29,.28,0,0,.88,0,0,0,.02,0,.33,0,.42,.23,.9,.01,0,.14,0,.97,.09,.46,.5,.08,.62,0,0,0,.17,0,0,.53,0,0,.16,.99,.26,0,.03,0,0,0,0,0,0,.36,.22,.83,0,0,0,0,0,0,0,0,0,0,0,.39,0,0,.86,.7,.19,.91,0,.95,0,.18,.96,0,.01,.17,.73,.41,.72,0,.61,.03,.02,0,.03,0,.2,.52,.02,.09,0,.01,0,0,0,.02,0,.07,0,0,.1,.85,0,.24,0,.72,0,.07,0,.01,0,0,.03,.01,.39,.16,.11,0,0,0,.12,.01,.1,.48,.02,0,0,0,.88,.21,0,0,.92,0,0,0,.29,.94,.24,0,0,.02,.01,0,0,0,.06,.15,.03,.36,.53,.13,.86,.04,.01,0,0,0,0,0,0,.23,1,.06,.38,.94,0,0,.02,.53,0,.39,.96,0,.18,.15,.64,0,0,0,.87,0,.04,.31,0,.02,.02,0,0,0,.11,0,.01,0,.59,.05,.75,0,0,0,0,.97,.02,0,0,.06,0,.18,.6,.02,.01,0,.01,.46,.14,0,.47,.18,0,0,.12,.64,0,0,.22,.23,.18,.41,.11,0,.8,0,.02,.01,0,0,0,0,.42,.32,0,.01,0,0,0,.62,.02,0,.13,0,0,0,0,0,0,.75,0,.01,.07,0,0,0,0,0,.01,.22,.68,.8,.18,0,0,0,0,0,.08,1,0,.21,0,0,0,.59,0,.3,.01,.07,.93,.75,0,.16,.22,.72,.04,.08,0,.22,0,0,0,.73,0,.1,0,.88,0,0,.62,.5,0,0,.93,.63,0,.11,.29,0,.56,0,0,.57,0,.49,.89,0,.25,0,.01,.35,.08,.74,0,.05,.14,.78,.02,.75,.41,0,0,.03,0,0,.1,0,0,0,.02,0,0,0,0,0,.16,0,.01,0,0,0,.09,.57,.7,.39,0,.92,0,.66,.06,.19,0,.13,.03,0,0,.79,0,.06,.96,.04,.38,.15,0,0,0,.91,0,0,.1,0,0,0,0,0,0,0,.29,0,0,.36,.98,.64,0,.15,.02,0,0,.96,.54,0,.16,.02,.41,.02,.02,0,.19,0,0,0,.17,.03,.49,0,.26,.21,.32,0,.68,0,.63,0,0,0,.03,.83,.31,0,0,0,.14,0,0,0,0,.98,.39,.76,.01,0,.03,0,.03,.09,.04,.98,.89,.29,.23,.87,.27,.54,.49,.76,.31,.11,.86,.07,.86,.55,0,0,.02,.11,.14,0,.68,.35,.93,0,.1,0,0,.97,.01,0,.52,.49,.39,.09,.5,.13,0,.53,0,0,0,0,.69,.06,0,.04,.04,.54,0,.54,.63,.02,0,0,0,.1,0,0,.75,0,.52,.14,0,.01,.6,.51,0,0,0,0,0,0,.14,0,.01,0,0,.5,0,0,.02,0,0,.62,0,.72,.95,0,.02,.19,.08,0,0,.25,.54,0,0,.15,0,.01,.01,0,0,.1,0,.66,0,0,0,0,.46,0,.43,.11,0,0,.54,.01,.01,.31,0,0,0,.3,0,.03,.78,.13,.28,.36,0,.22,.25,.31,0,0,.07,.02,0,0,.66,.53,.63,0,.95,.34,0,0,.97,0,.88,0,.78,.9,.03,0,0,.08,.02,.78,0,.55,.8,0,0,.01,0,0,.02,0,0,0,0,.66,.6,0,0,0,.44,0,.42,0,.89,0,.49,.71,.08,.01,.23,0,0,.12,.01,.48,.01,.94,.97,0,.43,.19,0,0,0,.88,0,.94,0,.01,0,.57,.01,.33,0,0,.24,.01,.35,0,.04,.85,0,.01,.01,.29,0,0,.91,.72,.08,.74,0,.15,.6,0,0,0,.22,0,0,0,.98,.57,.77,0,0,0,.48,.96,.23,.35,.75,0,.41,0,.58,.05,.14,.51,.07,0,0,0,0,0,0,.02,.3,0,.04,0,0,0,.71,0,.25,0,0,.4,.09,.02,.03,.03,.6,0,.33,0,.01,0,.72,0,.37,.6,.35,0,0,0,0,.09,0,.52,0,0,0,0,0,.04,.18,.29,0,0,.67,0,.01,.01,0,0,.11,.52,.03,.04,0,0,.55,0,.12,.06,.46,.24,.29,.17,0,0,0,.37,0,.07,0,.22,.04,.31,.86,.58,0,0,.14,.17,0,0,.23,.97,0,.31,.17,0,0,0,0,.04,0,0,0,.47,0,0,0,.83,.02,.41,0,0,0,.76,.03,.1,0,0,0,0,.64,.88,.02,.02,.87,.8,.16,.09,.35,.02,0,.4,.52,0,0,.09,0,0,0,0,.02,0,.38,0,.23,0,.58,.28,0,0,0,.1,0,0,.53,0,0,.09,.1,.46,0,.21,.26,0,.21,0,.2,.48,0,.03,.14,0,.14,.55,0,.65,.07,0,0,0,0,.56,.13,0,.51,0,.02,.55,0,.69,0,.21,.25,.25,0,.01,.66,.41,0,0,0,0,.24,.19,.44,.24,.69,0,0,0,0,0,.34,.3,0,0,.08,.4,0,0,.34,0,0,0,.16,.02,0,.85,0,.09,0,0,.37,.53,0,.89,0,0,.76,.7,0,.61,.38,.55,0,.56,0,0,0,0,0,0,0,.62,0,0,.36,.22,0,.77,.06,0,.86,0,0,.1,0,0,0,.54,.17,0,.92,.85,0,.96,0,0,0,0,.84,.13,0,0,0,0,0,0,0,0,0,.44,.04,0,.3,0,.01,0,0,.34,.02,0,.21,0,0,.14,0,0,0,0,0,0,0,0,.87,0,0,0,0,.81,0,0,0,0,0,.78,.31,0,.01,0,0,0,.13,0,0,0,.78,.2,0,0,0,0,0,.51,0,.36,0,.23,0,0,0,.06,.03,.01,0,0,0,.17,.21,0,0,0,0,0,0,.28,0,.01,0,.65,.87,.81,.48,.55,.01,.01,.05,0,.51,0,.92,.07,0,0,0,0,0,.95,.03,0,0,0,.44,.57,0,0,0,.93,0,.81,.15,0,0,0,.81,.75,0,0,0,0,.17,.05,0,0,0,0,0,.2,.34,0,.04,0,.46,0,0,.49,0,.05,0,0,0,.36,0,0,0,.22,.04,0,.31,.3,0,0,0,.98,0,0,0,0,0,0,.49,.34,.57,0,.76,.02,.43,0,.01,.17,0,0,.82,.96,0,0,0,0,.42,0,0,0,.11,.67,.99,.28,0,.21,0,0,0,.4,0,0,0,.75,.07,.27,.74,0,.14,0,0,0,0,.9,0,0,0,0,.9,.53,0,.06,.24,0,0,.14,.75,.26,.26,.41,.43,0,0,.3,0,0,.85,0,.19,0,0,.9,0,0,0,0,.1,0,0,0,0,0,.28,0,0,0,0,0,0,.62,0,0,0,.29,0,.73,.22,0,0,0,.45,0,0,0,.01,0,0,0,.97,0,.72,0,0,.1,.5,.49,0,0,0,0,.04,.03,0,0,.3,.72,.19,.45,.83,.95,0,.06,0,.05,0,.21,0,.6,.62,.96,.47,.01,.26,0,.43,.03,0,.02,.23,0,.29,.12,.72,.72,0,.98,.32,0,0,0,.16,0,.18,0,.34,0,0,0,0,.78,0,.06,0,.35,0,.14,.06,0,0,0,0,.01,.01,0,0,.02,.45,.53,.52,0,0,.75,0,0,.12,0,.59,0,0,0,.08,0,0,0,.29,.03,0,0,.27,.4,0,.17,.61,0,0,.42,0,.46,.6,.47,0,0,0,.23,.16,.98,.48,0,0,.37,.29,.01,.36,0,0,.05,.72,.02,0,0,0,0,.23,.95,0,0,.12,.24,.9,.09,.84,0,0,.37,0,.06,.01,0,.89,0,.36,.85,0,.7,.23,.45,0,0,0,0,0,.88,0,.14,.88,.07,.79,.71,0,0,0,.53,0,0,0,.06,0,.01,0,0,.42,0,0,0,0,0,.51,0,.25,0,0,0,0,.03,0,0,0,0,0,.88,0,.14,0,.03,0,0,0,0,0,.66,0,0,0,0,0,.89,0,.75,.86,0,0,0,0,0,.49,0,.03,0,.02,0,0,0,.17,0,.45,.01,.56,.26,0,.86,.6,0,.44,.07,0];export{a as pvalData};
