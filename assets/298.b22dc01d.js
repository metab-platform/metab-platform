const a=[0,.13,.06,.05,0,.02,.04,.74,.04,.04,.07,0,0,.01,.11,.82,.97,.06,.34,.02,.92,.03,.87,.73,.03,0,0,.84,.47,0,.17,0,0,.03,.12,.45,.05,.22,0,.09,.67,0,.23,.03,0,.42,.7,0,.92,0,.16,0,.92,.02,.11,.17,.1,0,.04,0,.55,0,0,.85,.3,.02,0,.32,.11,.79,.7,.03,.03,.62,0,.51,.79,.54,.38,0,0,0,.81,0,0,.18,0,.27,0,.01,.87,.81,.05,.03,.06,.03,.01,0,.06,.15,.4,.02,.42,.23,.01,0,.72,.52,.01,.03,.06,0,.55,.01,.01,.01,.09,.02,.02,.01,.01,.69,.54,.14,.41,0,.06,.11,.01,0,.79,.11,.92,.03,.84,.04,.05,0,0,0,0,0,0,0,0,.58,.17,.12,.05,.72,.02,.65,.44,.14,.47,.88,.16,0,.02,.24,.16,.01,0,.02,.05,.11,0,0,.6,0,0,0,.63,.13,0,.03,.71,.22,.06,.01,.85,.86,.85,.02,0,.01,.04,.02,.1,.01,.52,.48,.1,0,0,.18,0,.16,.01,0,.79,0,0,.21,.04,.03,.12,0,.14,.02,.54,.09,.02,.03,0,.03,.94,.19,.01,.47,.07,.12,.39,.06,0,0,.57,0,.33,.01,.84,.05,.03,.21,0,0,.06,.7,.36,.9,.01,.11,.22,.27,.11,.96,.93,.28,.82,.47,.71,.51,.04,.05,0,.46,.05,.21,.19,.06,.92,.56,.43,0,.72,.04,.35,0,.23,.63,0,0,.01,.08,0,.18,.09,.16,.04,.89,.03,.44,.36,.74,.1,0,.15,.02,.56,.04,.15,0,0,.95,.44,.19,.58,0,.5,.26,.12,0,0,.73,.15,.01,.77,.01,.59,.23,0,.17,.5,0,.92,.25,.81,.39,.08,0,0,.01,.27,0,.09,.04,0,.46,.3,.02,.76,.01,.71,.01,.22,.56,.09,.17,.97,.03,.01,.05,.28,.5,.02,.03,.55,.06,.06,0,0,.21,.03,.12,.02,.3,.03,.36,.07,.04,.3,0,.05,.25,.5,0,.02,0,.15,.01,.42,.62,.02,.64,.66,.26,.01,0,.71,.27,.94,.11,.77,.07,.99,.07,.29,.16,.02,0,.06,0,.42,.01,.04,0,.01,.5,.71,.19,.04,.99,.13,.05,.01,.73,.05,.01,0,.05,.05,.03,.86,.05,.02,.08,0,.08,.03,.06,.01,0,.15,0,.07,0,0,.28,.01,.68,.06,.21,.01,.08,.45,.02,.29,0,0,.33,0,0,0,.03,.02,.29,.01,0,.84,0,.22,0,0,.89,.69,.68,.21,.01,.03,0,.03,0,0,.29,.28,.53,.36,.49,0,.06,.4,.01,.26,0,.04,0,.12,.71,.19,.09,0,.05,.04,.04,.03,.05,.05,.49,.03,.33,.95,0,.82,.89,.04,0,.16,.02,.01,.79,.15,.37,.04,.03,0,.51,.3,.16,0,.1,0,.5,0,.18,.03,.18,.19,.68,.45,0,.36,.01,.9,.58,.08,0,.33,.12,.82,.02,.13,.27,.32,.59,0,0,.19,.04,.63,.11,.77,.29,.03,.21,.1,.17,.07,.23,.07,.83,.44,0,.02,.45,0,.23,.26,.12,.23,.69,.02,.08,.01,.77,.22,.36,.81,.01,.98,.04,.03,.09,.81,.41,0,.01,.55,.03,0,0,.03,.01,0,.32,.03,.04,0,.01,.21,.03,.8,.26,.97,.03,.17,0,0,.01,.13,.11,.08,.01,.01,.26,.02,.02,.33,.15,.61,.79,.82,.15,.61,.94,.05,.02,0,.5,.85,0,.96,.42,.85,.75,.26,0,0,.69,0,.95,.37,.49,.78,.15,.85,.42,.01,.31,.25,.06,.46,0,0,.33,.26,0,.67,0,0,.02,0,0,.03,.01,0,.37,.66,.72,.18,.45,.01,.09,0,.77,.7,0,.25,.11,0,0,0,.1,.37,.01,.71,.96,0,0,.01,.78,.29,.54,.01,.01,.17,.68,.02,0,0,.48,.34,.16,.98,0,0,.71,.04,.68,.06,0,0,.11,.03,0,.33,.39,.05,.36,.01,.02,0,.14,.83,.97,.73,.87,.25,.82,.6,.15,.8,0,.11,.06,0,0,.43,.07,0,.12,0,.74,0,.9,0,.05,.01,.85,.87,.16,.11,.23,0,.21,.35,0,.01,.04,.18,.01,0,.58,0,.35,.01,.04,.71,.29,.44,.18,.98,.01,.01,.66,.7,.61,.04,.03,.86,.03,.84,.19,.01,0,.05,0,.26,.38,0,.24,.03,.09,.14,0,.21,.02,0,.52,.76,.07,.15,.21,.03,.64,0,0,.01,0,.17,0,.04,.88,.36,.01,.78,0,.27,.6,.94,.18,.71,.79,0,.04,0,.02,.69,.93,.66,0,0,.34,.42,0,.05,0,.7,.47,.92,.25,.71,0,.95,.01,.02,.03,.31,.05,.01,.02,.14,.01,0,.03,.1,.03,.37,.06,0,.11,.33,0,.03,.14,.9,0,.64,.27,.32,.04,.01,0,.97,.34,.24,.27,.2,0,0,.44,.99,.6,.17,.03,.91,.51,.89,.26,.49,0,.03,.51,.09,0,0,.08,.96,.21,0,.63,0,.56,.89,.32,.03,.02,0,.09,.86,0,.41,.93,.31,.2,0,.01,0,.07,0,.1,0,.15,.01,.86,.02,.03,0,.25,.21,.02,.56,.2,.99,.82,0,0,0,.01,0,.47,.74,.05,.02,0,0,.06,.05,.25,.67,0,0,.93,.23,0,.38,.79,.21,.07,.51,.06,.15,.4,.08,.73,.08,.02,0,.7,0,.68,0,.36,.46,.71,.01,.06,1,.83,.37,.16,.02,.04,.83,0,0,.97,.65,.32,.01,.08,.01,.47,.06,.14,.63,.02,.92,.01,0,.64,0,.84,.04,.7,.73,.02,.36,.71,.17,.75,.53,.57,.47,.04,.11,.31,0,.55,.31,.01,.02,.07,.27,.93,.51,.4,.1,0,.39,.79,0,.38,.11,.03,.31,.02,0,0,0,.92,.01,.51,.99,.08,.24,.05,0,.28,.16,.17,.29,.01,.96,.79,.04,.04,.07,.19,.04,.61,.66,.2,.68,.23,0,.01,.02,.93,.71,0,.46,0,.01,0,.1,.02,0,.38,.05,.73,0,.26,.19,.03,.89,0,.06,.97,.37,.01,0,.02,.88,.04,.79,.99,.99,.33,.08,0,.3,.96,.02,.03,.68,0,.4,.05,0,0,.45,.98,.19,.15,0,.32,.01,.13,.04,.72,.01,.01,.04,.04,.08,.36,.33,.01,.13,0,.11,.19,0,.23,.07,.23,.08,.29,.5,.09,.14,0,0,.12,.23,0,0,.42,0,.59,0,0,0,.02,0,0,0,.75,.13,.63,.15,.03,.24,0,.07,.06,0,.05,.1,0,.01,0,0,.01,0,.01,0,0,.01,.01,.03,0,0,.05,.01,.06,0,.96,0,.51,.34,.61,.11,.85,.99,0,0,0,.96,.31,.66,.85,.08,.97,0,.01,.07,.01,0,.1,.07,.76,0,.01,.31,0,.84,.27,.18,.44,.07,.01,.09,.75,.12,.11,.06,0,.03,.36,.33,0,.65,0,0,.79,.77,.34,.63,.64,.2,.67,0,.62,0,.25,0,.07,.15,0,.01,0,.09,.92,0,.01,0,.68,0,.01,0,.04,.01,.66,.11,.56,.02,.45,.75,.01,0,0,.77,.91,.11,.55,.01,.01,.1,0,.02,.7,.02,.33,.61,.85,.13,0,.83,.01,0,.01,.34,.17,.54,0,0,.67,.12,.03,.39,.01,0,.05,.95,.03,.55,.01,0,0,0,.12,.74,.01,.59,.04,.83,.53,0,.02,.02,0,.07,0,.14,.63,.21,.06,.01,0,.05,.36,.02,.63,.17,0,.14,0,.38,.37,.79,.02,.83,.01,.96,.28,.53,.58,.69,.01,.22,0,.26,.01,.85,.02,.25,.01,.01,.37,.09,.23,.81,.03,0,.28,.03,0,.47,.22,.44,.03,0,.63,.36,.87,.01,0,.75,.01,.14,.38,.25,.1,0,.09,.2,.58,.24,.36,.57,.73,.92,.54,.12,.97,0,.58,.02,.04,.39,.37,.19,0,0,.35,.5,.03,0,.62,.01,.37,.52,.06,.09,.15,.72,.01,.23,.01,0,.01,0,.6,.54,.02,.15,.15,.87,1,.73,.45,.98,.24,.62,.75,0,.34,.59,0,.24,.6,0,.14,0,0,.1,0,.06,0,.04,.36,.43,0,0,.98,.41,.14,.44,.87,0,.36,.58,0,0,0,0,.11,.1,.07,.27,.03,.62,0,.23,.03,.27,.66,.14,.88,.11,.36,.1,.31,.01,.06,0,.39,.06,.1,.19,.38,.08,0,.9,.1,.01,.14,.19,.08,.86,.05,.09,.09,.17,0,.2,.06,.91,.62,.95,.02,0,.01,.27,.04,.01,0,.07,.75,.05,.22,.9,.01,0,0,0,.65,.08,.03,.25,.33,0,.58,.93,.04,0,0,.99,.01,.97,.02,.05,.01,.02,.54,.42,.02,.01,0,0,.04,.05,0,0,.01,.2,.54,0,.12,0,.16,0,.03,0,.4,0,.2,.01,0,.49,0,.01,0,.09,.15,0,.02,.45,.67,0,.06,0,0,0,.05,.07,.02,.01,.29,.09,.76,.03,0,0,.01,0,.06,.03,0,0,.37,.32,.12,.26,.01,.02,.03,.81,.02,.02,0,.08,.12,.04,.05,.53,.65,.54,.04,0,.05,.11,.5,0,.54,.03,0,.05,0,.67,0,.71,.35,.89,.13,.05,.29,.52,0,.14,.22,.56,.95,.01,.04,.01,.02,.01,0,0,0,.84,.26,.93,.05,.38,.34,.07,0,.01,0,.35,.01,.83,.82,.28,.77,.04,.11,.3,0,.01,0,.01,.84,.18,.01,.01,0,.2,0,.45,.99,0,.37,.05,.19,.17,0,.25,0,.73,.1,.57,.09,.63,.45,.08,.34,.1,.05,.55,.77,.14,0,.01,.37,.48,0,.61,.22,0,0,0,.23,.37,.34,0,.95,.55,.54,.07,.09,.03,.01,.34,.38,.39,.01,.17,.05,.01,.55,0,.36,.26,0,.3,.8,.89,.47,.58,.39,0,.49,.62,0,0,0,0,.03,.49,0,.06,.06,.34,.06,.08,.07,.25,0,.54,0,.03,.22,.35,.01,.01,.32,.08,.04,.9,.96,.28,.44,.77,.03,.01,0,.11,0,.01,.49,.13,.35,.02,.02,.3,0,0,0,.08,.59,.51,0,.02,0,0,.78,0,0,.09,0,.01,0,.05,.01,0,.03,.89,.04,.41,.2,0,.99,.11,.15,.03,.05,0,.06,.01,0,.03,.86,.02,.38,.07,.24,.37,.06,.63,.02,.03,0,.01,.05,.05,.81,.07,.23,.38,.53,.23,0,0,.26,1,.7,.17,0,.12,0,.09,.09,.17,.86,.63,.48,0,.48,.12,.43,.06,.72,0,.28,.64,0,.78,.01,.19,.13,0,.18,.9,.57,0,.49,0,.41,0,.23,.01,.01,.32,.16,.13,.43,.06,.25,.03,.03,.02,0,0,.7,.55,.55,0,.01,0,0,.55,.1,0,0,0,.83,0,0,.22,.12,0,0,.01,.18,.06,.04,.16,0,.32,.15,.01,.02,.23,0,.63,.68,0,.13,.01,0,.66,0,.67,.01,0,.08,.78,.08,.13,.53,.04,0,0,0,.41,.89,.04,0,.14,.04,.39,.05,0,0,0,0,.27,.02,0,.04,.17,.33,.75,.01,0,0,.24,.11,.01,.2,.14,.68,0,.01,.03,.03,0,.89,0,.01,0,0,.04,.03,.95,0,.26,.88,.96,.2,.25,0,0,.36,.85,0,.22,.02,.28,.04,.12,0,.67,.11,0,0,0,0,0,.03,0,.37,.01,0,.14,0,.11,0,.6,.01,0,.2,.03,0,.27,.04,.6,0,0,0,0,0,.75,0,.06,.19,.01,0,0,.01,.07,.39,.01,.18,0,.04,.17,.63,.07,.88,.03,.34,.03,.09,0,.37,.1,.5,0,.08,.04,0,.56,.02,0,0,.11,.07];export{a as pvalData};
