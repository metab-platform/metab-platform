const a=[0,.24,.14,.13,.32,0,.68,.1,.97,.24,.22,.3,.01,.08,.13,.04,0,.57,0,.12,.75,.39,.11,.07,.17,.39,.19,.67,.54,.33,.22,.19,.18,0,.51,.62,.01,.08,.12,.96,.5,.37,.21,.02,.45,.17,.33,.01,.68,.16,.63,0,.13,.16,.62,.04,.89,0,.73,.61,.1,.48,.29,.77,.88,.6,.15,.12,.22,.37,.7,.13,.15,.37,.1,.46,.43,.09,.43,.04,.63,.7,.78,.32,.63,.06,.39,.02,.8,.88,.48,.33,.85,.9,.02,0,.83,0,.13,.09,.58,.13,.98,.53,.88,0,.54,.09,.15,.61,.06,.81,.17,.08,.72,.32,.53,.66,.52,.15,.06,.09,0,.1,.79,.3,.37,.55,.24,.14,.8,.91,.23,.89,0,.11,.6,.17,.42,0,.31,0,.49,.16,0,.07,.29,.78,.22,.92,.15,.04,.62,.01,.26,.51,.29,0,.27,.17,.76,.96,.17,.33,.47,.4,.5,.28,.27,.58,0,.15,.33,.89,.51,.45,.33,.21,.22,.09,.34,.95,.83,.65,.36,0,0,0,.37,0,.27,.03,0,.2,.18,.16,.72,.03,0,.19,.03,.26,.11,0,.27,.8,.32,.8,.77,0,.25,.06,.02,.06,0,.55,.28,.19,.53,.14,.79,.35,.38,.07,.74,.13,.23,.47,.21,.18,.64,.42,.17,.8,0,0,.37,.15,.96,.03,.14,.14,.9,.7,.12,.04,.75,.35,.17,.82,.92,0,.79,.05,.15,0,.01,.09,.53,.63,.99,.51,.1,.35,.3,.56,.49,.53,.09,0,.18,0,.02,.57,.72,0,.98,.02,.45,.68,.92,.45,.02,.05,.24,.83,.05,.01,.79,.2,.71,.04,.31,.15,.63,.32,.03,.04,.02,.84,0,.59,.55,.51,.34,.85,.04,.22,.56,.1,.14,.13,.01,0,.83,.74,.62,.71,.47,.08,.68,.74,.14,.56,.54,.15,.28,.73,.11,.08,.25,.44,.41,0,.09,.35,.3,.73,.09,.08,.08,.82,.18,.7,.11,.79,.11,.29,1,.52,.46,.14,0,.1,.45,.05,.79,.9,.87,.53,.05,.81,.13,.01,.27,.26,0,.12,.06,.34,.91,.24,.8,.99,.02,.68,.76,1,.64,.28,.09,.54,.06,.81,.46,.19,.47,.71,.6,.68,.61,0,.34,.49,.42,.51,.33,.94,.97,.19,.32,.29,.5,.54,.77,.72,.13,.71,.94,.47,.75,.76,.13,.45,.51,0,.41,.91,.71,0,0,.54,.18,0,.96,.15,.4,0,.86,.46,.37,.99,.06,.01,.49,.26,.29,.64,.27,.03,.7,.21,.3,0,.93,.38,.58,.97,.06,.02,.36,.89,.49,.01,.05,.86,.1,.04,.03,.61,.32,.41,.13,.12,.1,.6,.11,.28,.21,.14,.24,.03,0,0,.91,.42,.07,.07,.05,.22,.76,.03,.24,.35,.57,.21,.91,.94,.76,.94,.65,.43,.28,.79,.04,.27,.18,.29,.25,.84,.79,.93,.67,.89,.13,.46,.45,.3,.98,.02,.24,.45,.25,.28,.56,.93,0,.86,.17,.63,.96,.34,.55,.14,.47,0,.51,0,.49,.06,.84,.08,.92,.41,0,0,.28,.23,.52,.94,.92,.36,0,.34,.29,.77,0,.33,.83,.13,.05,.11,.31,.28,.21,0,.08,.64,.78,.57,.3,.91,.17,.37,.52,.07,.01,.8,.02,.03,.67,.35,.03,.82,.6,.32,.09,.03,.5,.47,.08,0,.62,.56,.89,.13,.27,.3,.13,.03,.34,.87,.14,.6,.7,.13,.91,.62,0,.24,.17,.08,.47,.05,.7,.14,.76,.99,.02,.17,1,0,0,.01,0,.34,.56,.02,.2,0,.45,.87,.33,.79,.01,0,.16,.47,.54,.27,.12,.94,.02,.61,.34,.64,.41,.62,.13,.01,.03,.21,.41,.62,.52,.31,.67,.43,0,.64,0,.27,.83,.22,.42,.43,.16,.4,.04,.33,.36,.89,.07,.1,.93,0,.42,.28,.14,.02,.68,.19,.72,.21,.67,.39,.8,.22,.97,.1,.29,.65,.87,.35,.14,0,.19,.43,.36,.17,1,.19,.3,0,0,.25,0,.01,.54,.03,.46,.25,.32,.77,.24,.37,.58,.85,0,.09,.17,.6,.16,.52,0,.56,.36,.82,.25,.71,.11,.95,.01,.41,.4,.14,.29,.27,0,.91,.02,.23,.57,.62,.7,.81,.04,.95,.43,.04,.68,.3,.21,.34,.22,0,.8,.04,.17,.08,0,.14,.6,.02,.06,.21,.01,.11,.01,.4,.78,.97,.33,.56,.83,.12,.68,0,.77,0,.8,.88,.12,0,.98,0,.87,.04,.38,.65,.78,.12,.05,.25,.54,.98,.48,.04,.7,.02,.22,.13,.75,.12,.64,.47,.44,.19,.1,.23,.26,.01,.04,.16,0,.42,.02,.87,.09,.71,.86,.91,.65,.99,.66,.77,.02,.89,.84,.28,0,.01,.84,.02,.05,.12,.18,.01,.86,.8,.31,.14,.11,.84,.16,.22,.83,.02,0,.17,.29,.23,0,.54,.91,.17,.38,.95,.25,.37,1,.89,.13,.27,.08,0,.05,.49,.23,.74,.18,.08,0,.22,.65,.51,.78,0,.65,.63,.33,.02,.19,.81,.7,.49,.34,.79,.93,0,.2,.01,.22,.48,.91,.33,.31,.79,.19,.16,.6,0,0,.3,.17,.01,.33,0,.84,.2,.82,.2,.53,.18,0,.45,0,.57,0,.39,0,.26,.38,.52,.71,.92,.02,.76,.51,.46,.82,.18,.11,.03,.24,.46,0,.26,.83,.55,.02,.24,.93,.51,.88,.22,.42,.18,0,.32,0,.17,.7,.82,.53,.25,.17,.05,.18,.29,.73,.98,.01,.06,.95,.92,.32,.02,.62,.43,.26,.3,.04,.61,.95,.37,.92,.52,.03,.43,0,.06,.14,.84,.85,.62,.64,.07,.54,.22,.37,.61,.21,.2,.66,.21,.91,0,0,.08,.83,.35,.75,.32,.51,.9,.72,.03,.37,.01,.5,.14,.19,.28,0,.62,0,.13,.08,0,.5,.04,.14,.13,.45,.04,0,.53,.6,.18,.46,0,.2,.43,.2,.01,.22,.31,0,.05,.25,.22,.06,.18,.06,.03,.12,.85,.99,.48,.99,.35,0,.4,0,.97,.01,.48,.83,.52,.93,.09,.31,.62,.01,.15,.85,.05,.64,.48,.08,0,.56,.14,.41,.7,.27,.45,.16,.06,.98,.01,0,.45,.45,.61,.08,.44,.01,.18,0,.08,.13,.37,.03,.87,.76,0,.1,.32,.75,.32,.6,.18,.42,.87,.93,.01,.39,.51,.09,.17,.46,.49,.9,.04,.23,.27,.65,.84,0,.24,.47,.24,.82,0,.19,.07,.17,.55,.24,.16,0,0,.01,.01,1,.76,.22,.9,.97,.23,.2,.02,.05,.36,.47,.3,0,.91,.18,.02,.09,.36,.15,0,.19,.68,.41,.13,.51,.14,0,.75,.11,.46,0,.97,0,0,.05,.47,0,.63,.74,.79,.26,.8,.64,.14,.07,0,.11,.03,.75,.73,.17,0,.48,.24,.8,.47,.34,.7,.59,0,.28,.13,.7,.83,.12,.61,.8,.01,.53,0,.89,.34,.53,.34,.14,.08,0,.19,.09,.46,.21,.24,.71,.25,.22,0,0,.61,.73,.08,0,.37,.65,.9,.39,.13,.15,0,0,.03,.01,.17,.42,.19,.86,.18,.5,.29,.24,.04,.35,.06,0,0,.08,.4,.65,.79,0,.17,0,.51,.41,0,.56,.15,.08,.04,.01,.04,.74,0,.19,.5,.04,.67,.08,.8,0,.09,.04,.95,.11,0,.47,.05,.28,.8,.54,.23,.62,0,.65,.98,.69,0,.35,.97,.36,0,.62,.95,.35,0,.44,.03,.36,.01,.93,.13,.03,.45,.43,.53,.53,.31,.01,.43,.8,.46,.02,.47,.18,.37,.46,.57,.2,.11,0,.14,.06,.52,.21,0,.44,.06,0,.54,.31,0,.83,.35,.58,.13,.82,.24,.13,.5,.12,.88,.29,.09,.14,.07,.05,0,.81,.22,.94,.21,.66,.54,0,.71,.28,.53,.65,.69,0,.98,.93,.77,.11,.44,.51,.29,0,.78,.61,.9,.15,.54,.81,.19,.63,.73,.15,.22,0,.68,.87,.58,.4,.61,.52,.97,.88,.55,.97,.11,0,.45,.44,.83,.08,.76,.44,.96,.05,.37,.78,0,.13,.15,.76,.74,.01,.44,.37,.24,.35,.84,.29,.04,.59,.37,0,.05,.8,.03,.91,.45,.43,.55,.41,.02,.07,.14,.01,.95,.38,.62,.67,.23,.02,.77,.57,.32,.53,.1,.08,0,.07,.01,.36,.11,.91,.44,0,.54,.87,.08,.63,.71,.01,.73,.26,.14,.23,.78,.49,.38,.02,0,.41,.21,.04,.33,.38,.8,.84,.13,.97,.88,.73,.18,.87,.58,.51,.01,.97,.69,.86,0,.05,.93,.07,.6,.45,.21,.65,.5,.93,.53,.33,.12,.67,.31,.21,.72,.37,.04,.99,.02,.9,.05,.2,.67,.61,.77,.12,.36,.07,.01,.03,.59,.56,.81,0,.24,.87,.33,.89,.83,.88,.53,.48,.09,.02,.64,.81,0,.12,.56,.97,.63,.22,.83,.45,.67,.51,.6,.07,.39,.68,.63,.76,.41,.59,.76,0,.1,.18,.57,.85,.93,.76,.83,0,.56,.92,.34,.61,.71,.16,.07,.43,.77,.42,.28,.61,.62,.14,.18,.3,.71,.52,.87,0,.06,.32,.69,.84,.06,.98,.43,.55,.44,.98,.11,.89,.29,.68,.19,.18,.71,.3,.34,.57,.77,.53,.79,.28,.03,.91,.34,.95,.38,.18,.15,.89,.4,.07,.32,.55,.47,.02,.84,.21,.39,.42,.52,.34,.86,0,.34,.52,.1,.96,.11,.84,.43,.62,.51,.35,.55,.45,.03,.51,.57,.6,.74,.44,.99,.39,.39,.48,0,.36,.97,.83,.85,.13,.62,.91,.64,.3,.86,.7,.29,.87,.02,.61,.17,.01,.21,.35,.57,.62,.36,.75,.48,.91,.63,.33,.65,.52,.85,.92,.01,.74,0,.13,.57,.67,.36,.31,.03,.52,.93,.9,.05,.3,.91,.01,.44,.42,.96,.79,.44,.19,.06,.77,.25,.15,.24,.02,.97,.4,.89,.01,.74,.6,.13,.41,.15,.82,.69,.23,.22,.09,.37,.84,.03,.89,.45,.56,.25,.3,.01,.01,0,.01,.29,.99,.96,.61,.18,.1,.32,.5,.7,.81,.82,0,.1,.12,.09,.67,.99,.93,.9,.31,.47,.9,.86,.64,.26,.37,.7,.6,.64,.83,.05,.26,.67,.14,.41,.01,.27,.04,0,.74,.78,.01,.14,.33,.04,.69,.84,.11,.49,.32,.62,.28,.32,.51,.03,.95,.74,.6,.93,.26,.05,.1,.26,.8,.07,.85,.92,.42,.69,.54,.06,.31,.78,.28,.39,.09,.71,.5,0,.5,.06,.16,.56,.28,.28,.32,.8,.71,.32,.41,.24,.69,.21,.37,.76,.09,.69,.48,.2,.71,.57,.67,.02,.04,.18,.22,0,0,.04,.6,.41,.21,.56,0,.04,.11,.8,.23,.57,.4,.36,.14,.6,.54,.75,.31,.71,.2,.33,.79,0,.04,.12,0,.65,.69,.24,.58,.76,.13,.35,.6,.88,.04,.37,.52,.89,.14,.29,.9,.32,.04,0,0,.04,.4,.54,.09,.87,.98,.91,.24,.77,.68,0,.63,.24,.77,.46,.02,.04,.26,.41,.12,.17,.09,.24,.62,.81,.3,.09,.21,.27,.48,.01,.5,.22,.29,.42,0,.89,.17,.4,0,.59,.14,0,.06,.09,0,.31,.51,.38,.09,.07,.28,.37,0,0,.42,.5,.01,.21,.45,.09,.28,.36,.14,.46,.47,0,.64,.53,.51,.02,.14,.25,.36,0,.11,.08,.86,.08,.2,.32,.16,.75,.98,0,.39,.15,0,.5,.29,.36,.3,.43,.06,.45,.03,.36,.6,.53,.84,0,.09,.53,.09,.06,.69,.71,.29,.54,0,.14,.91,.12,.22,.01,.43,.1,.33,.13,.23,0,.23,.03,.38,.27,.39,.86,.33,.08,.43,.03,.27,.01,.03,.04,.17,.87,.92,.07,.32,.17,.43,.58,.7,.5,.63,.66,.18,.3,0,.33,.92,.97,.33,.24,.49,.15,.92,.8,.89,.22,.09,.62,.35,.04,.83,.39,.82,.29,.26,0,0,.02,.28,.12,.33,0,.15,.12];export{a as pvalData};
