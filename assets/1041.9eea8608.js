const a=[.44,.52,.03,.28,.01,.05,.07,0,.3,.92,.74,.89,.86,.47,.13,.97,.03,.97,.86,.8,.25,.02,.28,.02,.38,.42,0,.71,.99,.01,.13,.65,.98,.21,.17,.45,.16,.06,.83,.56,.14,.22,.27,.84,.91,.37,.02,.22,.71,0,.87,.8,.68,.02,0,.66,.16,.26,.16,.06,0,.21,.62,.99,.18,0,.63,.05,.63,.24,.55,.59,0,.13,.01,.37,.43,.02,0,.1,.87,.01,.41,.33,.72,.14,.73,.92,.12,.07,0,.46,0,.01,.53,0,.16,.12,.08,.13,1,.37,.17,.52,.04,.92,.01,.02,.37,.39,.23,0,.93,.08,.02,.02,0,.26,.01,.79,.57,.04,.77,.71,0,.21,.13,.92,0,.18,0,0,.81,0,.25,.44,0,.13,.09,.02,.51,.05,.82,.82,.87,.05,.37,.24,.18,.33,.12,0,.91,.32,0,0,.09,.76,.4,.09,0,.67,.13,.01,.01,.07,.26,.12,0,.1,.77,.03,0,0,.24,.08,.87,.01,0,.15,.05,.93,.47,0,0,.3,.38,.48,0,.87,.92,0,.91,.39,.12,.91,.93,.04,.92,.62,.1,.06,.16,.32,.02,.05,0,0,0,.56,0,.08,.21,.21,.28,.44,.6,0,.05,.63,.03,.04,.95,.1,.01,.19,0,.43,0,.22,.23,.7,.67,.01,.16,.68,.05,.53,.39,.63,0,0,0,0,0,0,.86,.15,.56,.67,.01,.86,0,.01,.93,.55,.13,.88,.2,0,.84,0,.46,.64,.01,.09,.05,.9,.49,.21,.79,.31,.36,.06,.12,.7,.02,0,.32,.66,0,.9,0,.39,0,.01,.18,.15,.64,.59,0,0,.43,0,.05,.17,.21,.29,.09,0,.33,.03,.4,.53,.93,.01,0,0,0,.53,.14,.44,.07,.48,.23,0,.21,0,.02,.05,.52,.04,0,.5,0,0,.27,.05,0,0,.14,.01,0,.14,.02,.21,.01,0,0,.06,0,.02,.96,.95,.07,.46,.66,0,.8,0,.18,0,.15,0,.11,0,.01,.42,.07,0,.36,.93,0,.15,.11,.99,.57,.14,.74,.98,.01,.35,.78,.01,.16,.03,.82,.3,.89,0,.43,.83,.88,.45,.48,.03,.41,.52,.09,.1,.49,.77,.49,0,0,.03,.18,.97,.14,0,.52,0,.19,.43,0,.85,0,.75,.75,.25,.03,.26,0,.47,.02,.84,.85,.01,0,.06,.38,.33,.64,.81,0,.13,.78,.49,0,0,0,.01,.82,.27,0,0,.02,.41,.05,.53,.36,.26,.6,.19,.15,.02,.13,.12,.64,.41,0,.01,.65,0,.3,.01,.31,.2,.03,.07,0,.07,.23,.01,0,.01,.95,.41,.6,.03,.03,.04,.96,.16,0,.32,.15,.09,1,.59,.5,.04,.32,.05,.13,0,.11,0,.92,.01,.99,.87,.11,0,.12,.1,.02,.59,.39,0,0,.47,.97,.02,.1,.02,.63,.03,.86,.03,.9,0,.79,0,.04,.83,0,0,0,.01,.07,.06,0,.35,.32,.46,0,1,.3,.01,0,.01,.45,0,.94,.84,0,.11,.05,.55,.63,0,.49,.17,.58,.75,0,.23,.09,.95,.43,.2,.17,.03,.4,.86,.37,0,.03,.28,.06,.01,0,0,.63,.67,.37,.33,0,.78,.19,0,.05,0,.04,.01,.19,0,0,.06,.42,.28,.94,0,.02,0,.11,.29,.57,.11,.63,.99,.79,.92,0,.86,.59,0,.18,0,.67,0,.01,0,.13,0,0,.15,.91,.41,.63,.11,.8,0,.25,.71,.09,0,.09,.22,.04,0,0,.49,0,.93,.38,0,.87,0,.28,.22,.16,0,.1,.14,.36,0,0,.22,.02,.45,.99,.81,0,.77,0,.23,.15,.02,.22,.69,0,.13,.37,.26,0,.07,.89,.97,.03,.12,.43,0,.74,.29,.59,0,.85,.14,.75,.58,.78,.02,.07,0,.47,0,.81,.19,.66,.21,.42,.55,.03,.14,.4,.71,.74,0,.73,.52,.02,.56,.1,.09,.98,.48,.05,.16,.36,0,.31,.05,0,.13,.67,0,.33,0,.92,0,.01,0,.92,.22,.02,.05,.83,.62,0,.56,.18,.68,.4,.03,.64,.01,.99,.01,.36,0,.11,.6,0,0,.12,.97,.94,.15,.71,.37,.47,.02,.91,.3,.84,.16,0,.12,.88,.02,.32,.28,.02,.38,0,0,.09,.07,0,.18,.99,.2,0,0,.76,.41,.86,.77,0,0,.19,.47,0,.05,.02,0,.41,0,.07,.03,.14,.88,.02,.34,0,.01,.07,.25,.07,0,.82,.02,.48,.05,.11,.59,.01,.42,.02,.39,.98,.19,.26,.05,0,.53,0,.94,.15,.04,.08,.11,.13,0,.39,.37,.04,.14,.38,.32,0,.27,.13,.04,.24,.01,.35,.28,.07,.18,.12,.73,.87,.39,0,0,.32,.45,.06,.09,.79,0,.2,.02,.02,.52,0,.72,.05,.01,.39,.32,.2,.01,0,0,0,.47,.65,.05,0,.21,.08,0,.11,.26,0,0,0,.05,.37,0,.1,0,.49,.01,.09,.91,.02,.21,.06,.65,.03,.43,.09,.02,.68,0,.91,.41,.79,0,.43,.63,.5,.92,.19,.09,0,.81,.34,.43,.47,.1,.07,0,.26,0,.11,.03,.31,0,.48,0,.23,0,0,.21,.05,.13,0,.43,.69,0,.77,.03,.21,.01,0,.07,.03,.09,.24,.05,0,.5,.27,.1,.15,0,0,.81,0,.61,0,.72,.81,.29,0,.9,0,0,0,.03,.29,.19,.14,.01,.47,.78,0,.48,.95,.54,.92,0,.12,.3,.16,.14,0,.13,.17,.71,0,.01,0,.01,.02,0,.01,0,0,0,0,.45,.67,.56,0,0,0,0,.47,0,.12,.13,.44,.87,.3,.65,.27,.48,.86,0,.98,.1,.11,.07,.99,.18,0,.47,.01,.93,0,.05,.04,.03,.03,.65,.85,0,.75,.07,.08,.99,.97,.08,0,1,.31,0,.62,0,.22,0,.94,.96,0,.03,0,.58,.47,0,.72,.25,.23,.31,0,.07,.44,0,.77,.41,.72,.08,.09,.42,.84,.52,0,.16,.14,.32,.02,.37,.04,.93,0,.06,.2,.14,.17,0,.03,0,.78,.01,.61,.68,.4,.71,0,.11,.21,.04,.06,.8,.23,0,.07,.81,.01,.76,0,0,.65,.68,0,.27,0,.61,.27,.24,.88,.85,.18,.01,.48,0,0,.68,.82,.38,.82,.11,0,.32,.04,0,.19,.5,.7,.14,.88,0,0,.48,0,.63,.02,.14,.29,0,.59,0,.56,.2,.67,.31,.89,.56,.84,.61,.56,.48,.24,0,.89,.86,.07,.14,.71,0,.58,0,.64,.63,.34,.13,.71,0,.36,.01,.03,.11,.12,0,0,.98,.34,0,.27,.11,.06,.97,.1,.36,0,.02,.07,0,.47,.44,.03,.11,.53,.02,.39,0,0,.01,.5,.51,.87,.12,.4,0,.53,.92,.97,.44,0,.39,0,0,0,0,.19,0,.5,0,.52,.11,.04,.55,0,.01,.34,.15,.3,.6,.56,0,.3,.26,.09,.01,0,.01,.53,.17,0,.71,0,.41,.57,.6,.09,.22,.15,.07,.59,.33,.16,.5,.01,.09,.53,.86,.63,0,.66,.69,.01,.87,0,.76,.17,.11,.52,0,.13,.81,0,.2,0,.92,.02,.44,.77,0,.74,0,.55,.88,0,.74,.16,.02,.73,.01,.97,.65,.06,.1,.93,.41,1,.22,.84,.16,0,0,0,.26,.68,.87,.43,.91,.95,.45,.38,0,.05,0,.18,.07,.44,.37,.03,.72,0,.58,.15,.03,.06,.05,.2,0,.92,.05,0,.01,0,.49,.52,.68,.48,.69,0,0,.37,.15,0,.55,.34,.01,0,.22,0,.89,.08,.23,.14,0,.98,.44,0,0,.31,.28,.12,0,0,0,0,0,.02,.34,.82,0,0,0,.14,0,.44,0,.15,0,0,0,0,0,0,0,0,0,.03,0,0,.66,0,.3,.13,.97,0,.94,0,.01,0,0,.16,.05,0,.05,.18,.76,0,.93,0,.14,.66,.02,.7,0,0,.6,.02,.62,.16,0,.68,.04,.16,.03,.17,.14,.41,.97,.5,.03,.11,.74,.35,.75,.54,.53,.4,.02,.37,0,.04,.96,.4,.28,0,.33,0,.15,0,.12,.44,0,.47,.03,.5,.01,.51,0,.86,.8,.05,.22,.02,.08,.34,.17,.98,.14,.9,.03,0,.89,.06,.88,.67,.08,0,.99,0,.01,.62,.47,.2,.02,0,.97,0,.59,.51,.06,0,.92,0,0,.16,.03,0,.35,.02,0,.94,.33,.27,.52,.21,.47,.01,0,.01,.03,.59,0,.06,0,.03,.22,.46,.02,.03,0,.41,.31,.05,.09,.57,.25,0,0,0,.64,.2,.53,.35,.67,.4,0,.21,.46,0,0,.63,.79,0,.01,.01,.09,.05,0,.21,.32,.07,0,.02,.01,.87,0,.03,0,.16,.47,.03,0,.24,0,.11,.07,.37,.05,.17,.61,.3,0,.03,.07,0,.57,.34,.06,.82,.55,.59,.13,0,0,.04,.03,0,.28,.98,.81,.44,.01,0,0,.76,.85,.72,.63,.96,0,.65,0,0,0,.86,.56,.32,.3,.11,.07,.04,.23,.4,.05,.29,.03,0,.24,.26,.62,.3,0,.02,.06,.01,.12,.24,.86,.82,0,.04,.02,.24,.9,.47,0,0,.34,.8,.2,0,.23,0,.26,.15,.03,.13,.99,.04,.29,0,0,.11,.61,.21,.41,.28,.42,.87,.24,.02,.41,.23,0,.01,0,.5,.04,.06,.01,.19,0,0,0,.11,0,.01,0,.06,0,.12,.3,.43,.64,.03,.1,.47,.56,.23,0,.2,0,.31,.02,0,0,.18,.22,.13,.47,.95,.42,.96,.14,0,.58,0,.75,.65,.3,.24,.65,.2,.03,.76,.95,.09,.43,.02,.14,0,.1,0,0,.69,0,.23,0,.22,.01,.36,.72,.01,.78,.25,.19,.7,.01,0,.08,.48,.02,0,.07,0,.21,.95,.15,.09,.8,.76,.98,.02,.57,.45,.81,.35,.84,.02,.77,.01,.05,.75,.04,0,.91,0,.1,.11,.37,.45,.22,.45,.78,.43,.38,.18,0,.02,.11,.04,0,0,.03,.32,.75,.04,.06,0,.5,.55,.28,.09,0,.02,0,.85,.79,.71,.1,0,.04,.58,.73,.49,.39,0,.03,.03,.18,.34,0,0,.98,.32,.44,.86,.02,.01,.02,.37,.97,.88,.54,.29,.54,0,.66,0,.25,.64,.2,.56,0,0,0,.03,.75,.62,.64,.99,.53,.75,.85,0,0,0,.36,.68,.19,0,0,.06,0,.98,.35,.07,.43,0,.55,.01,.15,.79,0,0,.02,.26,.43,.14,0,.41,0,.1,0,.01,.77,.19,.63,.22,0,0,0,.97,.82,.02,.54,.88,.03,.57,.36,.81,.67,.18,.74,.95,0,.84,0,.44,.88,.31,.04,.25,.04,.11,.5,.83,.01,0,.87,.16,.14,0,0,.18,0,.01,.34,.41,.01,.45,.88,.12,.11,.11,.65,.07,0,.72,.92,.07,.65,.81,.42,.36,.08,0,.65,.54,.73,.35,.74,.13,.54,0,.03,.14,.07,.01,.16,.03,.05,.06,.89,.34,.29,.39,.01,.25,0,.05,.6,.87,0,.01,.37,0,0,.5,.33,.02,0,0,.36,.28,0,.34,0,.7,.15,.01,.27,.15,0,.28,0,.21,.03,.02,.27,.05,.59,.08,0,.01,.36,0,.27,.47,.03,0,.17,.06,0,.12,.57,.1,.83,.04,.89,.24,.58,.76,0,0,.37,.02,.97,.35,.18,.2,.01,.21,.13,0,.03,.05,.14,.06,0,.07,0,0,.83,.32,0,.49,.03,.72,.11,0,.54,.76,.44,.01,.2,.03,.86,.02,0,0,0,.88,.32,.29,.53,0,.56,.64,.76,.99,.34,.04,0,.15,.64,.55,.07];export{a as pvalData};
