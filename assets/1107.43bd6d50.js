const a=[0,.07,0,.06,0,.09,.44,.45,.61,0,0,.98,.31,0,0,.65,.04,.55,.34,.15,.4,.03,.28,0,0,0,.14,.01,.02,.31,0,.04,0,.97,.81,.78,0,0,.26,0,.52,0,0,.49,.49,0,.74,.15,.24,.28,.18,.15,0,0,.01,0,0,.48,.33,0,.01,0,0,.53,.04,.91,0,0,.47,.63,.54,0,.05,.58,0,.57,.12,.02,.03,.05,0,0,.07,0,.46,.16,0,.52,0,0,.4,.15,.26,0,.4,.29,0,.07,.12,.03,.7,0,.33,.3,.11,.23,.03,.03,0,.19,.83,.03,.08,0,.82,0,.82,.56,.03,0,.13,.75,0,.06,0,.01,0,0,.46,0,.39,.03,.11,.23,0,0,.44,.99,.63,.45,0,.66,0,0,.48,.33,.74,.12,0,.08,0,.57,.3,.84,.88,.96,.7,1,.3,0,.33,.01,.12,.5,.18,.11,0,.54,.05,0,.18,.31,.66,.26,0,.85,.44,.69,.54,0,.08,.93,.09,0,.01,.88,.48,.04,0,.43,.33,.44,.14,0,0,0,0,.63,.25,.11,.16,0,0,.45,0,0,0,.82,.25,.55,.77,0,.32,0,.45,.01,.04,.18,.64,.03,.08,.51,.41,0,0,0,.84,.62,.18,.34,.17,.1,0,0,0,.7,0,0,.35,.33,.01,0,.7,.54,.04,.99,.51,.31,.24,.54,.97,.77,.01,.52,0,.62,.1,.35,.24,0,.5,.72,.1,0,.03,.23,.66,0,.06,0,.78,0,0,0,0,.53,.41,.28,0,.37,.16,.08,.01,0,.63,0,.92,0,.03,.22,.95,.11,0,.36,.45,0,0,.01,.91,.39,.5,0,.64,.04,.43,0,.06,.01,.05,0,0,.68,.15,.46,.54,.48,.03,.36,0,.01,0,.8,0,0,.36,.31,0,.03,.43,.29,0,0,.24,.08,.15,.82,.28,.07,.04,.05,0,0,.02,.36,0,0,.27,.68,0,.8,0,.01,.7,.38,.01,.01,.21,.21,0,0,.17,.1,.58,.02,.49,0,.43,0,0,.09,.32,.13,.84,0,.01,.52,0,0,.79,.95,.48,.8,.26,.07,.68,.05,.17,.67,0,0,0,.82,.2,0,0,0,0,.12,.02,0,.48,.04,0,.31,.05,.34,0,0,.01,.07,0,0,0,0,.9,.97,0,0,.13,.02,.68,0,.89,.48,.84,0,0,.51,.68,.31,.65,0,.01,.83,.74,0,.31,0,0,0,0,0,0,.58,.01,.01,0,0,.2,0,0,.09,0,.18,.03,.14,.06,0,.09,0,0,0,0,.36,.14,.1,0,.08,0,0,.2,0,0,.67,1,0,0,.25,0,.09,0,0,0,.09,.01,.09,0,.04,0,0,.77,.9,0,.52,0,0,.07,.54,0,.21,.36,0,0,.01,0,.13,.84,0,0,0,0,.04,0,.87,.01,.17,.02,.65,.46,0,.16,0,.74,.04,.58,.17,.01,0,.58,0,.93,.04,.47,.37,.26,.72,.94,0,0,.18,.21,.23,.92,.88,.02,.12,.84,.87,0,.66,.62,0,0,0,0,.59,.03,.41,.06,.59,0,.4,.59,.19,.98,.05,.07,.09,.02,.11,0,0,.07,.58,0,0,.15,.09,.07,.66,.04,.06,0,.17,.04,0,0,.03,.89,0,.08,.23,.67,0,.63,0,0,0,.3,0,0,0,0,.53,0,.1,.13,.1,.24,.12,.75,0,.25,.48,.2,.76,0,.84,.44,.56,.6,.8,.31,.64,.09,.33,0,.9,0,.29,.3,.37,.79,.71,.03,.26,0,.84,.23,.1,.52,0,.01,.03,.11,0,0,0,.69,.08,.02,0,.09,0,0,.09,.02,.99,.11,.41,0,0,0,.39,.04,.78,.76,.04,0,0,.42,.2,.74,.2,.09,.63,0,0,.01,.5,.37,0,0,0,.1,.11,0,0,0,.01,.32,.02,.02,.34,.23,0,0,.48,0,0,0,.42,.01,0,.79,.69,.05,.02,.82,.1,0,.98,.08,.01,.41,.42,.26,.35,.61,.05,.74,0,0,.48,0,0,.13,.1,0,0,0,.02,0,.53,.02,.54,0,.11,.01,.94,.01,0,0,.5,.83,0,.61,0,.63,0,.07,.21,.34,.09,0,0,.02,.01,0,1,.01,.96,0,.37,0,0,0,.32,.79,.12,.02,.1,0,.73,.8,0,.85,.78,0,.19,0,.46,.75,0,0,0,.14,.05,.43,.46,0,.13,.03,0,0,.34,0,0,0,.26,.34,.34,0,0,0,.04,0,.06,.26,.57,.8,.57,0,0,0,.9,0,.58,.24,0,.88,.75,.3,0,.88,0,.41,.18,.82,.81,.04,0,0,.24,.27,.15,.95,.44,.44,.13,0,0,.99,.35,.14,0,.21,.58,0,.56,.16,.55,.35,.56,.5,.18,.27,.35,.7,.33,0,0,.03,.65,0,.93,.01,.29,.19,.39,0,.07,.81,.81,.03,.33,.13,.22,.63,.84,.46,0,.01,0,0,.99,.42,.32,0,.27,0,0,0,.09,0,.69,0,.86,0,0,.2,.27,.78,.29,.33,0,.54,.32,.14,.72,.17,.42,.51,.39,0,.04,.24,.98,.22,.47,.05,.57,.34,.01,0,0,.51,0,0,.3,.47,0,0,0,0,0,.21,.33,.02,0,.63,.17,.19,0,.98,.02,.63,0,.11,.08,.91,.3,.03,.04,.16,.01,0,.31,0,.65,0,.8,.06,.42,0,.06,.91,.22,0,.06,.92,0,0,0,0,.54,.01,.45,.4,0,0,.76,.14,.17,0,.83,.29,.67,.81,.55,0,.93,.61,.55,.06,.24,.2,.51,.47,.73,.79,.32,.26,.84,.37,.37,.23,.02,.18,1,.95,0,.67,.43,0,.58,0,0,0,.68,0,.03,0,0,.02,.93,0,.03,.46,.28,.8,.26,0,.57,.64,0,0,.6,0,.4,.88,0,.01,.24,.32,.95,.71,.05,.2,0,.57,0,.02,.21,.01,.01,0,.42,.14,0,.35,.53,0,0,.26,.27,.48,.32,0,.07,.16,.91,.35,0,.03,0,0,.16,0,0,.44,.08,.41,.33,.12,.45,.51,.66,.06,0,.84,.01,0,.07,0,0,.29,.07,0,0,.01,.03,.01,.24,0,.4,0,.6,0,.14,.79,.01,.06,.52,.2,.28,.05,0,.82,0,.03,0,.03,.91,.18,.95,.1,.05,.81,.01,.27,0,0,.9,.33,0,0,.12,.61,0,0,.28,.13,0,0,.35,0,0,0,.33,.95,0,.84,0,.13,.28,.4,.23,.49,.54,0,0,.01,.61,0,0,0,0,0,0,.16,.15,0,.37,.01,.05,0,.74,.11,.97,.5,.4,.62,.13,0,.52,0,0,.2,0,.64,.53,0,.31,0,.81,.34,0,0,0,.03,.05,.83,0,.99,0,0,0,.06,.99,0,.67,.01,.26,0,.01,.13,0,0,.27,.91,0,.49,.31,.45,.15,.71,.24,.28,.85,.83,.01,0,.15,0,0,0,.76,.26,.46,0,0,0,.87,.42,.97,.41,.04,0,.98,0,.48,.02,.25,.71,.16,.11,.24,.31,0,0,0,.25,.03,.89,.7,.09,.6,.03,.51,0,.67,0,.5,.33,.41,0,.02,.37,.39,0,.02,0,.38,.14,.27,0,.73,.29,.68,.3,0,0,0,.28,.07,.02,0,0,.01,0,.06,.92,.91,.5,0,.18,.37,0,.72,.63,0,0,.13,.08,.01,.02,.02,0,.83,.91,.01,.54,.64,.27,.1,0,0,0,.22,.58,0,.24,.02,.21,.31,.01,.38,.27,0,0,.37,0,0,.36,.62,.08,0,.38,.53,.67,.44,.06,.27,.37,.41,.28,.2,.63,.29,.08,0,.63,.37,.23,.99,0,.85,.02,0,0,.46,.33,0,.54,.95,.21,.16,.01,.11,.07,.47,.77,.48,.16,0,.03,.54,.04,0,.87,.09,.99,.14,0,.47,.23,.51,0,.14,.45,.2,.01,0,.34,0,.21,.12,.25,.14,0,0,.77,.65,.82,0,.67,.13,.03,.21,0,.67,.27,.16,.01,.59,0,.62,.78,0,.4,.08,0,.08,0,0,.61,0,.02,.34,.01,0,.36,0,.28,.04,.43,.01,.59,.09,0,.4,.18,0,0,0,0,.36,.13,.94,.22,.03,.11,.17,.09,0,.12,.28,.46,.21,.55,.01,.01,.24,0,.21,0,.11,.16,.26,.82,.71,.21,.05,.16,0,.08,.6,.37,.76,.06,0,.14,.6,.22,0,.29,.61,.18,.02,.01,0,0,.54,.07,.01,0,.09,.21,0,.01,.05,.32,.04,.09,.03,0,.37,0,.01,.71,.18,.02,.39,.71,.31,0,.42,.65,.32,.01,0,.47,.47,0,.98,.58,0,0,0,0,.57,0,0,0,.41,0,.24,0,.1,0,.8,0,0,.36,.33,0,0,0,0,.95,.06,0,.03,.93,.2,0,0,0,.29,0,0,.11,0,.49,0,.22,.54,.02,0,.1,.48,0,0,0,0,.02,0,0,0,0,.19,.68,.27,.97,.77,0,.29,.91,0,.18,.1,.28,.28,0,0,.01,.08,0,.16,0,0,.11,.19,0,.02,.23,0,.86,0,.35,0,.01,.04,.17,.07,.02,.21,.14,.95,0,.94,.18,.04,.04,.06,.62,0,0,0,0,0,.02,.9,.8,.08,.81,.45,.33,0,0,0,.94,0,.02,.55,.15,.64,.05,.01,.31,0,0,0,0,.45,0,.06,0,.55,0,.01,.35,.1,0,.12,0,.29,0,0,.18,0,.07,.01,.01,.41,.89,0,.04,.28,.59,.86,.93,.1,.5,0,0,0,.74,0,0,0,0,0,0,.04,.07,.87,0,.09,0,0,.01,.01,.81,0,0,0,.12,0,.15,.24,.22,.71,0,0,0,0,.33,.79,.3,.23,.97,0,0,0,.01,.11,.04,0,.28,.48,.17,.28,0,.47,0,0,0,0,.69,.04,0,0,1,.51,.05,.04,.01,.3,.14,0,.77,.08,.22,.48,.01,.77,.15,.03,.31,0,0,.14,0,.04,.43,.01,.98,0,0,0,.01,0,.48,.02,.16,.04,0,.99,0,0,.01,.01,.71,0,.5,.04,0,0,.79,.86,.21,.56,0,.57,.02,.5,.02,0,0,0,0,0,0,.89,.01,.24,0,0,.59,.27,.69,0,0,0,.95,.3,0,.1,0,.04,.46,.86,.2,.49,.15,0,.08,.12,.9,0,.33,0,.47,.52,.02,.46,.19,.04,0,.02,.92,.13,.21,0,0,.38,.01,.36,.49,0,.48,.59,.05,.01,.08,.66,0,.03,0,.16,0,.59,.1,.25,.55,0,.77,0,.03,0,.31,.04,.04,.01,0,.03,.06,.7,0,.24,0,.94,.59,.02,0,0,.32,.06,0,.03,0,.81,0,0,.75,.8,.43,.09,.33,.41,.03,0,.01,.63,.79,0,.08,.27,0,.56,.95,.02,.39,.3,.09,0,0,0,.71,.32,.32,.62,0,0,.02,.58,.33,.27,0,0,0,.05,0,0,0,0,0,.1,.91,.16,0,.44,.74,.21,.01,.79,0,0,.37,0,.01,.41,0,.98,.07,.58,.44,.02,.08,.47,.15,.01,0,0,0,.01,.19,0,.56,.02,.64,.18,.24,0,0,.63,.39,0,.18,0,.05,0,.02,0,.37,.71,0,0,0,0,0,.17,0,.1,0,0,.3,0,0,0,.15,0,0,0,.02,0,.02,.4,.27,0,0,0,0,0,.01,0,0,0,0,0,.28,0,.06,.48,0,.2,0,0,.72,.98,.79,.48,0,.19,0,0,0,.03,.91,.99,.01,.01,.23,.15,.01,.23,0,.41,.7,.35];export{a as pvalData};
