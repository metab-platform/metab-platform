const a=[.13,.34,.05,.93,0,.28,.03,0,0,.11,.08,.91,.77,0,.1,.71,.98,.79,.38,.11,.69,0,.79,.8,0,0,0,.2,.74,0,0,0,0,.68,.94,.07,.03,.07,0,.23,.89,0,.51,.52,.47,.36,.98,.36,.01,0,0,.43,.51,0,0,.01,0,.14,.17,0,0,0,0,.96,.5,0,0,.32,.47,.54,.11,.15,0,.01,0,.23,.09,0,.07,0,.03,0,.08,0,.29,0,0,.65,0,0,0,.22,0,.01,.91,.08,0,.01,.66,0,.72,0,0,.25,0,.59,.05,.58,0,0,.3,0,.4,0,.3,0,.74,0,.29,0,.24,.02,.07,.17,.51,0,0,.69,0,0,0,.38,.16,0,.51,.82,0,0,0,.64,0,.86,0,0,.74,.76,.93,.59,0,.2,0,0,.96,.41,0,.02,.42,.09,.06,.11,.06,0,.41,0,0,0,0,0,.04,0,.81,0,0,.03,0,0,.35,0,0,0,.08,.61,.77,.68,0,.03,.33,.75,0,.35,.67,0,.17,0,0,.01,0,.07,.39,0,0,0,0,.66,.05,0,.28,0,0,.93,0,.02,.89,0,.18,0,.3,0,0,.01,0,0,0,0,0,0,0,0,0,.09,.61,.53,.01,.11,.66,.82,.15,.89,.13,.57,0,.14,0,0,0,0,.83,.04,.1,.85,0,.01,0,0,0,.94,.79,0,.17,.52,.46,.02,0,0,.17,0,.17,0,.05,0,.01,.53,0,.06,0,.61,0,0,0,.01,0,0,.03,.02,0,0,.02,0,0,0,.01,0,0,0,0,.29,.2,0,.07,0,.44,.03,0,.48,.12,0,.68,0,0,.25,0,.21,.86,.77,.12,0,.02,.01,.09,0,0,.98,.18,0,.04,0,0,.49,.13,0,.01,0,.03,.59,0,.2,0,0,.43,.03,0,.44,.07,.49,.01,.02,.76,0,.34,0,0,.05,.46,0,.14,.01,0,.16,0,.15,0,.88,0,.55,.85,.02,.53,0,0,.87,0,.12,0,.01,0,0,.19,0,.27,0,.68,.74,.49,.66,.63,.01,.01,.39,0,0,0,.39,.4,.37,.25,.06,0,.63,.96,.84,.09,0,.01,0,0,.72,.15,0,0,0,.05,.07,.25,0,.15,.28,0,.37,0,.8,.6,0,0,.1,0,0,.02,.7,0,.53,0,.02,0,.21,0,0,.53,0,0,0,0,0,0,.42,0,0,.08,0,.01,0,0,0,0,.1,.39,.4,0,0,.01,0,.01,0,0,0,.23,.12,.09,.45,0,0,.28,.01,.21,.17,0,0,.01,0,.01,0,0,.02,0,0,0,.03,0,.72,.12,.45,.51,.67,.5,.34,.01,0,.01,.88,0,0,0,.66,0,.08,0,.76,.88,0,.21,0,0,.02,0,0,0,.02,.12,0,0,0,.01,.01,.17,.04,0,.74,.46,.52,.48,0,0,.01,.93,.04,.7,.54,0,.08,.42,.58,.9,0,.82,0,0,.35,.73,0,0,.99,0,0,.02,.35,0,.56,0,.21,.01,.66,.01,0,0,0,.84,.97,.87,.32,.01,.65,0,.14,.01,.71,0,.06,.37,0,0,.6,0,.81,0,.01,0,.04,.01,0,0,.05,.17,.35,.44,0,0,0,0,.06,0,.08,0,0,.02,0,.26,0,0,.39,.8,.49,.85,.1,.26,0,.84,.86,.04,0,0,.51,.18,.03,.02,.6,0,.01,0,.02,0,.02,.36,.03,.12,0,0,0,0,0,.18,0,.14,0,0,.04,.42,0,.16,0,.31,0,.03,0,.01,0,0,.26,.15,.15,.72,.05,.05,.23,0,.02,.01,.96,.41,0,0,0,0,.44,.26,0,0,.15,0,0,0,.64,.76,.67,.3,0,0,.02,0,0,0,0,.36,.24,.14,.48,.79,.34,.69,.02,0,0,0,0,0,.02,.14,.02,.29,.99,.2,0,0,0,.03,0,.51,.55,0,.26,.56,.43,0,0,.05,.78,0,.6,.04,0,0,.02,0,0,0,.09,0,0,.02,.95,.08,.56,.02,.02,0,0,.42,.23,0,.09,.01,0,.03,.41,.14,.01,0,.69,.95,.04,0,.62,.98,0,0,.01,.25,.09,0,.94,.06,.05,.09,0,0,.81,0,.06,0,0,0,0,.05,.17,.79,0,.18,0,0,0,.78,.01,0,.01,0,.5,0,0,.01,0,.32,0,.06,.19,.01,0,.07,0,0,.14,.01,.26,.36,.05,0,.02,0,0,.02,0,.56,0,.06,.01,0,0,.06,0,.06,.01,.16,.05,.4,0,.02,.23,.49,.2,.14,0,.66,0,.01,0,.15,0,0,0,.44,0,0,.45,.39,0,0,.63,.29,.05,.02,0,0,.09,0,0,.87,.02,.29,.07,0,.88,0,0,.15,.39,.53,0,.01,.01,.4,.08,.94,.51,0,.01,.18,0,.02,.19,0,0,0,.01,0,.31,.01,0,0,.5,0,.77,.04,0,.01,.58,.89,.86,.43,0,.79,0,.93,0,.94,0,0,.42,0,0,.51,0,0,.33,0,.4,.37,.02,0,0,.71,.04,0,.01,0,.35,.07,0,0,0,0,.2,0,0,.05,.48,.01,0,.08,.24,0,0,.53,.83,0,.49,0,.83,0,.01,0,.45,0,.03,0,.28,.01,.6,0,.75,.35,.02,.01,.14,.01,.68,.94,0,0,.45,.14,.01,0,0,0,.01,0,0,0,0,.25,.64,.37,0,0,0,0,0,.4,0,.39,.5,.44,.96,.47,.43,.61,.22,.74,.07,.09,.79,.55,.17,.27,0,0,.02,0,.84,0,.31,.41,.51,0,.25,.04,0,.92,0,0,.06,.82,.06,.01,.46,.49,0,.54,0,0,0,.73,.95,.07,.03,.01,.93,.57,0,.71,.33,.05,.09,0,0,.01,.03,0,.76,.05,.35,.03,0,0,.32,.12,0,0,0,0,0,.07,.33,0,0,0,.07,.57,.01,.08,.02,0,0,.82,0,.99,.75,0,.02,.06,.26,0,0,.17,.36,0,0,.67,0,0,0,0,0,0,.02,.07,0,.03,0,.11,.13,0,.1,.43,0,0,.28,.02,.01,.87,0,.01,0,.1,.2,0,.58,.01,.77,.39,.11,.01,.27,0,0,.01,.48,.61,0,0,.02,.71,.02,0,.09,.19,0,0,.7,0,.22,.03,.94,.46,.72,0,.01,.07,0,.6,0,.61,.47,0,0,.36,0,0,.02,0,.01,0,0,0,.16,0,0,0,.29,.06,.85,0,.48,0,.16,.59,.38,.12,.88,.01,.03,.33,.3,.52,.01,.44,.66,0,.26,.42,0,0,0,0,0,.34,0,0,0,.03,.22,.16,0,.02,.07,.15,.13,.02,0,.76,0,.02,.04,.96,0,0,.79,.81,.01,.11,0,0,.03,0,.33,0,.96,.01,0,0,.63,.15,.55,.01,0,.02,.39,.81,.47,.07,.99,0,.89,0,.84,.94,.01,.92,.04,0,0,0,0,0,.04,.01,.01,.02,0,0,0,0,.24,0,.61,0,.88,.08,.01,.66,.05,0,.05,0,.39,0,0,0,.67,.02,.76,.36,.83,.33,0,0,0,.94,0,.91,0,0,0,0,0,.02,.06,.45,.74,0,.03,0,.03,0,.04,.02,0,.19,.18,0,0,.01,.7,0,0,.27,.05,0,0,.52,0,.09,0,.03,0,.46,0,.39,.19,.04,.5,.41,0,0,.82,.88,.17,.01,.1,.52,0,.6,.64,0,0,0,0,0,0,0,0,.72,0,0,0,.48,.33,.95,.07,0,0,.55,0,.16,.11,0,.04,0,.69,.87,.49,.14,.96,.87,.15,.06,.34,.06,.05,.22,.36,0,0,.35,0,0,0,0,.92,0,.65,.01,.01,0,.62,0,.11,0,.39,.05,0,0,.48,0,0,.05,.01,.75,.03,.01,.01,.23,.48,.42,.44,.98,0,.86,.82,.08,.43,.05,0,.73,.07,0,0,0,0,.59,.05,0,.24,0,.42,.06,0,.62,.02,.17,.33,.67,.13,.09,.58,.52,0,0,0,0,.03,.1,.12,0,0,.38,0,0,0,.07,.75,.46,.03,0,.35,.6,0,0,.2,0,0,0,.64,0,0,.71,.01,.02,0,0,.87,.78,0,.15,0,0,0,.8,0,.24,.77,.01,0,.58,.03,0,0,.01,0,0,0,.01,.01,0,.8,.74,0,.87,.22,0,1,0,.02,0,0,0,0,.31,.05,0,.74,.08,0,.07,0,0,0,0,.72,0,0,0,.02,0,0,.01,0,0,0,.02,0,0,.06,0,0,0,0,.6,0,0,.43,0,0,.36,0,.01,0,0,0,0,0,.24,.77,0,.04,0,0,1,.01,0,0,0,.12,.04,.6,0,0,0,0,0,.62,0,0,0,.12,0,0,0,0,.33,0,.04,0,.36,0,.04,0,.01,.04,.76,.14,.1,0,0,.03,.92,.03,0,.01,0,0,0,0,.69,0,.99,0,.18,0,.35,.07,.07,0,.06,.01,0,.77,0,.2,0,0,0,0,0,0,.03,.04,0,0,.01,.89,.17,0,0,0,.72,.02,.04,.19,0,0,0,0,.93,.02,.1,0,0,0,.29,0,0,0,.08,0,.02,.21,0,.6,0,.29,.07,0,.99,0,.06,0,.31,0,.32,.06,0,0,.27,.01,.01,.4,.05,0,0,.22,.06,0,.51,.01,0,0,0,.17,.74,.31,0,.84,.01,.61,0,0,0,.03,.11,.34,.55,0,0,0,0,0,0,0,0,.23,.6,.98,.45,.07,0,.16,0,0,0,0,0,0,.93,0,.14,.28,0,.05,.15,.01,.01,.01,.39,0,.01,0,0,.86,.76,0,.04,.14,0,0,.64,.98,.39,.88,.14,.26,0,0,.57,0,.1,.37,.16,.03,0,0,.61,0,.04,0,.13,.98,0,.03,0,0,0,.14,0,0,0,0,0,0,.11,0,0,0,.02,0,.34,.1,0,.04,0,.44,0,.03,0,.09,.04,.05,0,.31,0,.71,0,0,.01,.27,.06,0,.01,0,0,0,.15,0,.03,.77,.18,.14,.75,.8,.96,.02,.32,0,.23,0,.86,0,.95,.01,.95,.14,.38,.15,0,.27,0,.01,0,.87,0,.38,.2,.09,.68,0,.8,0,0,0,.04,.27,0,.5,0,.13,0,0,0,0,.33,0,.01,.16,.16,.01,.9,.43,0,0,0,.01,.22,0,0,0,0,.58,.75,.26,0,.05,.61,0,0,.3,0,.24,0,0,0,0,0,0,0,.03,.04,.04,.03,.96,.76,.02,.36,.21,0,0,.44,0,.91,.52,.39,0,0,.32,.01,.74,.9,.56,.09,0,.31,.06,0,.31,.02,0,.08,0,.3,.15,0,0,0,.03,.15,0,0,.03,.54,.6,.12,.93,0,0,.03,0,.55,.27,.29,.05,0,.78,.03,0,.1,.03,.54,0,.03,0,.01,0,.38,0,.61,.1,.16,.98,.08,0,0,.01,.83,0,0,.73,.27,0,0,0,0,.57,0,0,0,0,0,.38,0,.89,0,0,0,0,.16,0,0,0,0,.3,0,0,.05,0,.15,0,0,0,0,0,.03,0,.38,.03,0,0,.94,.08,.61,.79,0,.04,0,0,0,.23,0,0,0,.01,0,0,0,.8,0,.82,.01,.06,.7,0,.96,.67,0,.48,.08,0];export{a as pvalData};
