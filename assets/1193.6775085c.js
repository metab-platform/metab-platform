const a=[.01,0,0,.53,0,0,.47,0,.21,.06,.08,.43,.81,0,0,.56,.11,.76,.35,.19,.66,.33,.54,0,.35,0,.36,.51,.13,.08,.22,.07,0,.14,.38,.83,0,.01,.05,0,.15,0,0,.73,.08,.05,.31,0,.83,.45,.63,.62,0,0,.8,.1,.96,.55,.04,0,.76,0,0,.96,.28,.25,0,0,.67,.67,.69,0,.04,.6,0,.45,.78,.54,0,.27,0,0,.08,0,.37,.21,.01,.13,0,0,.33,.67,0,0,.95,0,0,.84,.01,.51,.88,0,.18,.44,.24,.63,.02,.11,0,.02,.67,.64,.69,0,.01,0,.26,.86,0,.74,.96,.46,.75,.03,.9,.25,0,0,.31,0,0,0,.04,.33,0,.17,.03,1,.79,.55,0,.77,.01,.01,.38,.02,.96,.01,.46,.02,0,0,.79,.59,0,0,.38,.52,.43,0,.01,.04,.67,.48,0,.47,0,.74,0,0,.42,.54,0,0,.02,.27,.05,.02,.1,0,.82,.67,.48,0,.13,.01,.56,.51,.04,.03,.12,0,.42,.75,.03,0,.01,.46,.57,.1,.42,.94,0,.21,0,.16,.6,.04,.03,.98,0,0,.45,0,.66,.46,.76,0,.69,.94,.72,.48,.56,0,.85,0,0,.51,.73,.18,.53,.17,0,0,.16,.8,0,.05,.18,1,.96,0,0,0,0,0,.44,.62,.04,.85,.02,.89,.77,.01,0,.88,.76,.74,.75,0,.03,.45,.03,0,0,.35,.86,0,.88,0,.54,.07,0,0,0,.43,.01,.27,0,.67,.08,.1,.12,.01,.06,.46,.04,0,.25,.19,0,.62,0,0,0,0,.67,.08,.12,.61,.14,0,.65,.75,.07,.55,0,.04,0,.14,0,.71,.18,.34,.36,.62,.36,.21,0,.01,0,.53,0,0,.16,.05,0,.39,.06,.13,0,.61,.67,.39,.2,.09,.31,.78,0,0,.44,0,.28,.37,0,0,.9,.08,0,.24,.01,0,.96,.05,.16,.21,.22,.6,0,0,.15,.29,.04,.51,.09,0,.8,0,.79,.04,.28,.73,.94,0,.88,.1,.13,0,.49,.12,.93,.26,.61,.5,.13,.55,.74,.89,0,0,0,.61,.06,.1,.09,0,.08,.66,.48,.78,.71,.02,0,.84,.34,.94,0,0,.07,.22,0,0,0,0,.1,.66,0,0,.1,0,.16,0,.93,.97,.28,0,0,.47,.34,0,0,0,.99,.58,.01,0,0,0,0,.12,.01,0,0,.78,.1,.34,0,0,.22,.14,.02,.89,0,.05,.09,.01,.25,0,0,.97,0,0,0,.57,.26,0,.05,.02,.04,0,.02,0,0,.12,.02,.03,.05,0,0,.24,.01,0,0,0,.02,.08,.42,0,.05,0,.96,.75,0,.12,0,0,.26,.88,.23,0,.06,.42,0,0,0,.01,.13,.49,0,.93,0,.04,0,.04,.04,.28,.36,0,.23,0,.4,0,0,.27,.04,.67,.23,0,.72,.02,0,.23,.4,.02,.37,.27,.18,.67,0,.23,.45,.49,.52,.01,.08,.19,.33,.01,0,.4,.01,0,0,0,0,.69,.13,.02,.32,.73,0,.94,.9,0,.69,.96,.79,.74,.21,.21,0,0,.55,.01,0,0,.1,0,.64,.15,.13,.22,.01,.1,.99,0,0,0,.49,0,.66,.53,.48,0,0,0,.23,0,.5,0,.33,0,0,.15,0,.26,.08,0,.05,.29,.86,0,.17,0,.65,.61,0,0,.09,.5,0,0,.01,.36,0,.68,.55,.2,0,0,.84,.06,.03,.25,.52,.53,.01,.01,0,.27,.5,0,.01,.63,.59,0,0,0,.68,.8,.61,0,0,0,.04,.8,0,.4,.28,.13,0,0,0,.51,.54,.84,.86,.03,.37,0,.51,.44,.37,.09,.42,0,.02,0,.01,.79,.33,0,0,0,0,.79,.08,0,0,0,.73,.05,0,.42,.92,0,.01,.94,0,0,0,0,.09,0,.29,.33,.52,.01,.51,.39,.03,0,.14,0,.29,.21,0,.37,.79,.22,0,0,0,.43,0,0,.02,.17,.42,0,.01,.33,0,.9,.46,.01,0,.08,.51,.71,.07,.46,0,.01,.97,0,.66,0,.16,.35,.61,0,.74,.86,0,.36,.01,0,.04,.6,.04,.87,.02,.22,0,0,0,.18,.89,.15,0,.01,0,.72,.03,.02,.02,0,0,.81,0,.07,.92,0,0,.03,.63,.21,.02,.94,.03,.01,.06,0,0,.94,0,0,0,.47,0,.05,.25,0,0,.72,0,.07,.74,.71,.67,.96,0,.01,.01,0,0,.86,.13,0,.08,.66,0,0,.99,0,.83,.23,.78,.53,0,0,.12,.56,.97,.41,.38,.02,.19,.36,.09,0,.38,0,.57,0,.02,.63,.32,.22,0,.76,.51,.09,.99,.96,.62,.44,0,0,.46,0,0,.3,0,.01,.26,.21,.19,0,0,.77,.78,.04,0,.86,.18,0,.44,.45,.08,.23,.24,0,0,.33,0,.14,0,0,0,0,0,.57,0,.33,.02,.63,0,0,.02,.76,.47,.88,.36,.05,.1,.01,.69,.02,.45,.02,.2,.11,0,0,.26,.01,0,.3,0,.44,.03,.01,0,0,.23,0,0,.63,0,0,0,0,0,0,.08,.72,.14,0,.29,.01,.01,0,.02,.75,0,0,.89,0,0,.03,.02,0,0,.03,0,.78,0,0,.01,.77,0,.01,0,.74,.83,0,0,.25,.01,0,0,0,0,.07,0,.05,.03,.46,0,0,.24,0,0,0,0,.89,.82,.14,.8,0,0,0,.6,.01,.51,.17,.76,.57,.78,.54,.58,.8,.35,.03,.49,.05,.63,.88,.25,.75,0,.04,0,.36,.01,0,0,.21,0,.75,0,.53,.16,.08,0,.18,.23,.66,.01,.95,.74,.12,.28,.68,0,0,.02,.66,0,0,.39,.36,1,.02,.85,.36,.97,0,.12,.4,.04,0,.77,0,.94,.12,0,.01,.03,.97,.24,.04,.86,.25,.79,.51,0,.69,.65,.94,.16,0,.01,.75,0,0,.12,0,.84,0,.99,.52,.25,.02,.46,.24,.37,.2,.42,.06,0,0,0,.01,0,.05,0,0,0,.13,0,.7,0,.42,0,.02,.01,.02,.97,.13,.44,.4,.19,.77,.08,.02,.14,0,.09,0,.96,.1,.03,.38,.8,0,.57,.34,0,0,0,.52,.42,0,0,0,.15,0,0,.35,.32,.57,0,.37,0,0,0,.13,.45,0,.91,0,.74,.04,.42,0,.8,.58,.59,.61,.25,.24,.02,.72,0,0,0,.06,.31,.31,0,.08,.22,.01,0,.08,.01,.74,0,.32,.02,.13,.3,.95,0,0,.07,0,.3,0,0,.02,0,.38,.05,0,0,.43,.11,.75,.67,0,.13,.01,0,0,0,0,0,0,.79,.01,0,.04,.24,0,0,.16,0,0,.24,.31,.5,.87,.77,.05,.22,.7,.02,.02,0,.92,0,.74,.08,.67,.49,.49,0,0,0,.49,.51,.17,.53,.11,0,.88,0,.15,.34,.78,.83,.31,.64,.86,0,0,0,0,.22,0,.03,.32,.4,.86,0,.61,0,.87,.04,.16,.63,0,.01,.05,0,.25,.24,0,.67,0,.23,.92,0,.46,.99,.75,.28,0,0,.41,.01,0,0,0,.1,.07,.01,.27,.84,.82,.02,0,.36,0,0,.49,.7,0,0,.02,.02,.61,.88,.57,0,.84,.9,0,.72,.02,.01,0,0,0,0,.13,.37,0,0,.05,.19,.27,0,.9,.29,0,0,.12,.4,.04,0,.3,.13,.52,.96,.34,.27,0,.62,.63,.32,.04,.51,.12,.03,0,.86,.08,.4,0,0,0,.1,.05,.15,.15,0,0,0,.01,.67,0,0,0,.85,0,.54,0,0,.77,0,.23,.09,.73,.82,.07,.05,.67,.2,.62,0,.69,0,.1,0,.08,.01,.75,0,0,.84,0,.47,.59,.9,.37,0,0,.48,0,.96,0,.92,.9,.18,.4,.56,.97,0,.26,.05,.32,0,.33,.93,0,.04,.13,0,.93,0,.01,.31,.16,.05,.12,.47,0,0,0,.88,0,.8,.05,.28,.17,0,.03,.83,.81,0,0,0,.08,.22,.55,.79,.39,.92,.38,.94,.06,.02,.56,.06,.88,.1,.62,0,.75,0,.04,.06,.69,.63,.68,0,.94,.21,.45,0,.56,.46,0,.65,.45,0,.05,.26,.83,.75,0,.62,.23,.67,.47,.84,.04,0,.18,.36,.31,0,.25,.62,.56,.79,.03,.54,.19,.09,.24,0,.25,.06,.08,.8,.67,.5,.23,.14,.47,0,.37,.01,.97,0,.23,.02,.06,.04,.85,.92,0,.59,0,0,.34,0,0,0,.28,.01,.95,.03,.08,.03,0,.02,0,.89,.72,.02,0,0,0,.37,.74,0,0,.87,0,.03,.02,0,.41,0,0,.51,0,.5,.1,0,.93,.61,0,0,.93,0,0,.05,0,.08,0,0,0,0,.09,.49,.03,.7,.01,0,.03,.34,.01,.93,.5,.04,.01,0,0,.97,.49,0,0,.27,0,.74,.8,.57,.23,.88,.08,.1,.01,.9,0,.83,.96,.31,.38,.98,.29,.41,.1,0,.36,.53,0,.49,.66,.29,0,.39,.01,.31,0,0,.94,0,.84,.6,.93,.16,0,0,0,.23,0,0,.51,.22,0,.61,.02,.19,0,0,0,0,.99,0,.28,.26,.9,0,.36,.05,0,.07,.9,0,.59,0,.26,.95,0,.61,0,.35,.46,.05,0,.11,0,.27,.35,.02,.16,.36,0,0,0,0,0,0,0,.15,0,0,.39,.04,.04,.01,.38,.02,.25,.12,.02,.89,0,0,0,.36,0,0,.81,.61,.59,0,.94,0,.05,.23,.99,.97,0,.74,0,0,.7,0,.44,.45,0,.39,.18,.18,.35,0,.23,0,0,0,0,.47,.09,.21,0,.02,.03,.33,.6,0,.75,0,0,.59,.02,.41,.05,.06,.78,.1,.04,.86,0,0,.02,0,0,.08,.14,.67,0,0,0,0,.35,.7,.53,.99,.71,0,.02,.03,0,.27,.59,.4,.43,.05,.06,0,0,.52,.74,.03,.11,0,0,.9,.25,.26,0,0,0,0,0,0,.96,.02,.92,.94,.01,.05,.58,.01,.03,0,.05,.94,.44,0,.79,0,.13,.68,.27,.63,.56,.25,.04,.02,0,0,0,.92,0,0,.11,.19,.79,.17,.17,0,.81,.04,.87,.66,.26,0,0,0,0,.1,.11,.14,.05,.05,.98,.53,0,0,0,0,.57,0,0,.38,.09,.18,.92,.17,.01,.24,0,.06,1,.01,.06,0,.36,.83,.2,0,.11,0,.86,.66,.01,0,0,.89,.47,0,0,.4,.35,0,0,.45,0,.01,.68,.16,.33,.01,.09,.84,.77,.51,0,.01,.74,0,.01,.31,.24,.58,.58,.5,0,.46,0,.16,.27,.01,.67,0,.7,.54,.5,.72,0,0,0,0,.35,0,0,0,.01,0,.54,.11,.39,0,.05,.91,.41,.89,.03,0,0,0,.01,.11,.6,0,0,0,.35,0,.46,.04,0,.35,0,0,0,0,.73,.81,.28,.39,.33,0,.06,.18,0,0,.35,.3,0,.28,0,.54,0,.68,0,.81,.57,.29,0,0,0,0,.05,0,.91,0,0,0,0,0,.01,.35,0,0,0,.42,0,0,.84,.17,0,0,0,0,0,0,0,0,.02,.03,0,.46,0,0,.12,0,.26,0,0,.91,.27,.57,.01,0,.91,.02,.41,0,.01,.65,.96,.98,.18,.8,.83,.62,.29,0,.34,.57,.95];export{a as pvalData};
