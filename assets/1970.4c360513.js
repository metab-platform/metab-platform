const a=[.29,.47,.01,.89,.01,0,.02,0,0,.56,.07,.84,.11,0,.07,.66,.35,.46,.06,.49,.02,0,.15,.47,0,0,0,.11,.99,0,0,0,0,.11,.14,.59,.01,.08,.01,.03,.4,0,.01,.52,.26,.16,.99,.69,0,0,.11,.7,.81,0,0,.05,0,.01,.26,0,0,0,0,.8,.2,0,0,.35,.55,.56,.97,.49,0,0,.01,.62,.58,0,0,0,.02,.01,.22,0,.62,0,0,.7,0,.02,.01,.65,0,0,.82,.09,0,.14,.58,0,.9,0,0,.89,0,.68,.04,.06,0,0,.63,0,.41,0,.67,.02,.55,0,.42,0,.92,0,.01,.52,.68,0,.02,.99,0,0,0,.44,.42,0,.99,.69,0,.06,0,.85,0,.37,0,0,.16,.24,.88,.55,0,.68,0,0,.06,.18,0,0,.02,.7,.01,.08,.01,0,.81,0,0,0,0,0,.01,0,.15,0,0,.53,0,0,.32,0,0,0,.65,.32,.86,.31,0,.37,.73,.08,0,.87,.55,0,.48,0,0,0,0,0,.75,.01,.25,0,0,.85,.08,0,.5,0,0,.46,0,.15,.2,.01,.02,0,.43,0,0,.09,0,0,0,0,0,0,0,0,0,.03,.82,.87,.15,.03,.81,.14,.76,.56,.29,.86,0,.16,0,.01,0,.04,.82,.01,.88,.23,0,0,0,0,0,.25,.81,0,.25,.19,.56,.27,0,0,.53,0,0,0,.36,0,.25,.95,0,0,0,.33,0,0,0,0,0,0,.09,0,0,0,0,0,0,.06,0,0,0,.03,0,.02,.27,.03,.09,.01,.47,.01,0,.27,.41,.06,.27,0,.01,.76,0,.67,.18,.3,.01,0,0,.03,0,.01,0,.71,.2,0,.02,0,0,0,.17,0,0,0,.11,.54,0,.23,0,0,.55,.58,0,.07,.29,.29,.01,0,.41,0,.03,0,0,.08,.02,0,.02,.04,.01,.01,0,.04,.01,.6,0,.02,.64,.02,.16,0,0,.51,.02,.32,.04,.01,0,0,.86,0,.32,0,.81,.06,.97,.97,.27,0,.04,.83,0,0,0,.24,.93,.3,.56,.01,0,.16,.03,.87,.22,.07,0,0,0,.79,.24,0,0,0,.01,.01,.93,0,0,.64,0,.18,0,.03,.04,0,.04,.14,.16,0,0,.89,0,.24,0,.02,0,.47,0,.04,.45,0,0,0,0,0,0,.79,0,0,.03,0,.24,0,0,0,0,.38,.93,.55,0,0,0,0,0,0,0,0,.64,.01,.12,.5,0,0,.09,0,.01,.93,0,0,0,0,0,0,0,.04,0,0,0,.13,0,.34,.88,.04,.56,.81,.89,.67,0,0,.01,.84,0,0,0,.04,0,.02,0,.68,.66,0,0,0,0,.03,0,.1,0,0,0,0,0,0,0,0,.15,.93,.01,.29,.02,.49,.48,0,0,0,.96,.02,.24,.03,0,0,.55,.44,.7,.02,.07,0,.35,.35,.05,0,0,.42,0,0,0,.01,0,.02,0,.4,0,.2,0,0,.03,0,.92,.34,.93,.1,0,.59,0,.01,.12,.8,0,.01,.16,.01,0,.59,.16,.17,0,.08,0,.18,0,0,.03,.01,.36,.91,.86,0,0,0,0,.02,0,0,0,0,.01,0,.05,0,0,.83,.81,.24,.38,.01,.26,0,.16,.81,.01,.02,.11,.21,0,.19,0,.05,0,.54,.17,0,0,.2,.49,0,.19,0,0,0,0,0,.01,0,.05,0,.01,.14,.59,0,.47,0,.73,0,.61,0,0,0,0,.01,.32,.18,.31,.53,.01,.02,0,.01,.07,.35,.94,0,0,0,0,.8,.53,0,0,.13,0,0,.05,.31,.3,.74,.13,0,0,.01,.01,0,0,0,.65,.12,.41,.08,.51,.75,.15,0,0,.26,0,0,0,.01,.59,.16,.69,.15,.41,0,0,0,.02,0,.71,.6,.21,.05,.02,.53,0,0,.01,.35,.01,.45,.02,0,.35,0,0,0,0,.53,0,0,.01,.61,.2,.63,.02,0,.03,0,.95,.12,0,.01,.01,0,.69,.62,.48,.06,0,.04,.61,.08,0,.27,.87,0,0,.01,.27,.1,0,.22,.02,.01,.18,.01,0,.19,0,.05,0,0,0,0,.01,.78,.69,0,.01,0,0,0,.37,.01,0,0,0,.55,0,0,0,0,.03,0,.53,.08,0,0,.02,0,0,.13,.02,.58,.84,.45,0,.01,0,0,0,0,.81,0,.54,.17,0,.01,.71,0,.74,0,.08,.41,.45,0,0,.34,.53,.08,.04,0,.16,0,0,0,.35,0,.09,0,.13,.03,0,.69,.04,0,0,.68,.89,.05,0,.05,0,.89,0,0,.75,.02,.68,.21,0,.03,.05,.01,.83,.35,.46,0,.06,.03,.56,0,.25,.17,0,0,.55,0,.01,.09,0,.19,0,.15,0,.02,0,0,0,.72,.02,.04,0,0,0,.54,.84,.61,.6,0,.84,0,.91,0,.61,0,.03,.57,0,0,.24,.01,.02,.39,.01,.42,.02,.03,0,0,.03,.01,0,.04,0,.02,.12,0,.01,0,0,.12,0,0,.55,.14,.22,0,.26,.14,0,0,.73,.01,0,.07,.1,.54,0,.32,0,.89,0,.01,0,.85,.14,.29,0,.25,.55,0,0,.35,0,.19,.64,0,0,.57,.04,0,0,0,0,.02,0,0,0,.01,.23,.36,.35,0,0,.02,0,.02,.27,0,.17,.51,.7,.7,.76,.72,.67,.32,.76,.04,.56,.44,.05,.77,.14,0,0,.01,0,.06,0,.94,.55,.66,0,.29,.2,0,.67,.05,0,.71,.49,.25,0,.83,.13,0,.6,0,0,0,.05,.92,0,.01,0,.12,.78,0,.39,.16,.28,.04,0,0,.21,0,.27,.69,.01,.6,.02,0,0,.71,.29,.01,0,0,0,0,.07,.43,0,0,0,.01,.75,0,.02,0,0,0,.34,.01,.82,.38,0,.03,.47,.08,0,0,.13,.15,0,0,.06,0,0,.14,0,0,0,0,.04,.02,0,0,.02,.09,0,.3,.01,0,0,.88,0,0,.15,.01,0,0,.24,.27,.21,.43,.25,.18,.32,.3,.02,.61,.02,0,0,.05,.03,.01,0,.35,.07,.22,0,.68,.6,0,0,.28,0,.55,0,.43,.74,.63,0,0,.5,0,.41,0,.3,.85,0,0,.88,0,0,.01,0,.01,0,0,0,.99,0,0,0,.49,.03,.98,0,.77,0,.32,.47,.5,.01,.16,.01,.02,0,.02,.25,.01,.46,.71,0,.25,.91,0,0,0,.26,0,.48,0,0,0,.07,.01,.05,0,0,.92,.22,.29,.01,0,.56,0,.05,.01,.25,0,0,.27,.25,0,.91,0,.01,.05,0,.74,0,.9,.01,0,0,.41,.6,.28,.02,0,0,.18,.3,.58,.87,.64,0,.14,0,.68,.51,.01,.47,.25,0,0,0,0,0,0,.21,.02,.03,0,0,0,0,.83,0,.37,0,.52,.2,.06,.25,.41,.01,.62,0,.01,0,0,.46,.8,.01,.76,.98,.29,.89,0,0,0,.72,0,.22,0,0,0,0,0,.52,.13,.47,.32,0,.07,0,.06,0,.01,0,0,.28,.18,.01,0,.02,.72,.01,.03,0,.26,0,.09,.09,0,0,0,.19,0,.21,.01,.13,.28,.02,.25,.71,0,0,.15,.27,.11,0,.04,.37,0,.38,.2,0,0,0,0,.38,0,0,0,.04,0,0,0,.46,.01,.94,0,0,0,.07,.45,.24,0,0,.03,0,.24,.27,.5,0,.42,.38,.01,0,.44,0,0,.46,.69,0,0,0,0,0,0,0,.1,0,.56,0,.04,0,.02,.01,.01,0,.41,.32,0,0,.76,0,0,.13,.09,.98,.02,.31,.01,0,.06,.2,.94,.6,.01,.51,.37,.01,.01,.31,0,.79,.01,0,0,0,0,.89,.8,0,.94,0,.12,.13,0,.77,0,.55,.12,.83,0,.18,.85,.69,0,0,0,0,0,.11,.83,.77,.01,.01,0,0,0,.12,.66,.13,0,0,.05,.75,.01,0,.39,0,0,0,.13,0,0,.5,0,0,0,0,.04,.57,0,.03,0,0,0,.55,.03,.95,.76,.37,0,.79,.01,0,0,0,0,0,0,.3,.03,0,.98,.03,0,.95,.56,0,.68,0,.07,.04,0,0,0,.27,.17,0,.93,.63,0,.26,0,0,0,0,.92,.01,0,0,0,0,0,0,0,0,0,.27,0,0,.17,0,.18,0,0,.63,.01,0,.53,0,0,.48,0,0,0,0,0,0,0,.42,.62,0,0,0,0,.24,0,0,0,0,.25,.08,.24,0,0,0,0,0,.29,0,0,0,.3,.12,0,.06,0,.03,0,.19,0,.33,0,.04,0,0,0,.46,.09,.02,0,0,.01,.1,.96,0,0,0,0,0,0,.17,0,.09,0,.54,0,.1,.49,.83,.03,.02,.2,0,.97,0,.05,0,0,0,0,0,0,.1,.31,0,0,0,.72,.59,0,0,0,.54,.01,.16,.39,0,0,0,0,.44,0,.02,0,0,.02,.02,0,0,0,.2,0,.75,.23,0,.17,0,.42,.01,0,.71,0,.01,0,.11,0,.21,.21,0,0,0,0,0,.06,.26,0,0,.24,.01,0,.43,.03,0,0,.01,.03,.67,.77,0,.18,0,.95,0,0,0,0,0,1,.57,.01,0,0,0,.14,0,0,0,.09,.94,.64,.02,0,0,0,0,0,.01,0,0,0,.13,.08,.51,.95,0,.05,.06,.04,0,0,.57,0,0,0,0,.65,.24,.03,.24,.37,0,0,.04,.81,.21,.71,.33,.42,0,0,.17,0,.02,.31,.02,.08,0,0,.83,0,.01,0,.18,.36,0,.03,0,0,.01,.38,0,0,0,0,0,0,.22,0,0,0,.03,0,.09,.31,0,.01,0,.29,0,0,0,.02,.02,.02,0,.89,0,.33,.02,0,0,.66,.01,0,0,0,0,.01,.02,0,.01,.41,.79,.59,.89,.34,.2,.01,.94,0,0,0,.04,.03,.05,.07,.16,.06,.29,.65,0,.84,0,0,.01,.74,0,.02,.65,.91,.84,0,.57,0,0,0,0,.02,0,.78,0,.02,0,0,0,0,.44,.21,.56,.05,.6,.03,.08,.75,0,0,0,0,.03,.01,0,0,.16,.05,.37,.09,0,.01,.8,0,0,.15,0,.99,0,0,0,.03,0,0,0,.54,.01,.03,.5,.74,.32,.01,.51,.22,0,0,.7,0,.81,.5,.4,0,0,.04,.01,.62,.35,.21,.01,.01,.52,.72,0,.18,0,0,0,.3,.02,.05,0,0,0,.94,.45,0,0,.01,.53,.4,.17,.71,0,0,.13,0,.95,0,.02,.16,0,.48,.33,0,.48,.04,.98,0,.01,.1,0,0,.97,0,.02,.25,.01,.49,.6,0,.01,.02,.52,0,0,.02,.31,0,0,0,0,.97,0,0,0,0,0,.98,0,.01,0,.2,0,.03,0,0,0,0,0,.04,.22,0,.61,0,.01,0,0,0,0,0,.05,0,.02,.01,0,0,.18,.01,.34,.62,0,0,0,0,.01,.85,.01,0,0,.01,0,0,0,.54,0,.36,.39,.15,.15,0,.95,.29,0,.05,.28,0];export{a as pvalData};
