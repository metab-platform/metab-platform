const a=[0,0,0,.58,0,.38,.01,.53,0,.3,0,.34,.76,0,0,.95,.04,.57,.07,.73,.66,.01,.43,0,0,0,.01,.58,0,.02,0,0,0,.56,.65,.03,0,0,0,0,.96,0,0,.58,.1,0,.59,.11,.53,0,.08,.8,.09,0,0,0,0,.27,0,0,0,0,0,.65,.01,.01,0,0,.99,.95,.56,0,0,.01,0,.8,.38,0,0,.17,0,0,.59,0,.01,.04,0,.36,0,0,.63,.54,0,0,.74,.28,0,.01,.18,0,.37,0,0,.26,0,.17,.37,.12,0,0,.93,.01,.47,0,.12,0,.86,.01,.01,0,.93,.26,.11,.8,.37,0,0,.19,0,0,.81,0,.46,.54,.05,.25,.8,0,0,.67,0,.4,0,0,.78,.22,.91,.68,0,.1,0,.64,.5,.64,.52,.82,.11,.28,0,0,.54,0,.42,.01,0,.01,0,0,.69,0,.92,.02,.77,.02,0,.22,1,.78,0,0,.71,.4,.91,0,0,.4,.58,.82,.7,0,.14,.23,.35,0,0,0,0,.03,.95,0,0,0,0,.84,0,0,.9,0,.01,.72,.63,0,.03,0,.3,0,.78,.23,.09,.16,0,0,0,0,0,0,.97,.01,.02,.01,.36,.47,0,0,.08,.55,0,.24,.8,.87,.02,0,.79,.5,.01,.02,.39,.15,.04,.36,.73,.78,0,.03,0,.64,.35,0,.58,0,.21,.95,0,0,.72,0,.08,0,.75,0,.31,0,0,0,0,.63,.82,.01,0,.53,.12,.08,0,0,0,0,.3,0,.1,.35,.5,0,0,.07,.05,0,.17,0,.73,.01,.53,0,0,.2,.94,0,.57,0,.23,.28,0,.4,.55,.71,.03,.02,.11,.69,0,.08,0,.08,0,0,.8,0,0,.27,.35,0,0,0,.01,.23,0,.73,.04,0,.06,.01,0,0,.06,.84,0,0,.48,0,0,.01,0,.03,.2,0,0,0,0,.59,0,0,0,.09,0,.22,.34,0,.03,0,.02,.23,.01,.01,0,.75,.07,.02,.01,0,.76,.07,.25,.63,.67,.18,.98,0,.07,.87,0,0,0,.75,.71,.45,.24,0,0,.12,.4,.24,.03,.01,0,0,.1,.68,0,0,0,0,0,0,.01,0,.81,1,0,0,.1,.02,.43,0,.46,.92,0,0,0,.63,0,0,.64,.98,0,.95,.65,0,0,0,0,0,0,0,0,.18,.2,0,0,0,.04,0,.03,0,0,.13,.29,.89,.28,0,.21,0,0,0,0,0,.78,.17,0,.1,0,0,.06,0,0,.83,.06,0,0,.63,0,.07,0,0,0,0,.36,.03,0,.02,0,0,.61,.31,.67,.01,0,0,.57,.41,0,.18,.01,.95,0,0,0,.18,.58,0,0,.01,0,.13,0,.22,.33,.33,.69,.14,0,0,.23,0,.84,.56,0,.87,.15,.06,.38,0,.02,.53,.23,.36,.9,.39,.04,0,.54,.56,.99,.24,.76,.6,.09,.2,.36,.45,0,0,.13,0,0,0,0,.4,0,.34,.01,.63,0,.53,0,.85,.8,.14,.4,.63,.87,.25,0,0,.07,0,0,0,.28,0,.04,0,.05,.46,0,0,0,0,0,0,.31,0,.31,.57,.99,0,.76,0,0,0,0,1,0,0,0,.15,0,.01,.66,.03,.53,.01,.22,0,.65,.28,.31,.87,0,.03,.85,.69,.9,.41,.03,.18,.09,0,.02,.31,0,.02,.61,0,0,.04,0,0,0,.42,.21,.03,.35,0,0,.97,.03,0,.45,0,.18,0,.21,0,.16,0,0,.82,0,.49,.44,.78,0,0,0,.65,.13,.71,.5,.01,0,0,0,.69,.1,.01,0,0,0,0,0,.16,.98,.95,0,0,.46,.04,0,0,0,.24,.48,.08,.86,.48,.75,.76,.12,.16,0,0,0,.07,0,0,.73,.9,.03,0,.33,.06,0,.17,.3,.86,.18,.21,0,.98,.09,.55,.19,0,0,.41,0,0,0,0,0,0,0,.21,0,.9,0,.78,0,.21,.55,.56,0,0,0,.78,.95,0,0,0,.2,0,.03,.72,.02,0,0,.58,.49,0,0,.27,.03,0,0,.01,0,0,0,.28,.65,.02,.52,.17,0,.66,.03,0,.02,.85,0,.09,0,.28,.15,0,0,0,0,.05,.45,.04,.01,.2,0,0,0,0,0,0,.02,0,.1,0,0,0,0,0,.02,0,.34,.74,.95,.11,0,.02,0,.66,0,.72,.24,0,.74,0,.92,0,.88,0,.21,.31,.6,.42,.34,0,.25,.07,.65,.49,.41,.25,.07,.01,0,0,.56,.93,0,0,.03,.07,0,.66,.83,.07,0,.45,.77,.01,.51,.77,0,.6,0,0,.69,0,.9,.62,0,.53,.02,.22,.11,.9,.51,.04,.79,.54,0,.19,.14,.36,.06,0,.25,0,0,.55,.04,0,0,.36,0,0,0,0,0,.98,0,.06,0,0,.02,.16,.79,.92,.73,0,.03,.27,.82,.55,.58,.84,.1,.02,0,0,.39,.94,.38,.69,.94,.91,0,0,0,0,.83,0,0,.37,.31,0,0,0,0,0,0,.68,0,0,.32,.15,.34,0,.47,.68,.64,0,.96,.19,.85,1,.01,.99,.14,0,0,.32,0,.72,0,.42,.43,.61,0,.36,.84,.74,0,.38,.93,.11,0,0,0,.21,.11,.01,.04,0,0,.74,0,.09,.83,.98,0,.65,.86,0,0,.04,.02,.07,.23,.05,.61,.65,.1,.23,.82,.92,.96,.37,.3,.59,.11,.17,.24,.22,.33,0,.02,.86,.42,.01,0,0,.51,.12,0,.93,0,0,.54,0,0,.82,.4,.83,.64,.79,.09,0,.62,0,0,.55,0,.94,.25,0,.52,.91,.24,.06,.98,.01,.04,0,.88,0,.02,.86,0,.01,0,.16,.67,0,.42,.37,.44,0,.13,0,0,0,0,.61,0,0,0,0,.86,0,0,.66,0,0,.5,.06,.71,.9,.01,.09,.16,.07,.03,0,.01,.06,0,.02,0,0,.99,0,0,0,.25,.03,.03,0,0,0,0,.43,0,.77,.57,0,0,.89,.28,.29,.16,0,0,0,.01,0,.01,.75,0,.87,.72,0,.76,.53,.91,0,0,.04,.26,0,0,.58,.28,.46,0,.5,.89,0,0,.79,0,.05,0,.03,.56,.08,.01,0,.4,.07,.78,.21,.63,.77,0,0,.63,.05,0,.03,0,0,0,0,.89,.72,0,0,0,.1,0,.22,0,.47,.39,.22,.8,.09,0,.55,0,0,.14,0,0,.02,0,.11,0,.34,.01,0,0,0,.06,0,.23,0,0,0,.39,0,0,.87,0,.52,.01,.01,0,0,.51,0,0,.9,.39,0,0,.74,.5,.32,.62,.18,0,.89,.05,0,0,.16,0,0,0,.79,.52,.87,0,0,0,.52,.57,.13,.19,0,0,.68,0,.16,.46,.79,.62,.02,0,.01,.45,0,0,0,.04,.26,.88,0,0,0,0,.61,0,.64,0,.01,.01,.02,0,0,.28,.39,0,.98,0,.02,0,.83,0,.55,.87,.74,.05,0,0,0,.02,.01,.8,0,0,0,0,0,.16,.04,.17,0,.03,.95,0,.21,0,0,0,0,.29,.72,.03,0,0,.43,0,.27,.12,0,.5,.45,0,0,0,.07,.95,0,.01,0,.01,.12,.07,.84,.87,0,.01,.07,.59,0,.13,.33,.67,0,.36,.15,0,0,0,0,.03,0,.07,0,.67,.19,0,0,.98,.2,0,.98,0,0,.67,.06,0,.61,.11,0,0,.01,0,0,.01,0,.9,.01,.18,.82,.65,.52,.08,.93,0,0,.4,0,0,0,0,.12,.54,.02,0,.01,.62,.23,.47,0,0,0,0,0,0,.35,0,0,.09,.04,.97,0,.8,.28,.12,.91,0,.39,.81,.03,.02,.14,0,.45,.31,0,.11,.15,0,.03,0,0,.92,.01,.01,.6,.01,0,.01,0,.68,.68,.71,.29,.15,0,0,.01,.45,0,0,0,0,.04,.76,.97,.26,.15,.01,.15,0,0,.01,.76,.25,0,.01,.1,0,.25,0,0,0,0,0,.71,.02,0,.62,0,.42,0,0,.15,.78,0,.03,0,0,.26,.77,0,.44,.82,.21,0,1,.39,0,0,.01,0,0,0,.99,0,0,0,.59,0,.91,.05,0,.1,0,0,.57,.08,0,.03,.83,0,0,.73,.06,.05,.55,0,0,0,0,.24,.27,0,0,0,0,.08,0,0,0,0,.77,.03,0,.4,0,.01,0,0,.81,.13,0,0,0,0,.5,.06,0,0,0,.29,0,.08,0,.94,0,0,0,0,.49,0,.3,.03,0,0,.01,.63,0,0,0,0,0,0,0,0,0,.8,.15,.1,0,.22,0,.21,.17,0,.22,0,0,0,0,0,.06,.04,0,0,0,0,.23,.13,0,0,0,0,0,0,.51,0,.04,0,.24,.2,.9,.76,.33,0,0,.03,0,.4,0,.41,.62,0,0,0,0,0,.26,.02,.28,.09,0,.47,.15,0,0,0,.31,0,.51,.73,0,.44,0,.99,.47,0,0,0,0,.16,0,0,0,0,0,0,0,0,0,.33,0,.95,0,0,.65,0,.52,.24,0,.09,.02,0,.01,.95,.87,.06,.04,.16,.88,0,0,0,.43,0,0,0,0,0,0,.81,.42,.12,0,.34,0,.21,.28,.17,.17,0,0,0,.39,0,0,.16,0,.25,0,0,.02,0,.17,.86,.13,.08,.01,0,0,0,.32,0,.05,0,.89,.1,.04,.6,0,.03,0,0,0,0,.71,0,0,0,.01,.07,.59,0,0,.18,.12,0,.76,0,.77,.97,.04,.85,0,0,.42,0,0,.37,0,.02,0,0,.57,0,0,0,0,.87,0,0,0,0,0,0,0,0,0,0,0,0,.14,0,0,0,.7,.12,.05,.17,0,.14,0,.75,0,0,0,0,0,0,0,.77,0,.9,.03,0,.64,.27,.17,0,0,0,0,.1,0,0,0,.28,.46,.53,.76,.67,.76,0,0,.82,.14,0,.26,0,.02,.28,.01,.59,.1,.14,0,.55,.44,0,.09,0,0,0,0,0,.88,0,.36,.51,0,0,.01,.11,0,.2,0,.96,0,.52,0,0,.77,0,.01,.67,.45,0,.07,.22,0,0,0,0,.02,.43,0,0,0,.31,.68,.5,0,0,.91,0,0,0,.01,.03,0,0,.11,.63,0,0,0,.33,.02,0,0,.53,.42,0,.02,.83,0,.06,.92,0,.1,.77,.17,0,0,0,.59,.78,.09,.99,0,0,.6,.9,.13,.91,0,0,0,.21,0,0,0,0,0,.67,.28,0,0,.29,.22,.51,.35,.25,0,0,.02,0,.87,.01,0,.03,0,.86,.3,0,.06,.18,.57,0,0,0,0,0,.74,0,.22,.04,.81,.55,.77,0,0,.02,0,0,0,0,0,0,.02,0,0,.92,0,0,0,0,0,.34,0,.41,0,0,.07,0,0,0,0,0,0,0,.22,0,.01,0,.22,0,0,0,0,0,.08,0,0,.13,0,0,.59,0,0,.64,0,0,0,0,.14,.73,.95,.27,0,.05,0,0,0,.62,.03,.4,.15,.33,.77,0,.23,.09,0,.49,.13,0];export{a as pvalData};
