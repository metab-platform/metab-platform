const a=[0,0,0,.31,0,.88,0,.18,.01,.01,0,.83,.84,0,0,.5,0,.86,.14,.79,.53,0,.28,0,0,0,.03,.05,0,.12,0,0,0,.33,.64,.08,0,0,0,0,.45,0,0,.36,.31,0,.34,.05,.7,.02,.02,.74,0,0,0,0,0,.41,0,0,0,0,0,.59,.46,.05,0,0,.4,.93,.66,0,0,.04,0,.61,.2,0,0,.65,0,0,.33,0,.04,.01,0,.74,0,0,.18,.42,.03,0,.91,.51,0,.03,.04,0,.32,0,0,.17,0,.25,.99,.56,0,0,.97,.01,.76,0,.06,0,.05,.01,0,0,.55,.21,0,.13,.94,0,0,0,.11,0,.13,0,.33,.36,0,.3,.77,.04,.12,.7,0,.39,0,0,.83,.16,.9,.46,0,.05,0,.63,.57,.71,.41,.6,.88,.65,.03,0,.22,0,.68,.1,.01,.01,0,.02,.67,0,.84,.1,.29,0,0,.15,.96,.75,.04,0,.84,.68,.79,0,0,.94,.48,.16,.14,.01,.22,.36,.36,0,0,0,0,0,.6,0,0,0,0,.77,0,0,.68,.01,.01,.51,.13,0,.3,0,.44,0,.78,.81,.18,.02,0,0,0,0,0,0,.35,.08,.02,.38,.31,.16,0,0,.02,.51,0,.11,.89,.44,.02,0,.1,.05,.09,.02,.21,.21,.16,.67,.87,.06,0,.54,0,.82,.33,0,.61,0,.23,.82,0,0,.22,0,.1,0,.69,0,.35,0,0,0,0,.99,.5,.02,0,.52,.38,.02,0,0,.11,0,.36,0,.19,.1,.02,.03,0,.14,.31,0,.06,.01,.63,.02,.94,0,.05,.14,.42,0,.34,0,.76,.06,0,.53,.32,.87,.14,.03,.14,.25,0,0,0,.18,0,0,.81,.08,0,.01,.75,.04,0,0,.27,.26,0,.94,.1,0,.02,0,0,0,.02,.75,0,0,.14,.1,0,.64,0,0,.33,.12,0,0,.03,.93,0,0,0,.12,.24,.96,.2,0,.3,0,0,.26,.18,.01,.01,.32,0,.03,.01,0,.69,.14,.69,.53,.5,.14,.67,.01,.45,.96,0,0,0,.88,.26,.36,.19,0,0,.14,.01,.7,.08,.9,0,0,.21,.34,0,0,0,0,0,0,0,0,.92,.94,0,0,.32,0,.44,0,.22,.56,0,0,0,.65,.15,0,.05,.14,0,.53,.85,0,.01,0,0,0,0,0,0,.79,0,0,0,0,.79,0,0,0,0,.83,.14,.24,.04,0,.81,0,0,0,0,.01,.67,.89,0,.3,0,0,.24,0,0,.65,.23,0,0,.19,0,.01,0,0,0,0,.01,.86,0,0,0,0,.68,.87,.16,0,0,0,.97,.47,0,.02,.11,.1,0,0,0,.05,.78,0,0,0,0,.63,0,.83,.01,.02,.7,.63,.03,0,.66,0,.66,.23,0,.76,.19,0,.21,0,.33,.91,.15,.05,.79,.3,.1,0,.01,.36,.29,.08,.51,.85,.33,.03,.88,.73,0,.04,.15,0,0,0,0,.55,0,.05,.01,.2,0,.15,.3,.13,.45,.11,.33,.69,.44,.63,0,0,.03,0,0,0,.19,0,.1,.01,.25,.21,0,.4,0,0,0,0,.1,0,.17,.18,.56,0,.17,0,0,0,0,.58,0,0,0,.11,0,.05,.86,.01,.13,.14,.41,0,.63,.36,.25,.9,0,.02,.87,.89,1,.11,.02,.35,.83,.01,.01,.29,0,0,.46,0,0,.06,0,0,0,.14,.1,.02,.43,0,0,.13,0,0,0,0,.56,0,.08,0,.99,0,0,.6,0,.65,.08,.93,0,0,0,.24,.01,.48,.18,.86,0,0,0,.98,.25,.05,0,0,0,0,0,.21,.59,.05,0,0,1,.02,0,0,0,0,.58,.02,.38,.21,.82,.03,0,.4,0,0,0,.76,0,0,.83,.93,.13,0,.32,.11,0,.02,.17,.76,.22,.39,.75,.48,.09,.19,.99,0,0,.77,0,0,0,0,0,0,0,.09,0,.83,0,.71,0,.11,.05,.7,0,0,0,.88,.75,0,0,0,.9,0,.06,.24,.07,.01,0,.2,.2,0,0,.86,0,.03,0,0,0,0,0,.25,.14,.25,.03,.98,0,.5,.13,0,.03,.31,0,.02,0,.15,.37,0,0,0,0,.02,.36,.04,0,.49,0,0,0,.07,0,0,0,0,.63,0,0,0,0,0,0,0,.17,.88,.95,.03,0,0,0,.32,0,.27,.31,0,.99,.05,.08,0,.76,0,.1,.14,.19,.7,.36,0,.77,.05,.95,.23,.73,.37,.04,0,0,0,.64,.07,.01,0,.15,.03,0,.57,.26,.11,0,.44,.8,.06,.19,.48,.13,.19,0,0,.16,0,.11,.2,0,.79,.88,.01,0,.67,.59,.16,.68,.33,0,.34,.15,.43,.1,0,.71,0,0,.88,.13,0,0,.2,0,0,0,0,0,.96,0,.08,0,0,.13,.05,.96,.75,.82,0,.11,.73,.8,.48,.55,.84,.09,.01,0,.03,.51,.33,0,.76,.53,.83,0,0,0,0,.9,0,0,.08,.4,0,0,0,0,0,.01,.27,0,0,.84,.9,.76,0,.23,.07,.44,0,.47,.25,.13,.92,.88,.18,.8,0,0,.92,0,.99,0,.16,.27,.41,0,.29,.91,.35,0,.39,.68,0,0,0,0,.92,.78,.12,.23,0,0,.05,0,.62,.49,.18,0,.6,.88,0,0,.01,.2,.05,.22,.87,.56,.57,.4,.08,.81,.34,.48,.43,.58,.11,.13,.12,.2,.51,.23,0,.07,.44,.59,.07,0,0,.02,.19,0,.23,0,0,.16,.13,0,.69,.18,.96,.23,.64,.01,.09,.92,0,0,.21,0,.81,.02,0,.25,.26,.57,.25,1,.04,.14,0,.4,0,0,.99,0,.06,0,.98,.94,0,.14,.4,.49,0,.02,.05,.05,0,0,.38,.12,.09,0,0,.15,0,0,.04,0,0,.57,.01,.23,.87,.01,.46,.11,.01,0,0,.12,0,0,0,0,0,.08,.61,0,0,0,0,0,0,0,0,0,.41,0,.37,.26,0,0,.98,.01,.09,.03,0,.26,0,.01,0,.02,.16,0,.75,.43,0,.34,.38,.1,0,0,.02,.4,0,0,.23,.37,.01,0,.44,.86,0,0,.88,0,0,0,.01,.37,0,.03,0,.32,.52,.89,.52,.37,.99,0,0,.16,.11,0,.09,0,0,0,0,.55,.39,0,.09,0,.05,0,.37,0,.97,.04,.06,.83,.06,0,.27,0,0,.5,0,.02,0,0,.96,0,.62,.02,0,0,0,.28,0,.58,0,.06,0,.02,0,0,.43,0,.39,.03,0,0,.28,.59,0,0,.84,.55,0,0,.91,.68,.08,.95,.04,.06,.55,.14,0,0,.24,0,0,0,.92,.55,.88,0,0,0,.28,.74,.29,.42,.01,0,1,0,.08,.37,.27,.6,.75,0,0,.02,0,0,0,.78,0,.89,0,.01,.03,0,.67,0,.64,0,0,.01,0,0,0,.01,.3,0,.42,0,.53,.09,.71,0,.19,.71,.84,.37,0,0,0,0,.48,.12,0,0,0,0,0,.89,.29,.15,0,.02,.12,0,.54,0,0,0,0,.23,.07,.06,0,0,.39,.01,.3,.03,0,.64,.43,0,0,0,.01,.92,0,0,0,.14,.37,0,.6,.88,0,0,.02,.14,0,.11,.89,.25,0,.32,.08,.01,.11,0,0,.25,.07,.55,.01,.44,.92,0,0,.63,.03,0,.28,0,.08,.92,.27,0,.9,.37,0,.05,0,0,0,.04,0,.69,0,.03,.85,.63,0,.04,.72,0,0,.66,0,.05,0,0,.08,.06,.08,0,0,.79,.45,.12,0,0,0,.17,.01,0,.09,0,0,.14,.75,.62,0,.78,.35,.02,.69,0,.71,.31,.17,.14,.32,0,.15,.48,0,.15,.19,0,0,0,0,.69,.01,.01,.43,0,0,0,0,.65,.12,.78,.06,.3,0,0,0,.1,0,0,0,0,.65,.47,.78,.21,.7,.01,.13,0,0,.01,.18,.02,0,.09,.01,0,.08,0,0,0,0,0,.53,.68,0,.94,0,.08,0,0,.17,.71,0,0,0,0,.34,.85,0,.31,.92,.15,0,.38,.25,0,.01,0,0,0,0,.5,0,0,0,.58,0,.23,.04,0,.03,0,0,.32,.02,0,.01,.8,.01,0,.75,.08,.03,.61,0,.06,.01,0,.43,.13,0,0,0,0,.24,0,0,0,0,.08,.28,0,.07,0,.91,0,0,.76,.03,0,0,0,0,.19,.15,0,0,0,.57,0,0,0,.74,0,0,0,0,.57,0,.51,.05,0,0,0,.54,0,0,0,.01,.01,0,0,0,0,.14,.07,.22,.05,.54,0,.23,.15,0,.48,0,0,.01,0,0,.07,.82,0,.01,0,0,.19,.97,0,0,0,0,0,0,.54,0,.01,0,.6,.56,.94,.39,.66,0,0,.18,0,.14,0,.53,.45,0,0,0,0,0,.93,.21,.15,.05,0,.96,.03,0,0,0,.41,0,.67,.92,0,.55,0,.19,.07,0,0,0,0,.5,0,0,0,0,0,0,.01,0,0,.22,0,.53,0,0,.8,0,.23,.36,0,.02,.12,0,.02,.09,.92,.05,.46,.28,.95,0,0,0,.13,0,0,0,0,0,0,.62,.17,.9,0,.97,0,.14,.01,0,.18,0,0,0,.14,0,0,.11,0,.51,0,0,0,0,.18,.94,.2,.45,.15,0,0,0,0,0,.02,0,.93,.55,.02,.71,0,.11,0,0,0,0,.2,0,0,0,.14,.06,.35,0,0,.1,.9,0,.78,.01,.94,.52,.02,.61,0,0,.39,0,0,.01,0,0,.02,0,.97,0,0,0,0,.55,0,0,0,0,0,.01,0,0,0,0,0,0,.53,0,0,0,.49,.22,.2,.74,0,.6,0,.72,0,0,0,0,0,0,0,.84,0,.91,.01,0,.82,.14,.89,0,0,0,0,.06,0,0,0,.01,.45,.28,.95,.71,.73,0,0,.58,.08,0,.28,0,0,.06,.49,.41,.03,.01,0,.49,.82,0,.03,0,0,0,0,0,.47,0,.32,.1,0,0,0,.14,0,.71,0,.82,0,.74,0,0,.91,0,.23,.01,.71,0,.01,.07,0,0,0,0,.02,.63,0,0,0,.23,.41,.08,0,0,.67,0,0,0,0,.07,0,0,.21,.03,0,0,0,.48,0,0,.09,.3,.6,0,0,.85,0,.41,.96,0,.24,.93,.17,0,0,0,.46,.88,.12,.51,0,0,.38,.86,.03,.84,0,0,0,.67,0,0,0,0,0,.65,.73,0,0,.59,.24,.71,.13,.06,0,0,0,0,.24,.01,0,.03,.06,.9,.57,0,.07,.18,.22,0,0,0,0,0,.61,0,.11,.01,.95,.35,.06,0,0,.28,0,0,0,0,.01,0,0,0,.01,.96,0,0,0,0,0,.08,0,.1,0,0,.61,0,0,0,0,0,0,0,.75,0,0,0,.27,0,0,0,0,0,0,0,0,.26,0,0,.74,0,0,.9,0,0,0,0,.38,.49,.87,.1,0,.67,0,0,0,.17,.15,.3,.06,.76,.37,0,.43,.6,0,.72,.26,0];export{a as pvalData};
