const a=[0,0,0,.87,0,.24,0,.55,0,.89,.01,.32,.71,0,0,.73,.07,.44,.23,.99,.62,.08,.56,.01,0,0,.02,.53,0,.03,0,.01,0,.9,.77,.03,0,0,0,0,.54,0,0,.9,.17,.02,.81,.17,.46,0,.18,.65,.26,0,0,.02,0,.32,0,0,.03,0,0,.87,0,.04,0,0,.83,.83,.45,0,0,.02,0,.42,.53,.03,0,.15,0,0,.54,0,.05,.13,0,.35,0,0,.42,.41,0,0,.56,.05,0,.01,.65,0,.43,0,0,.24,0,.07,.23,.04,0,0,.77,.04,.35,0,.24,0,.91,.03,.03,0,.95,.5,.52,.5,.66,0,0,.97,0,0,.98,0,.41,.79,.35,.02,.78,0,0,.56,0,.6,0,0,.99,.27,.78,.15,0,.22,0,.35,.54,.24,.49,.51,.04,.18,0,0,.66,0,.81,.01,0,.03,.01,0,.32,0,.85,.02,.86,.04,0,.34,.77,.94,.01,0,.46,.42,.96,0,0,.22,.81,.62,.78,0,.17,.36,.41,0,0,0,0,.03,.98,.01,.06,0,0,.76,0,0,.89,0,.01,.47,.52,0,.03,0,.38,.01,.59,.38,.09,.23,0,0,0,0,0,0,.99,.01,.01,0,.6,.8,0,0,.09,.66,0,.73,.86,.95,.12,0,.98,.63,.04,.01,.48,.26,.1,.27,.71,.64,0,.02,0,.61,.26,0,.46,0,.56,.51,0,0,.22,0,.06,0,.78,0,.4,0,0,0,0,.39,.75,.03,0,.4,.14,.05,0,0,0,0,.18,0,.06,.76,.57,0,0,.01,.02,0,.94,0,.94,.02,.35,0,.01,.22,.61,0,.21,0,.02,.63,0,.27,.93,.96,0,.03,.04,.47,0,.32,0,.13,0,0,.73,0,0,.81,.3,0,0,0,.01,.11,.02,.84,.05,0,.01,.02,0,0,.22,.72,0,0,.49,0,0,0,0,.03,.37,0,0,0,0,.36,0,0,0,.29,0,.07,.39,0,.01,0,.05,.25,0,.01,0,.28,.26,.02,.02,0,.51,.01,.37,.52,.77,.37,.75,0,.02,.95,0,0,0,.54,.97,.11,.05,0,0,.11,.96,.48,.12,0,0,0,.21,.73,0,0,0,0,0,0,.16,0,.37,.78,0,0,.11,.08,.71,0,.55,.95,0,0,0,.6,0,0,.78,.43,0,.58,.43,0,0,0,0,0,0,0,0,.28,.72,0,0,0,.06,0,.26,0,0,.02,.49,.5,.65,0,.06,0,0,0,0,0,.46,.03,.01,.06,0,0,.05,0,.01,.79,.01,0,0,.68,0,.12,0,0,0,0,.96,0,0,.05,0,0,.58,.32,.3,.02,0,0,.29,.42,0,.33,0,.46,0,0,0,.52,.13,0,0,.08,0,.02,0,.22,.95,.55,.3,.1,.01,0,.17,0,.38,.73,0,.92,.26,.18,.96,0,.01,.25,.27,.32,.88,.55,.01,0,.51,.53,.66,.11,.8,.31,.06,.62,.4,.23,0,0,.07,0,0,0,0,.56,0,.38,.01,.61,0,.68,0,.96,.8,.24,.34,.47,.75,.15,0,0,.27,0,0,0,.45,0,.09,0,.02,.84,0,0,0,0,0,0,.45,0,.29,.62,.8,0,.77,0,0,0,0,.38,0,0,0,.36,0,.05,.6,.11,.99,0,.15,0,.26,.48,.68,.74,0,.01,.74,.46,.65,.51,.03,.41,.01,0,.11,.15,0,.01,.96,0,0,.07,0,0,0,.35,.14,.09,.28,0,0,1,.03,0,.52,0,.05,0,.37,0,.12,0,0,.68,0,.32,.68,1,0,0,0,.53,.09,.98,.37,0,0,0,0,.67,.23,.03,0,.01,0,0,0,.37,1,.18,0,0,.18,.12,0,0,0,.4,.25,.27,.17,.7,.71,.73,.6,.22,0,0,0,.09,0,0,.55,.56,.03,0,.27,.2,0,.13,.54,.29,.28,.29,0,.96,.08,.72,.2,0,0,.27,0,0,0,0,0,0,0,.56,0,.91,0,.69,0,.28,.43,.63,0,0,0,.47,1,0,0,0,.08,0,.02,.31,.07,0,0,.89,.16,0,0,.16,.08,0,0,.01,0,0,0,.79,.9,.01,.69,.02,0,.71,.01,0,.02,.88,0,.06,0,.48,.08,0,0,0,0,.2,.09,.04,.17,.01,0,0,0,0,0,0,.06,0,.06,0,.02,0,0,0,.16,.01,.25,.97,.82,.11,0,.26,0,.51,0,.74,.23,0,.4,0,.85,0,.59,0,.2,.31,.89,.26,.09,0,.04,.23,.73,.72,.23,.17,.14,.04,0,0,.41,.83,0,0,.03,.12,0,.45,.86,.14,0,.59,.86,0,.41,.49,.01,.82,0,0,.32,0,.26,.79,0,.55,.01,.25,.37,.66,.31,.01,.23,.33,0,.14,.07,.57,.12,.02,.32,0,0,.67,.01,0,0,.18,0,0,0,0,0,.71,0,.14,0,0,.06,.27,.39,.58,.62,0,.06,.21,.81,.46,.4,.49,.08,.02,0,0,.28,.91,.6,.41,.32,.97,0,0,0,0,.78,0,0,.19,.48,0,0,0,0,0,0,.99,0,0,.21,.02,.14,0,.33,.56,.93,0,.74,.29,.96,.98,0,.38,.13,.03,0,.04,0,.77,0,.8,.2,.8,0,.41,.64,.54,0,.49,.93,.68,0,0,0,.04,.01,0,.11,0,0,.8,.04,.16,.53,.95,0,.88,.55,0,0,.02,.01,.02,.24,.01,.97,.69,.04,.2,.34,.46,.99,.25,.36,.85,.08,.23,.5,.22,.34,0,.01,.95,.19,.01,.08,.01,.46,.12,0,.84,0,0,.9,0,0,.82,.78,.81,.87,.68,.16,0,.22,0,0,.41,0,.98,.17,0,.99,.67,.14,.02,.96,.01,.04,0,.93,0,.03,.83,0,0,.01,.1,.21,0,.37,.33,.1,0,.33,0,0,0,0,.55,0,.01,0,0,.4,0,0,.99,0,0,.8,.18,.82,.45,.07,.07,.31,.17,.16,0,.01,.27,0,.11,0,0,.95,0,0,0,.47,.08,.03,0,0,0,0,.29,0,.49,.78,0,0,.89,.44,.67,.44,0,0,0,.02,0,.01,.88,.01,.93,.82,0,.54,.91,.94,0,0,.07,.27,0,0,.16,.31,.62,0,.48,.55,.02,0,.92,0,.2,0,0,.98,.63,.02,0,.6,.01,.98,.1,.78,.51,0,.01,.95,.09,0,.1,0,0,0,0,.73,.33,0,0,0,.21,0,.27,0,.48,.54,.36,.91,.31,0,.98,0,0,.19,0,0,.02,0,.06,0,.17,.03,0,0,.01,.03,0,.07,0,0,0,.76,0,0,.91,0,.5,.02,.02,0,0,.51,0,0,.94,.53,0,0,.85,.71,.29,.45,.24,0,.87,.14,.05,0,.1,0,0,0,.84,.49,.91,0,0,0,.62,.73,.13,.12,0,0,.82,0,.22,.15,.71,.74,.02,0,.03,.53,0,0,0,.07,.41,.66,0,0,0,.01,.47,0,.83,0,.02,.01,.01,0,0,.18,.48,0,.91,0,.01,0,.68,0,.71,.78,.88,.14,0,0,0,.14,0,.31,0,0,0,0,0,.32,.04,.22,0,.1,.45,0,.21,0,0,0,0,.02,.61,.04,0,0,.69,0,.03,.33,0,.21,.07,0,0,0,.09,.95,0,.05,0,0,.08,.18,.81,.63,0,.14,.13,.21,0,.25,.38,.7,0,.15,.18,0,0,0,0,.01,0,.05,0,.82,.1,0,0,.69,.41,0,.77,0,0,.46,.14,0,.68,.17,0,0,.01,.01,0,.02,0,.98,.01,.23,.72,.61,.51,.17,.81,0,0,.2,0,0,0,0,.22,.72,.04,0,.01,.61,.24,.09,0,0,0,0,0,0,.72,0,0,.11,0,.64,0,.71,.37,.15,.6,0,.29,.72,.06,0,.17,0,.61,.4,0,.02,.19,0,.02,0,0,.94,.01,.02,.49,.01,0,.02,0,.92,.93,.44,.92,.1,0,0,0,.56,0,0,0,0,.02,.89,.92,.21,.05,.04,.18,0,0,.05,.95,.42,0,0,.17,0,.6,0,0,0,0,0,.99,0,0,.97,0,.92,0,0,.11,.93,0,.14,0,0,.25,.56,0,.64,.77,.26,0,.56,.88,0,0,.08,0,0,0,.84,0,0,0,.9,.01,.69,.09,0,.16,0,0,.29,.05,0,.07,.37,0,0,.66,.06,.1,.07,0,0,0,0,.14,.18,0,0,0,0,.05,0,0,0,0,.49,.04,0,.22,0,0,0,0,.94,.08,0,.02,0,0,.48,.13,0,0,0,.41,0,.44,0,.87,0,0,0,0,.6,0,.23,.13,0,0,.01,.57,0,0,0,.02,.02,0,0,0,0,.3,.18,.2,.01,.2,0,.4,.22,0,.16,0,0,0,0,0,.1,0,0,0,0,0,.48,.26,0,0,0,0,0,0,.75,0,.07,0,.45,.08,.96,.78,.24,0,0,.02,0,.97,0,.39,.82,0,0,0,0,0,.02,.05,.19,.26,0,.25,.17,0,0,0,.05,0,.06,.96,0,.65,0,.5,.46,0,0,0,0,.03,0,0,0,0,0,0,0,0,0,.52,0,.85,0,0,.46,0,.74,.62,0,.34,.01,0,.01,.87,.87,.14,0,.15,.96,0,0,0,.65,0,0,0,0,0,0,.99,.64,.01,0,.19,0,.61,.85,.56,.33,0,0,.01,.61,0,0,.17,0,.16,0,0,.17,.01,.28,.92,.12,.02,0,0,0,.01,.56,0,.2,0,.95,.04,.04,.8,0,.01,0,0,0,0,.74,0,0,0,.02,.08,.78,0,0,.26,.17,0,.65,.02,.76,.92,.15,.8,0,0,.69,0,0,.49,0,.02,.01,0,.6,0,0,0,0,.16,0,0,0,0,0,0,0,0,0,0,0,0,.16,0,0,0,.37,.16,.04,.01,0,.17,0,.94,0,0,0,0,0,0,0,.55,0,.92,.07,0,.3,.26,.13,0,0,0,0,.04,0,0,0,.53,.34,.33,.72,.91,.63,0,0,.63,.12,0,.58,0,.03,.26,0,.54,.11,.37,0,.8,.2,0,.04,0,0,.01,0,0,.77,0,.49,.59,0,0,.03,.09,0,.01,0,.99,0,.46,0,0,.6,0,0,.56,.23,0,.12,.35,0,0,0,0,.04,.13,0,0,0,.42,.65,.74,0,0,.76,0,0,0,.01,.01,0,0,.22,.7,0,0,0,.53,.12,0,.02,.43,.59,0,.03,.94,0,.01,.78,0,.02,.59,.27,0,0,0,.33,.98,.19,.91,0,.01,.62,.92,.07,.7,0,0,0,.11,0,0,0,0,0,.51,.32,0,0,.08,.33,.24,.43,.32,0,0,.02,0,.75,.02,0,.04,0,.81,.08,0,.05,.16,.58,0,0,0,0,0,.99,0,.3,.07,.81,.21,.9,0,0,.02,0,0,0,0,0,0,.02,0,0,.67,0,0,0,0,0,.67,0,.41,0,0,.1,0,0,0,0,0,0,0,.11,0,.07,0,.36,0,0,0,0,0,.18,0,0,.3,0,0,.67,0,0,.77,0,0,0,0,.19,.91,.73,.18,0,.02,0,0,0,.11,.08,.32,.23,.31,.85,0,.06,.04,0,.52,.14,0];export{a as pvalData};
