const a=[0,0,0,.75,0,.25,0,.71,0,.27,0,.26,.98,0,0,.77,0,.64,.13,.86,.44,.18,.67,0,0,0,.04,.47,0,.05,0,0,0,.48,.45,.06,0,0,0,0,.17,0,0,.82,.46,0,.55,.2,.62,.02,.05,.69,.19,0,0,0,0,.31,0,0,.02,0,0,.73,.06,.14,0,0,.89,.91,.47,0,0,.08,0,.73,.3,.02,0,.5,0,0,.98,0,.05,.1,0,.2,0,0,.48,.49,0,0,.9,.44,0,.01,.26,0,.28,0,0,.09,0,.27,.58,.2,0,0,.62,.1,.55,0,.2,0,.23,.07,.01,0,.62,.79,.04,.71,.83,0,0,.91,.02,0,.6,0,.66,.84,.1,.07,.48,0,.03,.9,0,.21,0,0,.76,.28,.57,.36,0,.21,0,.79,.69,.35,.73,.51,.24,.24,0,0,.41,0,.93,.06,0,.01,.01,0,.4,0,.67,.19,.57,.01,0,.54,.77,.9,.03,0,.35,.72,.99,0,0,.28,.57,.94,.81,.01,.26,.15,.48,0,0,0,0,0,.93,0,.01,0,0,.96,0,0,.35,0,.05,.8,.34,0,.05,0,.36,.04,.76,.45,.19,.03,0,0,0,0,0,0,.73,.03,.04,.01,.36,.27,0,0,.03,.4,0,.52,.9,.9,.31,0,.48,.08,.02,.01,.47,.41,.03,.35,.75,.73,0,.11,0,.89,.54,0,.53,0,.58,.84,0,0,.73,0,.09,0,.77,0,.26,0,0,0,0,.5,.58,.04,0,.57,.36,.01,0,0,0,0,.08,0,.09,.47,.79,.02,0,.05,.02,0,.55,0,.57,.17,.34,0,.01,.3,.59,0,.73,0,.11,.84,0,.14,.79,.64,.01,.21,.07,.62,0,.46,0,.04,0,0,.92,0,0,.23,.65,0,0,0,.29,.18,.02,.61,.21,0,.02,.01,0,0,.07,.98,0,0,.31,.01,0,.13,0,0,.39,0,0,0,.01,.74,0,0,0,.18,0,.32,.17,0,.02,0,.01,.34,0,.01,0,.43,.11,.03,0,0,.4,.05,.63,.62,.96,.22,.58,0,.09,.88,0,0,0,.76,.92,.09,.07,0,0,.05,.55,.82,.08,.01,0,0,.3,.82,0,0,0,0,0,0,.03,0,.38,.75,0,0,.26,.02,.46,0,.68,.91,0,0,0,.68,.01,0,.4,.61,0,.93,.65,0,0,0,0,0,0,0,0,.12,.53,0,0,0,.04,0,.05,0,0,.31,.21,.76,.39,0,.1,0,0,0,0,.01,.53,.04,0,.36,0,0,.14,0,0,.68,.07,0,0,.51,0,.02,0,0,0,0,.79,.09,0,.01,0,0,.55,.32,.48,0,0,0,.45,.49,0,.02,.05,.93,0,0,0,.11,.23,0,0,.03,0,.36,0,.73,.87,.19,.67,.34,.02,0,.23,0,.76,.56,0,.82,.92,.12,.85,0,.05,.48,.28,.02,.93,.41,.04,0,.88,.96,1,.18,.91,.67,.27,.49,.86,.57,0,.01,.01,0,0,0,0,.7,0,.05,.01,.45,0,.91,0,.74,.76,.18,.36,.66,.87,.46,0,0,.02,0,0,0,.33,0,.22,0,.15,.64,0,.01,0,0,0,0,.62,0,.45,.48,.76,0,.94,0,0,0,0,.41,0,0,0,.36,0,.08,.87,.11,.63,.01,.61,0,.39,.2,.27,.61,0,.01,.97,.44,.98,.22,.08,.33,.14,0,.03,.22,0,0,.92,0,0,.09,0,0,0,.05,.09,.06,.42,0,0,.88,0,0,.86,0,.26,0,.53,0,.48,0,0,.84,0,.48,.26,.75,0,0,0,.71,.04,.74,.36,.03,0,0,0,.96,.08,.03,0,0,0,0,0,.42,.78,.41,0,0,.22,.11,0,0,0,.42,.38,.09,.44,.4,.97,.77,.19,.16,0,0,0,.05,0,0,.39,.86,.07,0,.24,.29,0,.01,.65,.58,.24,.66,.02,.82,.08,.5,.14,0,0,.39,0,0,0,.01,.01,0,0,.72,0,.87,0,.64,0,.33,.3,.25,0,0,0,.77,.97,0,0,0,.3,0,.04,.71,.1,0,0,.62,.78,0,0,.46,.01,.01,0,0,0,0,0,.41,.79,.01,.62,.24,0,.34,.04,.03,.02,.94,0,.1,0,.26,.02,0,0,0,0,.14,.14,.06,.2,.24,0,0,0,0,0,0,0,0,.17,.01,0,0,0,0,.01,.01,.4,.82,.83,.01,0,.33,0,.54,0,.59,.22,0,.5,0,.55,0,.96,0,.21,.16,.62,.59,.45,0,.21,.07,.63,.25,.73,.22,.1,.05,0,0,.74,.27,.01,0,.07,.21,0,.2,.93,.31,0,.76,.43,.02,.49,.68,0,.89,0,0,.94,0,.47,.84,0,.42,.12,.06,.08,.89,.53,.06,.39,.45,0,.2,.03,.36,.14,0,.41,0,0,.63,.02,0,0,.2,0,0,0,0,0,.68,0,.04,0,0,.07,.18,.71,.99,.9,0,.02,.66,.9,.77,.86,.85,.11,.01,0,0,.39,.47,.07,.6,.53,.4,0,0,0,0,.91,0,0,.22,.24,0,0,0,0,0,.01,.75,0,0,.52,.28,.26,0,.6,.6,.92,0,.79,.4,.69,.74,.01,.98,.48,0,0,.08,0,.74,0,.6,.21,.69,0,.39,1,.52,0,.63,.62,.59,0,0,0,.22,.04,0,.26,0,0,.27,.07,.26,.88,.64,0,.66,.77,0,0,.01,.03,.02,.36,.15,.49,.32,.05,.15,.53,.92,.58,.14,.19,.24,.16,.15,.44,.56,.41,0,.02,.45,.25,.02,.01,0,.86,.05,0,.82,0,0,.58,0,0,.51,.62,.87,.21,.62,.08,0,.21,0,0,.62,0,.75,.01,0,.72,.98,.13,.08,.84,.01,.09,0,.73,0,.05,.81,0,.01,0,.56,.46,0,.09,.5,.14,0,.19,0,.02,0,0,.55,.01,.02,0,0,.71,0,0,.23,0,0,.6,.13,.91,.88,.08,.16,.18,.03,.24,0,.04,.01,0,.1,0,0,.6,0,0,0,.44,.04,0,0,0,0,0,.28,0,.91,.45,0,0,.82,.14,.36,.48,0,.02,0,.06,0,.02,.95,.01,.73,.86,0,.73,.44,.37,0,0,.02,.14,0,0,.45,.15,.66,0,.71,.71,0,0,.66,0,.13,0,0,.83,.65,.03,0,.68,.13,.67,.48,.49,.87,0,0,.79,.14,0,.21,0,0,0,.01,.93,.67,0,0,0,.15,0,.6,0,.46,.08,.09,.87,.09,0,.61,0,0,.34,0,.01,.05,0,.33,0,.15,.07,0,0,0,.18,0,.3,0,0,0,.45,0,0,.83,0,.43,0,0,0,0,.26,0,0,.66,.58,0,0,.6,.52,.36,.43,.08,0,.95,.33,.03,0,.29,0,0,0,.67,.61,.75,0,0,0,.44,.51,.32,.27,0,0,.97,0,.48,.39,.82,.57,.02,0,.01,.27,0,0,0,.03,.06,.87,0,.01,.01,0,.68,0,.64,0,0,.01,.01,0,0,.02,.35,0,.97,0,.02,0,.97,0,.37,.82,.87,.22,0,0,0,.06,.02,.92,0,0,0,0,0,.22,.14,.27,0,.07,.86,0,.36,0,0,0,0,.24,.64,.02,0,0,.23,0,.25,.17,0,.73,.33,0,0,0,.02,.92,0,.01,.01,.02,.18,.05,.97,.88,0,.02,.02,.16,0,.07,.81,.57,0,.24,.05,.02,0,0,0,.05,.01,.49,0,.67,.49,0,0,.98,.3,0,.71,0,0,.81,.23,0,.43,.23,0,.01,.01,0,0,.04,0,.68,.01,.14,.83,.49,.38,.28,.92,0,0,.27,0,0,0,0,.05,.12,.02,0,0,.59,.18,.43,0,0,0,0,.01,0,.54,0,0,.14,.04,.89,0,.8,.65,.04,.42,0,.34,.97,.12,.01,.22,0,.24,.6,0,.07,.21,0,.02,0,0,.85,.01,.01,.62,.01,0,0,0,.94,.5,.83,.75,.23,0,0,0,.59,0,0,0,0,.03,.98,.44,.3,.16,.01,.33,0,0,.18,.59,.26,0,.02,.13,0,.99,0,0,0,0,0,.5,.02,0,.85,0,.34,0,0,.27,.27,0,.02,0,0,.7,.5,0,.34,.81,.11,0,.45,.9,0,0,.01,0,0,0,.84,0,0,0,.55,.03,.82,.17,0,.05,0,0,.43,.07,0,.03,.55,.01,0,.69,.05,.26,.22,0,.01,0,0,.26,.27,0,0,0,0,.24,0,0,0,0,.94,.15,0,.86,0,.02,0,0,.38,.1,0,.01,0,0,.31,.19,0,0,0,.78,0,.36,0,.74,0,0,0,0,.39,0,.36,.37,0,0,0,.93,0,0,0,0,.07,0,0,0,0,.54,.19,.46,0,.98,0,.56,.17,0,.57,0,0,0,0,0,.2,0,0,0,0,0,.17,.4,0,0,0,0,0,0,.71,0,.12,0,.32,.16,.94,.99,.24,0,0,.02,0,.69,0,.32,.94,0,0,0,0,0,.1,.02,.47,.52,0,.43,.04,0,0,0,.1,0,.22,.73,0,.33,0,.84,.34,0,0,0,0,.01,0,0,0,0,0,0,0,0,0,.61,0,.77,0,0,.53,0,.61,.21,.01,.49,.04,0,.03,.57,.94,.19,.01,.23,.64,0,0,0,.44,0,0,0,0,0,0,.68,.37,.07,0,.54,0,.53,.69,.4,.5,0,0,0,.77,0,0,.26,0,.12,0,0,.02,0,.4,.96,.06,.07,.08,0,0,0,.09,0,.41,0,.65,.14,.01,.88,0,.03,0,0,0,0,.51,0,0,0,.04,.01,.65,0,0,.1,.22,0,.63,0,.99,.92,.07,.47,0,0,.28,0,0,.43,0,.01,.02,0,.53,0,0,0,0,.41,0,0,0,0,0,0,0,0,0,0,0,0,.33,0,0,0,.62,.3,.11,.02,0,.24,0,.76,0,0,0,0,0,0,0,.63,0,.7,.06,0,.73,.11,.27,0,0,0,0,.08,0,0,0,.24,.45,.51,.85,.58,.87,0,0,.93,.19,0,.21,0,.04,.11,.02,.2,.23,.18,0,.8,.59,0,.05,0,0,.01,0,0,.69,0,.23,.21,0,0,.02,.14,0,.04,0,.73,0,.4,0,0,.68,0,.02,.59,.32,0,.14,.22,0,0,0,0,.01,.15,0,0,0,.22,.59,.24,0,0,.81,0,0,0,.01,.02,0,0,.43,.11,0,0,0,.41,.11,0,0,.31,.58,0,.03,.76,0,.07,.68,0,.02,.83,.1,0,0,0,.55,.92,.26,.69,0,0,.99,.51,.09,.35,0,0,0,.57,0,0,0,0,0,.69,.66,0,0,.26,.12,.42,.36,.15,0,0,0,0,.88,.01,0,.05,.02,.81,.05,0,.04,.24,.49,0,0,0,0,0,.72,0,.19,0,.85,.82,.47,0,0,.15,0,0,0,0,0,0,.02,0,0,.69,0,0,0,0,0,.5,0,.19,0,0,.13,0,0,0,0,0,0,0,.47,0,.03,0,.16,0,0,0,0,0,.01,0,0,.92,0,0,.45,0,0,.82,0,0,0,0,.36,.38,.47,.04,0,.67,0,0,0,.44,.27,.21,.19,.53,.63,0,.26,.33,0,.32,.16,0];export{a as pvalData};
